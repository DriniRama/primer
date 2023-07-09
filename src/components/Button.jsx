import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none',
  outline:
    'inline-flex justify-center rounded-md border py-[calc(theme(spacing.1)-1px)] px-[calc(theme(spacing.4)-1px)] text-base font-semibold tracking-tight focus:outline-none',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900',
    green: 'bg-green-600 text-white hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:bg-green-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-green-600',
    white:
      'bg-white text-green-600 hover:text-green-700 focus-visible:text-green-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-green-50 active:text-green-900/80 disabled:opacity-40 disabled:hover:text-green-600',
  },
  outline: {
    slate:
      'border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 active:border-slate-200 active:bg-slate-50 active:text-slate-900/70 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-transparent',
    green: 'border-green-300 text-green-600 hover:border-green-400 hover:bg-green-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:text-green-600/70 disabled:opacity-40 disabled:hover:border-green-300 disabled:hover:bg-transparent',
  },
}

export function Button({
  variant = 'solid',
  color = 'slate',
  className,
  ...props
}) {
  return (
    <button
      className={clsx(
        baseStyles[variant],
        variantStyles[variant][color],
        className
      )}
      {...props}
    />
  )
}

export function ButtonLink({
  variant = 'solid',
  color = 'slate',
  href,
  className,
  ...props
}) {
  return (
    <Link href={href}>
      <a
        className={clsx(
          baseStyles[variant],
          variantStyles[variant][color],
          className
        )}
        {...props}
      />
    </Link>
  )
}
