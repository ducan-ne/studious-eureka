import { messageRewrite } from '../../src/rewrite-message'

describe('messageRewrite', () => {
  it('should match snapshot', () => {
    expect(messageRewrite('xin chào (NAME)')).toMatchSnapshot()
  })
  it('should replace random icon', () => {
    expect(messageRewrite('xin chào @icon')).not.toContain('@icon')
  })
})
