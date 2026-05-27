'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const LOGO_SRC = '/images/Logos/SAHM_Azul_SAHM.svg'

export default function LoadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(100)
      return undefined
    }

    let frame
    const startedAt = performance.now()

    const tick = now => {
      const elapsed = now - startedAt
      const cycle = 2600
      const hold = 420
      const position = elapsed % (cycle + hold)
      const next = position > cycle
        ? 100
        : Math.min(100, Math.round((position / cycle) * 100))
      setProgress(next)
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="text-center">
      <div className="relative mx-auto h-28 w-72 overflow-hidden rounded-3xl bg-white shadow-2xl shadow-sahm-purple/20 ring-1 ring-sahm-purple/10 sm:w-80">
        <Image
          src={LOGO_SRC}
          alt=""
          width={320}
          height={60}
          className="absolute inset-0 m-auto h-auto w-56 object-contain opacity-20 grayscale sm:w-64"
          style={{ height: 'auto' }}
          priority
        />
        <Image
          src={LOGO_SRC}
          alt=""
          width={320}
          height={60}
          className="absolute inset-0 m-auto h-auto w-56 object-contain transition-[clip-path] duration-200 ease-out sm:w-64"
          style={{
            height: 'auto',
            clipPath: `inset(${100 - progress}% 0 0 0)`,
          }}
          priority
        />
      </div>

      <div className="mx-auto mt-6 h-2 w-44 overflow-hidden rounded-full bg-sahm-purple/10">
        <div
          className="h-full rounded-full bg-sahm-yellow transition-[width] duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 font-heading text-3xl font-extrabold uppercase italic leading-none text-sahm-purple">
        {progress}%
      </p>
    </div>
  )
}
