import { useState, useEffect, useRef, useCallback } from "react"

export function useResize() {

  const observer = useRef()
  const nullSize = {width: null, height: null}
  const [currentSize, setCurrentSize] = useState(nullSize)

  function getSize(elements)
  {
    const el = elements[0].target

    if(!el) return

    const width = el.offsetWidth ? el.offsetWidth : 0
    const height = el.offsetHeight ? el.offsetHeight : 0

    setCurrentSize({width, height})
  }

  const target = useCallback(element => {
    if(element)
    {
      observer.current = new ResizeObserver(getSize).observe(element)
    }
  }, [])

  useEffect(() => {
    return () => {
      if(observer.current) observer.current.disconnect()
    }
  }, [])

  return [target, currentSize]
}