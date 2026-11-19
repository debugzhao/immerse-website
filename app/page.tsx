import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Command, Focus, Sparkles } from "lucide-react"

const features = [
  { icon: CalendarDays, number: "01", title: "让日程回到直觉", text: "用日、周、月视图梳理生活。拖一拖安排时间，双击写下每个值得认真对待的计划。" },
  { icon: Focus, number: "02", title: "开始，即刻专注", text: "从一项日程开始专注，计时、勿扰与贴心提醒同步就位。少一点切换，多一点投入。" },
  { icon: Command, number: "03", title: "一句话安排今天", text: "按下 ⌘K，用自然语言快速创建日程，或搜索、跳转。想法一出现，就有了去处。" },
  { icon: Sparkles, number: "04", title: "看见持续的自己", text: "专注时长、完成次数与连续天数，温柔记录每一次投入，让进步真实可见。" },
]

const steps = [
  { number: "01", title: "把日程放进日历", text: "点击创建，或双击时间格；写下任务、优先级与预计时长。也可以导入 Notion CSV。" },
  { number: "02", title: "选一件事，开始", text: "点下开始。Immerse 为你计时、开启勿扰，并在合适的时候提醒你。" },
  { number: "03", title: "沉浸其中，然后回顾", text: "展开全屏专注，让注意力留在当下。完成之后，回看每天累积的专注。" },
]

export default function Home() {
  return (
    <main>
      <nav className="nav wrap" aria-label="主导航">
        <Link className="brand" href="#top" aria-label="Immerse 首页"><span className="brand-mark">i</span><span suppressHydrationWarning>Immerse</span></Link>
        <div className="nav-links"><Link href="#features">功能</Link><Link href="#how">如何使用</Link><a className="repo-link" href="https://github.com/debugzhao/Immerse" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a></div>
      </nav>

      <section className="hero wrap" id="top">
        <Image className="hero-image" src="/immerse-hero.png" alt="深色背景中漂浮的半透明玻璃光球，映照柔和蓝紫色光芒" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow"><span className="live-dot" /> 为专注而造的 macOS 日程 App</span>
          <h1>把时间，<br /><span>还给专注。</span></h1>
          <p>安排得更轻一些，投入得更深一些。<br />让每一天，都有一段只属于你的沉浸时光。</p>
          <div className="hero-actions"><a className="button-primary" href="https://github.com/debugzhao/Immerse/releases/latest" suppressHydrationWarning>下载 Immerse <ArrowRight size={16} /></a><a className="text-link" href="#features">探索功能 <ArrowDown size={14} /></a></div>
          <div className="hero-note"><span>为 macOS 14+ 打造</span><i />Apple 芯片与 Intel 均支持</div>
        </div>
        <div className="hero-caption"><span>LESS SCATTER. MORE PRESENCE.</span><span>沉浸日程 · Immerse</span></div>
      </section>

      <section className="intro wrap" id="features">
        <div className="section-label"><span>一切，刚刚好</span><span>01 — 功能</span></div>
        <div className="intro-heading"><h2>不是填满时间。<br /><span>是留在此刻。</span></h2><p>日历、专注计时与勿扰模式融为一体。一个安静的空间，帮助你找到工作与生活自己的节奏。</p></div>
        <div className="feature-grid">{features.map(({ icon: Icon, number, title, text }) => <article className="feature-card" key={number}><div className="feature-top"><span className="feature-icon"><Icon size={19} strokeWidth={1.55} /></span><span>{number}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="focus-band"><div className="focus-glow" /><div className="focus-inner wrap"><span className="section-kicker">为重要的事，留一段完整时间</span><p>按下开始。<br /><span>世界安静下来。</span></p><span className="focus-foot">沉浸专注 · 自动计时 · 温柔提醒</span></div></section>

      <section className="how wrap" id="how"><div className="section-label"><span>从现在开始</span><span>02 — 如何使用</span></div><div className="how-layout"><div><h2>留出一段时间，<br />给真正重要的事。</h2><p className="how-lede">不需要复杂的仪式。准备好日程，选择此刻要做的一件事，然后全心投入。</p></div><div className="steps">{steps.map((step) => <article className="step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div></div><div className="tip"><span>初次使用？</span> 首次启动会有简短引导，带你设置通知与勿扰快捷指令。每一步都可以跳过。</div></section>

      <footer className="footer wrap"><Link className="brand" href="#top"><span className="brand-mark">i</span><span>Immerse</span></Link><span>给每一段专注，一个安静的开始。</span><a href="https://github.com/debugzhao/Immerse" target="_blank" rel="noreferrer">开源于 GitHub <ArrowUpRight size={14} /></a><small>© 2025 Immerse · 为 macOS 而作</small></footer>
    </main>
  )
}
