import React from 'react'

interface CacheItem<T> {
  data: T
  timestamp: number
  ttl: number
}

class LocalCache {
  private prefix = 'scam-guard-'
  
  set<T>(key: string, data: T, ttlMinutes: number = 30): void {
    const item: CacheItem<T> = {
      data,
      timestamp: Date.now(),
      ttl: ttlMinutes * 60 * 1000
    }
    
    try {
      localStorage.setItem(this.prefix + key, JSON.stringify(item))
    } catch (error) {
      console.warn('Failed to cache data:', error)
    }
  }
  
  get<T>(key: string): T | null {
    try {
      const stored = localStorage.getItem(this.prefix + key)
      if (!stored) return null
      
      const item: CacheItem<T> = JSON.parse(stored)
      
      // Check if expired
      if (Date.now() - item.timestamp > item.ttl) {
        this.delete(key)
        return null
      }
      
      return item.data
    } catch (error) {
      console.warn('Failed to retrieve cached data:', error)
      return null
    }
  }
  
  delete(key: string): void {
    try {
      localStorage.removeItem(this.prefix + key)
    } catch (error) {
      console.warn('Failed to delete cached data:', error)
    }
  }
  
  clear(): void {
    try {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(this.prefix)) {
          localStorage.removeItem(key)
        }
      })
    } catch (error) {
      console.warn('Failed to clear cache:', error)
    }
  }
}

export const cache = new LocalCache()

// React hook for cached API calls
export function useCachedData<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlMinutes: number = 30
) {
  const [data, setData] = React.useState<T | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<Error | null>(null)
  
  React.useEffect(() => {
    async function fetchData() {
      try {
        // Try cache first
        const cached = cache.get<T>(key)
        if (cached) {
          setData(cached)
          setLoading(false)
          return
        }
        
        // Fetch fresh data
        const result = await fetcher()
        cache.set(key, result, ttlMinutes)
        setData(result)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [key])
  
  return { data, loading, error }
}