import { get } from '../get'

export function getHotSearchList () {
  const result = get('/api/hotsearch')
  return result
}
