import { useId } from 'react'

export function Pattern({
  className,
  size = 40,
  gapX = 16,
  gapY = 8,
  pattern = [
    [0, 1, 0, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 0, 0, 0, 1],
    [0, 1, 0, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 0, 0, 0, 1],
  ],
}) {
  let id = useId()
  let width = pattern[0].length * size + (pattern[0].length - 1) * gapX
  let height = pattern.length * size + (pattern.length - 1) * gapY

  return (
    <svg aria-hidden="true" className={className} width={width} height={height}>
      <defs>
        <symbol id={`${id}-0`} width={size} height={size}>
          <rect className="fill-indigo-500" width={size} height={size} />
          <circle
            className="fill-indigo-600"
            cx={size / 2}
            cy={size / 2}
            r={size * (13 / 40)}
          />
        </symbol>
        <symbol id={`${id}-1`} width={size} height={size}>
          <circle
            className="fill-indigo-300"
            cx={size / 2}
            cy={size / 2}
            r={size / 2}
          />
          <rect
            className="fill-indigo-600"
            width={size / 2}
            height={size / 2}
            x={size / 4}
            y={size / 4}
          />
        </symbol>
      </defs>
      {pattern.map((row, rowIndex) =>
        row.map((shape, columnIndex) => (
          <use
            key={`${rowIndex}-${columnIndex}`}
            href={`#${id}-${shape}`}
            x={columnIndex * size + columnIndex * gapX}
            y={rowIndex * size + rowIndex * gapY}
          />
        ))
      )}
    </svg>
  )
}
