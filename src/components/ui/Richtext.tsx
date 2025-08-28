'use client'

import { cn } from '@/lib/utils'

export type RichTextProps = {
  content: string
  className?: string
}

export default function RichText({ content, className }: RichTextProps) {
  return (
    <div
      className={cn(
        'prose max-w-none prose-h1:text-h1 prose-h2:text-h2 prose-h3:text-h3 prose-h4:text-h4 prose-h5:text-h5 prose-h6:text-h6',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
