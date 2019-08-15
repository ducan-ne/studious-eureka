import nock from 'nock'
import { RESPONSE_GRAPHQL, RESPONSE_GRAPHL_BATCH } from '../data/response'
import { request, gql } from '../../src'
import { ctx } from '../data/ctx'
import { FACEBOOK_BASE, FACEBOOK_TEST } from '../data/facebook'

describe('Graphql method', () => {
  nock(FACEBOOK_BASE)
    .post('/api/graphql')
    .reply(200, RESPONSE_GRAPHQL)

  it('test graphql basic', async () => {
    const { body } = await request.graphql!(`me(){id}`, { ctx })
    expect(body).toHaveProperty('4')
  })

  nock(FACEBOOK_BASE)
    .post('/api/graphqlbatch')
    .reply(200, RESPONSE_GRAPHL_BATCH)

  it('test graphql with gql tag', async () => {
    const ME_QUERY = gql`me(){id}`
    const { body } = await request.graphqlbatch!(
      { q0: ME_QUERY, q1: ME_QUERY },
      { ctx }
    )
    expect(body).toHaveProperty('q0')
  })

  nock(FACEBOOK_BASE)
    .post('/api/graphql')
    .reply(200, RESPONSE_GRAPHQL)

  it('test graphql with gql tag', async () => {
    const ME_QUERY = gql`me(){id}`
    const { body } = await request.graphql!(ME_QUERY, { ctx })
    expect(body).toHaveProperty('4')
  })

  it('parse graphql gql tag, me()', async () => {
    const ME_QUERY = gql`
      query GetMe {
        me {
          id
        }
      }
    `
    expect(ME_QUERY).toMatchSnapshot()
  })

  it('parse graphql gql tag, viewer()', async () => {
    const ME_QUERY = gql`
      query GetMe {
        viewer {
          id
        }
      }
    `
    expect(ME_QUERY).toMatchSnapshot()
  })

  it('parse graphql complexity with gql tag', async () => {
    const ME_QUERY = gql`
      query GetViewer {
        viewer {
          actor {
            name
            groups {
              nodes {
                viewer_admin_type
                id
                name
                viewer_post_status
                visibility
                group_members {
                  count
                }
              }
            }
          }
        }
      }
    `
    expect(ME_QUERY).toMatchSnapshot()
  })
})
