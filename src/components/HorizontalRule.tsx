import { cn } from '@/lib/utils'

export type HorizontalRuleProps = {
  muted?: boolean
  className?: string
}

export default function HorizontalRule({
  muted,
  className,
}: HorizontalRuleProps) {
  return (
    <div className="not-prose container px-20">
      <hr
        className={cn(
          'border-t-2',
          muted && 'border-muted-foreground/20',
          className,
        )}
      />
    </div>
  )
}
