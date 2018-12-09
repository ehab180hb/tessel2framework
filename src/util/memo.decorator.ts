type CacheKeyFn = (...args: any[]) => any

const jsonCacheKey: CacheKeyFn = (...args) => JSON.stringify(args)

export const memo = () => (target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
  if (typeof descriptor.value !== 'function') {
    throw new Error('Memoization can be applied only to methods')
  }

  const originalFn = descriptor.value

  const cache = new Map<string, any>()

  descriptor.value = function(...args: any[]): any {
    const cacheKey = jsonCacheKey(args)

    if (cache.has(cacheKey)) {
      const cached = cache.get(cacheKey)
      // console.log('returning value from cache: ', cacheKey, key)
      return cached
    }

    const res: any = originalFn.apply(this, args)
    cache.set(cacheKey, res)
    return res
  }

  return descriptor
}
