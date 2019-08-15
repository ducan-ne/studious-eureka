import nock from 'nock'
import { request } from '../../src'
import { ctx } from '../data/ctx'
import { FACEBOOK_BASE } from '../data/facebook'
import { parse } from 'querystring'

const MUTATION = '/webgraphql/mutation'
const RESPONSE_MUTATION = '{"data": {"id": "123"}}'

describe('Graphql Mutation', () => {
  nock(FACEBOOK_BASE)
    .post(MUTATION)
    .query(true)
    .reply(200, RESPONSE_MUTATION)
  it('send mutation', async () => {
    const res = await request.mutation!('123123', {}, { ctx })
    expect(res.body).not.toBe('')
  })

  nock(FACEBOOK_BASE)
    .post(MUTATION)
    .query(true)
    .reply(200, RESPONSE_MUTATION)
  it('send mutation, should assign variables', async () => {
    const res = await request.mutation!('1', {}, { ctx })

    const req = (res as any).request

    const body = parse(req.gotOptions.body)

    expect(body.variables).not.toBeUndefined()

    const variables = JSON.parse(body.variables as any)

    expect(typeof variables.client_mutation_id).toBe('string')
    expect(typeof variables.actor_id).toBe('string')
  })
})
