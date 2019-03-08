import { get } from '../get'

export function getRecommend () {
  const result = get('/api/recommend')
  return result
}

export function getDiscList () {
  const result = get('/api/disc')
  return result
}

export function getDiscDetail (singerid) {
  const result = get('/api/singer/:singerid')
  return result
}
