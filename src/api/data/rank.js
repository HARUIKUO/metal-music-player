import { get } from '../get'

export function getRankList () {
  const result = get('/api/rank')
  return result
}
