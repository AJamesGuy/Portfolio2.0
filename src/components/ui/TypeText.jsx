import { useEffect, useState } from 'react'

/**
 * TypeText Component - Animated typing effect
 * @param {string} text - The text to animate
 * @param {number} speed - Typing speed in milliseconds per character (default: 50)
 * @param {boolean} loop - Whether to loop the animation (default: false)
 * @param {number} loopDelay - Delay before restarting animation in milliseconds (default: 1000)
 * @param {string} className - CSS class names
 * @param {JSX.Element} cursor - Custom cursor element (default: blinking |)
 */
export function TypeText({
  text = '',
  speed = 50,
  loop = false,
  loopDelay = 1000,
  className = '',
  cursor = true,
  onComplete = null
}) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [shouldType, setShouldType] = useState(true)

  useEffect(() => {
    if (!shouldType || !text) return

    let index = 0
    let timeout

    const type = () => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
        timeout = setTimeout(type, speed)
      } else {
        setIsComplete(true)
        if (onComplete) onComplete()

        if (loop) {
          timeout = setTimeout(() => {
            setDisplayedText('')
            setIsComplete(false)
            index = 0
          }, loopDelay)
        }
      }
    }

    type()

    return () => clearTimeout(timeout)
  }, [text, speed, loop, loopDelay, shouldType, onComplete])

  return (
    <span className={className}>
      {displayedText}
      {cursor && <span className="typing-cursor">|</span>}
    </span>
  )
}

export default TypeText
