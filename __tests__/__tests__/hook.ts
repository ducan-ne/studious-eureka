import nock from 'nock'
import { RESPONSE_PROFILE } from '../data/profile'
import { RESPONSE_FOR_PARSE } from '../data/response'
import { request } from '../../src'
import { ctx } from '../data/ctx'
import { FACEBOOK_BASE, FACEBOOK_TEST } from '../data/facebook'
import { parse } from 'querystring'

nock(FACEBOOK_BASE)
  .post('/me')
  .reply(200, RESPONSE_PROFILE)

test('should have assigned params in body', async () => {
  const res = await request.post(`${FACEBOOK_BASE}/me`, { ctx, form: true })

  const req = (res as any).request

  const body = parse(req.gotOptions.body)

  expect(body.fb_dtsg).toBe(ctx.fb_dtsg)
  expect(body.__user).toBe(ctx.uid)
  expect(body).toHaveProperty('jazoest')
  expect(body).toHaveProperty('__req')
  expect(body.__req).toMatch('2s')
})

nock(FACEBOOK_BASE)
  .post('/test')
  .reply(200, RESPONSE_PROFILE)

describe('Hooks', () => {
  it('have headers in options', async () => {
    const res = await request.post(FACEBOOK_TEST, { ctx, form: true })

    const req = (res as any).request

    const headers = req.gotOptions.headers

    expect(headers.cookie).toBe(ctx.cookie)
    expect(headers['user-agent']).toBe(ctx.headers['user-agent'])
  })

  nock(FACEBOOK_BASE)
    .post('/test')
    .reply(200, RESPONSE_FOR_PARSE)

  it('parse body for(;;)', async () => {
    const res = await request.post(FACEBOOK_TEST, { ctx, form: true })

    expect(res.body).toHaveProperty('mark')
    expect(res.body.mark).toBe('zuckerberg')
  })

  nock(FACEBOOK_BASE)
    .post('/test')
    .reply(200, RESPONSE_FOR_PARSE)

  it('prevent parse body with decodeBodyAjax', async () => {
    const res = await request.post(FACEBOOK_TEST, {
      ctx,
      form: true,
      decodeBodyAjax: false
    })

    expect(typeof res.body).toBe('string')
  })
})
