import { get } from '../get'

export function getRecommend () {
  const result = get('/api/recommend')
  return result
}
