import { useState, useEffect } from 'react'

export default function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDelay = 1800
) {
  const [wordIdx, setWordIdx] = useState(0)
  const [subIdx, setSubIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    if (subIdx === words[wordIdx].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDelay)
      return () => clearTimeout(timeout)
    }

    if (subIdx === 0 && isDeleting) {
      setIsDeleting(false)
      setWordIdx((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIdx((prev) => prev + (isDeleting ? -1 : 1))
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [subIdx, isDeleting, wordIdx, words, typingSpeed, deletingSpeed, pauseDelay])

  useEffect(() => {
    setText(words[wordIdx].substring(0, subIdx))
  }, [subIdx, wordIdx, words])

  return text
}
