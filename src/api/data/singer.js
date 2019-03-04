import { get } from '../get'

export function getSingerList () {
  const result = get('/api/singer')
  return result
}

export function getSingerDetail (singerid) {
  const result = get('/api/singer/:singerid')
  return result
}
