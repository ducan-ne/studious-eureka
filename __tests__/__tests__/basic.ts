import nock from 'nock'
import { RESPONSE_PROFILE } from '../data/profile'
import { request } from '../../src'
import { ctx } from '../data/ctx'

describe('Basic API', () => {
  nock('https://www.facebook.com')
    .get('/me')
    .reply(200, RESPONSE_PROFILE)

  it('request to /me', async () => {
    const response = await request('https://www.facebook.com/me', { ctx: ctx })
    expect(response.body).toContain('fb_dtsg')
  })

  it('should throw error when not place ctx', async () => {
    await expect(request('https://www.facebook.com/me')).rejects.toThrow()
  })
})
