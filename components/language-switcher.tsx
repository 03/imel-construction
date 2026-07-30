'use client'

import { FlagAU, FlagCN } from '@/components/flag-icons'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'
import type { Locale } from '@/lib/i18n'

const options: { locale: Locale; label: string; Flag: typeof FlagAU }[] = [
  { locale: 'en', label: 'English', Flag: FlagAU },
  { locale: 'zh', label: '中文', Flag: FlagCN },
]

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div className={cn('flex items-center gap-2', className)} role="group" aria-label={t.footer.languageTitle}>
      {options.map(({ locale: value, label, Flag }) => {
        const active = value === locale
        return (
          <button
            key={value}
            type="button"
            onClick={() => setLocale(value)}
            aria-pressed={active}
            aria-label={`${t.footer.switchTo} ${label}`}
            className={cn(
              'flex items-center gap-2 border px-3 py-2 text-sm transition-colors',
              active
                ? 'border-accent bg-accent/10 text-foreground'
                : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground',
            )}
          >
            <Flag className="h-4 w-8 shrink-0 border border-border/60" />
            <span className="font-medium">{label}</span>
          </button>
        )
      })}
    </div>
  )
}
