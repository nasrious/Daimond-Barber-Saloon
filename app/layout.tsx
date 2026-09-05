import type { ReactNode } from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = { title: "Daimond Barber Saloon | Pattaya Naklua" }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}
        <SpeedInsights />
      </body>
    </html>
  )
}
