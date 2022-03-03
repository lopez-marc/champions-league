import { useEffect, useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = value => {
    if (value) {
      try {
        setStoredValue(value)
      } catch (error) {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue))
  }, [storedValue])

  return [storedValue, setValue]
}

export function deleteLocalStorage (key) {
  window.localStorage.removeItem(key)
}

export function deleteMatchLocalStorage (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}
