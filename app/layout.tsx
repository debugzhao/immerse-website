import type { Metadata, Viewport } from "next"
import "./styles.css"

export const metadata: Metadata = {
  title: "沉浸日程 Immerse — 把时间，还给专注",
  description: "一款为 macOS 打造的沉浸式日程与专注 App。规划一天，然后全心投入此刻。",
  other: { google: "notranslate" },
}

export const viewport: Viewport = { themeColor: "#090b11" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" translate="no" suppressHydrationWarning><body translate="no">{children}</body></html>
}
