import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <div className="text-white flex align-center gap-3">
      <img
        alt="Payload Logo"
        width={32}
        height={32}
        loading={loading}
        fetchPriority={priority}
        decoding="async"
        className={clsx('max-w-[9.375rem] w-full h-[34px]', className)}
        src="/freeslate-white.svg"
      />
      <span className="text-3xl">FreeSlate</span>
    </div>
  )
}
