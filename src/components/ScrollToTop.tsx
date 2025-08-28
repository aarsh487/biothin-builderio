'use client'

import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex justify-center py-10 mt-12">
      <button
        onClick={handleScrollToTop}
        className="flex items-center gap-2 text-sm font-semibold uppercase text-medium hover:text-black cursor-pointer"
      >
        <span>Nach oben</span>
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  )
}
