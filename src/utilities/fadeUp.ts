import { useIsVisible } from './useIsVisible'
import { cn } from './ui'

export function useFadeUp(ref: React.RefObject<HTMLElement | null>) {
  const isVisible = useIsVisible(ref)

  return cn(
    'transform transition-all ease-in-out duration-700',
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]',
  )
}
