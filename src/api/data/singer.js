import { get } from '../get'

export function getSingerList () {
  const result = get('/api/singer')
  return result
}
