function starPoints(cx: number, cy: number, r: number, tips: number) {
  const inner = r * (tips === 5 ? 0.38 : 0.45)
  const points: string[] = []
  for (let i = 0; i < tips * 2; i++) {
    const radius = i % 2 === 0 ? r : inner
    const angle = (Math.PI / tips) * i - Math.PI / 2
    points.push(`${(cx + radius * Math.cos(angle)).toFixed(2)},${(cy + radius * Math.sin(angle)).toFixed(2)}`)
  }
  return points.join(' ')
}

/** Simplified flag of Australia, used to represent the English version. */
export function FlagAU({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden="true" focusable="false">
      <rect width="60" height="30" fill="#012169" />
      <g clipPath="url(#au-canton)">
        <path d="M0,0 L30,15 M30,0 L0,15" stroke="#ffffff" strokeWidth="3.4" />
        <path d="M0,0 L30,15 M30,0 L0,15" stroke="#c8102e" strokeWidth="1.4" />
        <path d="M15,0 V15 M0,7.5 H30" stroke="#ffffff" strokeWidth="5" />
        <path d="M15,0 V15 M0,7.5 H30" stroke="#c8102e" strokeWidth="3" />
      </g>
      <clipPath id="au-canton">
        <rect width="30" height="15" />
      </clipPath>
      <g fill="#ffffff">
        <polygon points={starPoints(15, 22.5, 4.6, 7)} />
        <polygon points={starPoints(47, 6, 2.4, 7)} />
        <polygon points={starPoints(53, 15, 2.4, 7)} />
        <polygon points={starPoints(46, 23, 2.4, 7)} />
        <polygon points={starPoints(40, 17.5, 1.9, 7)} />
        <polygon points={starPoints(45.5, 14, 1.2, 5)} />
      </g>
    </svg>
  )
}

/** Flag of the People's Republic of China, used to represent the Chinese version. */
export function FlagCN({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden="true" focusable="false">
      <rect width="60" height="30" fill="#de2910" />
      <g fill="#ffde00">
        <polygon points={starPoints(10, 8, 5.2, 5)} />
        <polygon points={starPoints(19.5, 3.4, 1.7, 5)} />
        <polygon points={starPoints(23.5, 7.2, 1.7, 5)} />
        <polygon points={starPoints(23.5, 12.4, 1.7, 5)} />
        <polygon points={starPoints(19.5, 15.8, 1.7, 5)} />
      </g>
    </svg>
  )
}
