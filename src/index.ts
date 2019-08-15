import * as got from 'got'
import { RequestPromise, Options, Response, RequestOptions } from './interface'
import uuid from 'uuid/v4'
import { parse } from 'querystring'
import { URLSearchParams } from 'url'
import { messageRewrite } from './rewrite-message'

interface Instance {
  graphql<S = any>(q: string, opts: GraphQLOptions): RequestPromise<S>
  graphqlbatch<S = any>(queries: any, opts: GraphQLOptions): RequestPromise<S>
  mutation<S = any>(
    doc_id: string,
    variables: any,
    opts: MutationOptions
  ): RequestPromise<S>
  // gql?(q: string, ..._: any[]): string
}

interface GotJSONFn {
  <T = any>(url: got.GotUrl): RequestPromise<T>
  <T = any>(url: got.GotUrl, options: Partial<Options>): RequestPromise<T>
}

let reqCounter = 100

export const request: got.GotInstance<GotJSONFn> &
  Partial<Instance> = got.extend({
  hooks: {
    afterResponse: [
      (response: Response & Partial<Options>) => {
        const options = response.request.gotOptions

        if (
          options.decodeBodyAjax !== false &&
          response.body.startsWith('for (;;)')
        ) {
          response.body = JSON.parse(response.body.slice(9))
        }

        return response
      }
    ],
    init: [
      (options: RequestOptions) => {
        if (!options.ctx) {
          throw new Error('Context required')
        }

        Object.assign(
          options.headers,
          {
            referer: 'https://www.facebook.com/',
            origin: 'https://www.facebook.com'
          },
          options.ctx.headers
        )

        let ctx = options.ctx
        let body = options.body! || {}

        if (typeof body === 'string') {
          body = parse(body)
        }

        if (
          options.ctx.fb_dtsg &&
          options.method === 'post' &&
          !options.hostname!.includes('graph.facebook.com')
        ) {
          let { fb_dtsg, uid } = options.ctx

          let ttstamp = '2'
          for (let i = 0; i < fb_dtsg.length; i++) {
            ttstamp += fb_dtsg.charCodeAt(i)
          }

          let assign: { [key: string]: string | number | undefined } = {
            fb_dtsg,
            __user: uid,
            __req: (reqCounter++).toString(36),
            __a: 1,
            jazoest: ttstamp
          }

          if (ctx.sitedata) {
            let data = ctx.sitedata
            Object.assign(assign, {
              __rev: data.client_revision,
              __pc: data.pkg_cohort,
              __hsi: data.hsi,
              __be: data.be_mode,
              dpr: data.pr
            })
          }

          // console.log(options.body!.pipe)

          if (typeof body === 'object' && typeof body === 'function') {
            for (let k in assign) {
              if (typeof assign[k] !== 'undefined') {
                ;(body as any).append(k, assign[k])!
              }
            }
          } else {
            Object.assign(body, assign)
          }

          // is mutation post

          if (body && body.variables) {
            let variables = body.variables

            let client_mutation_id = uuid()

            Object.assign(variables, { client_mutation_id })

            variables.actor_id = ctx.uid
            if (variables.input) {
              if (variables.input.message) {
                variables.input.message.text = messageRewrite(
                  variables.input.message.text
                )
              }

              variables.input.actor_id = ctx.uid
              variables.input.client_mutation_id = client_mutation_id
            }

            body.variables = JSON.stringify(variables)
          }
          // @ts-ignore
          options.body =
            typeof options.body === 'string'
              ? new URLSearchParams(body).toString()
              : body
        }
      }
    ]
  }
} as any)

interface GraphQLOptions extends RequestOptions {
  token?: string
}

export const gql = function(q: TemplateStringsArray, ..._: any[]): string {
  // prettier unknow facebook graphql syntax, so rewrite it :D
  const lines = q[0].trim().split('\n')
  return lines
    .map((line, index) => {
      if (index === lines.length - 1) return line
      if (
        !line.endsWith(',') &&
        !line.endsWith('{') &&
        !line.endsWith(' ') &&
        line.match(/[a-z]/)
      )
        return line + ','
      // if (line.trim() === '}') return line + ','
      return line
        .split(' ')
        .map((v) => {
          if (v === 'query') return 'Query'
          if (v === 'viewer') return 'viewer()'
          if (v === 'me') return 'me()'
          return v
        })
        .join(' ')
    })
    .join('\n')
    .trim()
}

request.graphql = (q: string, opts: GraphQLOptions) => {
  let endpoint = opts.token
    ? 'https://graph.facebook.com/graphql'
    : 'https://www.facebook.com/api/graphql'
  let finalOpts: GraphQLOptions = {
    ctx: opts.ctx,
    agent: opts.ctx.agent,
    form: true,
    json: true,
    headers: opts.ctx.headers
  }

  if (opts.token) {
    finalOpts.body = { q }
  } else {
    finalOpts.body = {
      q
    }
  }

  return request.post(endpoint, finalOpts)
}

request.graphqlbatch = async <T = any>(
  queries: any,
  opts: GraphQLOptions
): RequestPromise<T> => {
  let finalOpts: GraphQLOptions = {
    ctx: opts.ctx,
    agent: opts.ctx.agent,
    form: true,
    headers: opts.ctx.headers
  }

  finalOpts.body = {
    response_format: 'json',
    scheduler: 'phased',
    method: 'GET',
    queries: JSON.stringify(
      Object.keys(queries).reduce((q: any, entry, index) => {
        q[entry] = {
          priority: index,
          q: queries[entry]
        }
        return q
      }, {})
    )
  }

  const res = await request.post(
    'https://www.facebook.com/api/graphqlbatch',
    finalOpts
  )

  res.body = res.body
    .split(/\}\r\n/)
    .slice(0, -1)
    .reduce((a: any, b: string) => {
      let json = JSON.parse(b.trim() + '}')
      let n = Object.keys(json)[0]
      a[n] = json[n].response
      return a
    }, {})

  return res
}

interface MutationOptions extends RequestOptions {
  token?: string
}

request.mutation = (doc_id: string, variables: any, opts: MutationOptions) => {
  let finalOpts: RequestOptions = {
    ctx: opts.ctx,
    agent: opts.ctx.agent,
    form: true,
    query: { doc_id },
    headers: opts.ctx.headers
  }

  finalOpts.body = {
    variables,
    __a: 1,
    __dyn:
      '7AgNe-4amaWxd2u5bGyai9FxqeCwDKEyGgS8UR94WqK6EjwCzob4q6oF7zFGUpxSaxuq328GFUKbnyogyEnGi4FpeuUG4Xze3KFUmzUggOdxK4rh4rzLwAgoDAyF8OESq5o8UgxS4qKm8yElAx61cxl0zV8gJ4geGzUWeCxryo42qeDBg4CdyFFEy2iXx6WyXzooAmfxKq9BydeEdQ9BzUrKbKq58CexaaAwnK5aGbKWUW8CG6EgK4otQ8AhUiAUG2HXxK8BojUC6p8gzaz9rByVU-4K2iayppUTzUtAyaxuErxCcAmF4cLCDKi8z8hyUlxeaKE-3a5by9Wzogy8y5XxPBxeeCzEmgK7pUnoK4EsyUy2eaxG68cElzV89UbGAwxxe12zoy7oym2mfw',
    __req: 64,
    __be: 1,
    __pc: 'PHASED:ufi_home_page_pkg',
    dpr: 1,
    __rev: '1001044526',
    __s: ':agw411:zkn7ta',
    __hsi: '6723607614235708373-0'
  }

  return request.post('https://www.facebook.com/webgraphql/mutation', finalOpts)
}
