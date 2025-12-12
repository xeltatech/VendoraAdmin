'use client'

import { useTranslations } from 'next-intl'
import { Logo } from './Logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarProps {
  user: {
    name: string
    role: string
    avatar?: string
  }
}

export function Sidebar({ user }: SidebarProps) {
  const t = useTranslations()
  const pathname = usePathname()

  const menuItems = [
    { icon: '🏠', label: t('home'), href: '/home' },
    { icon: '📦', label: t('orders'), href: '/orders' },
    { icon: '👥', label: t('clients'), href: '/clients' }
  ]

  return (
    <aside className="w-64 bg-black3 min-h-screen flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <Logo />
      </div>

      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray6 flex items-center justify-center text-black2 font-bold">
            {user.avatar || user.name.charAt(0)}
          </div>
          <div>
            <p className="text-white font-medium">{user.name}</p>
            <p className="text-gray-400 text-sm">{user.role}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button
          onClick={() => {
            // Add logout logic
            window.location.href = '/login'
          }}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors w-full"
        >
          <span className="text-xl">🚪</span>
          <span>{t('logout')}</span>
        </button>
      </div>
    </aside>
  )
}
