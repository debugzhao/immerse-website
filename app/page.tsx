import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Command, Focus, Sparkles } from "lucide-react"

const features = [
  { icon: CalendarDays, number: "01", title: "日程与专注，一处安排", text: "用日、周、月视图规划一天，也可以用一句话快速新建日程。" },
  { icon: Focus, number: "02", title: "一键开始，掌控节奏", text: "开始倒计时后，菜单栏随时显示剩余时间。可暂停、延长 15 分钟、提前完成或放弃。" },
  { icon: Command, number: "03", title: "全屏沉浸，也同步系统时钟", text: "进入全屏专注模式，减少干扰；配置快捷指令后，还能同时启动 macOS「时钟」倒计时。" },
  { icon: Sparkles, number: "04", title: "在恰好的时候收到提醒", text: "专注进度默认在 50% 与 80% 提醒，可自行调整；结束时通知，每晚 21:00 提醒未完成日程，时间也可更改。" },
]

const steps = [
  { number: "01", title: "先安排今天", text: "在日历中添加日程，写下任务和预计时长；也可以用 ⌘K 快速创建。" },
  { number: "02", title: "一键开始专注", text: "选中日程开始倒计时。需要时暂停、加 15 分钟、提前完成或放弃；剩余时间会显示在菜单栏。" },
  { number: "03", title: "进入沉浸模式", text: "打开全屏专注，让注意力留在眼前的事。设置快捷指令后，还可同步开启系统「时钟」倒计时。" },
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
          <h1>让日程清晰，<br /><span>让专注发生。</span></h1>
          <p>一款为 macOS 打造的沉浸式日程管理 App。<br />从规划日程到一键开始倒计时，陪你专心完成每件重要的事。</p>
          <div className="hero-actions"><a className="button-primary" href="https://github.com/debugzhao/Immerse/releases/latest" suppressHydrationWarning>下载 Immerse <ArrowRight size={16} /></a><a className="text-link" href="#features">探索功能 <ArrowDown size={14} /></a></div>
          <div className="hero-note"><span>为 macOS 14+ 打造</span><i />Apple 芯片与 Intel 均支持</div>
        </div>
        <div className="hero-caption"><span>LESS SCATTER. MORE PRESENCE.</span><span>沉浸日程 · Immerse</span></div>
      </section>

      <section className="intro wrap" id="features">
        <div className="section-label"><span>一切，刚刚好</span><span>01 — 功能</span></div>
        <div className="intro-heading"><h2>一份日程，<br /><span>一段专注。</span></h2><p>Immerse 是一款沉浸式日程管理 App：先安排一天，再一键开始倒计时。全屏专注、菜单栏计时与贴心提醒，让计划真正落地。</p></div>
        <div className="feature-grid">{features.map(({ icon: Icon, number, title, text }) => <article className="feature-card" key={number}><div className="feature-top"><span className="feature-icon"><Icon size={19} strokeWidth={1.55} /></span><span>{number}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="focus-band"><div className="focus-glow" /><div className="focus-inner wrap"><span className="section-kicker">专注，从一键开始</span><p>开始倒计时。<br /><span>进入全屏沉浸。</span></p><span className="focus-foot">菜单栏显示剩余时间 · 暂停、延长、完成或放弃</span></div></section>

      <section className="how wrap" id="how"><div className="section-label"><span>从现在开始</span><span>02 — 如何使用</span></div><div className="how-layout"><div><h2>留出一段时间，<br />给真正重要的事。</h2><p className="how-lede">不需要复杂的仪式。准备好日程，选择此刻要做的一件事，然后全心投入。</p></div><div className="steps">{steps.map((step) => <article className="step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div></div><div className="tip"><span>提醒与快捷指令</span> 专注进度默认在 50% 和 80% 提醒，可在设置中调整；倒计时结束会通知你，每天 21:00 提醒尚未完成的日程（提醒时间可更改）。首次启动的引导也会带你配置勿扰与系统「时钟」倒计时快捷指令。</div></section>

      <footer className="footer wrap"><Link className="brand" href="#top"><span className="brand-mark">i</span><span>Immerse</span></Link><span>给每一段专注，一个安静的开始。</span><a href="https://github.com/debugzhao/Immerse" target="_blank" rel="noreferrer">开源于 GitHub <ArrowUpRight size={14} /></a><small>© 2025 Immerse · 为 macOS 而作</small></footer>
    </main>
  )
}
