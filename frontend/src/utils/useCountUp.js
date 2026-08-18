import { useEffect, useRef, useState } from 'react'

export function useCountUp(targetText, shouldStart, duration = 1500) {
  const [displayValue, setDisplayValue] = useState(null)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!shouldStart || hasRun.current) return
    hasRun.current = true

    const match = targetText.match(/([\d,.]+)(.*)/)
    if (!match) {
      setDisplayValue(targetText)
      return
    }

    const numericPart = parseFloat(match[1].replace(/,/g, ''))
    const suffix = match[2] || ''
    const isDecimal = match[1].includes('.')

    let startTime = null

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      const current = numericPart * eased

      const formatted = isDecimal ? current.toFixed(1) : Math.round(current).toLocaleString('en-IN')
      setDisplayValue(`${formatted}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setDisplayValue(targetText)
      }
    }

    requestAnimationFrame(step)
  }, [shouldStart, targetText, duration])

  return displayValue ?? '0'
}