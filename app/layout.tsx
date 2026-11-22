import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./styles.css"

// Latin glyphs come from Inter; CJK falls back to the platform UI font (PingFang SC etc.).
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: "Immerse — 沉浸式日程与专注管理",
  description: "用 Immerse 规划日程，一键开始专注倒计时；在全屏沉浸中完成重要的事，并用贴心提醒找回每天的节奏。",
  icons: {
    icon: "/immerse-logo.png",
    shortcut: "/immerse-logo.png",
    apple: "/immerse-logo.png",
  },
  other: { google: "notranslate" },
}

export const viewport: Viewport = { themeColor: "#05070b", colorScheme: "dark" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" translate="no" className={inter.variable} suppressHydrationWarning><body translate="no">{children}</body></html>
}
