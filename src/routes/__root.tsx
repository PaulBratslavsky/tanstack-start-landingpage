import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { Navbar } from '@/components/Navbar'

import { ThemeProvider } from '@/components/theme-provider'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Landing Page - Modern React Framework',
      },
      {
        name: 'description',
        content: 'A modern landing page built with TanStack Start, React, TypeScript, and Tailwind CSS. Featuring responsive design, dark mode support, and beautiful UI components.',
      },
      {
        name: 'keywords',
        content: 'TanStack, React, TypeScript, Tailwind CSS, Landing Page, SSR, Server-Side Rendering, Shadcn UI',
      },
      {
        name: 'author',
        content: 'TanStack',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/logo192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: '/logo512.png',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var e=localStorage.getItem('vite-ui-theme')||'dark',t=document.documentElement;t.classList.remove('light','dark'),'system'===e?t.classList.add(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):t.classList.add(e)}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Navbar />

          <main className='container mx-auto'>
            {children}
          </main>
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  )
}
