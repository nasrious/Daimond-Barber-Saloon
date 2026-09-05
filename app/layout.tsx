import type { ReactNode } from "react"

export const metadata = { title: "sparkling-umbrella-269043.framer.app" }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
