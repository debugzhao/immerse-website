import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { ArrowDown, ArrowRight, ArrowUpRight, Brain, CalendarCheck, CalendarDays, Command, Focus, KeyRound, LayoutGrid, MessageSquareText, Mic, ShieldCheck, Smartphone, Sparkles, Timer } from "lucide-react"
import Nav from "./components/Nav"
import Effects from "./components/Effects"

type Feature = { icon: LucideIcon; number: string; title: string; text: string }

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const { icon: Icon, number, title, text } = feature
  return (
    <article className="feature-card glass-card reveal" style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}>
      <div className="feature-top"><span className="icon-chip"><Icon size={18} strokeWidth={1.6} /></span><span className="num">{number}</span></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

const DOWNLOAD_URL = "https://github.com/debugzhao/Immerse/releases/latest"
const REPO_URL = "https://github.com/debugzhao/Immerse"

const features: Feature[] = [
  { icon: CalendarDays, number: "01", title: "日程与专注，一处安排", text: "用日、周、月视图规划一天，也可以用一句话快速新建日程。" },
  { icon: Focus, number: "02", title: "一键开始，掌控节奏", text: "开始倒计时后，菜单栏随时显示剩余时间。可暂停、延长 15 分钟、提前完成或放弃。" },
  { icon: Command, number: "03", title: "全屏沉浸，也同步系统时钟", text: "进入全屏专注模式，减少干扰；配置快捷指令后，还能同时启动 macOS「时钟」倒计时。" },
  { icon: Sparkles, number: "04", title: "在恰好的时候收到提醒", text: "专注进度默认在 50% 与 80% 提醒，可自行调整；结束时通知，每晚 21:00 提醒未完成日程，时间也可更改。" },
]

// Upcoming: iPhone app.
const iphoneFeatures: Feature[] = [
  { icon: Smartphone, number: "05", title: "口袋里的沉浸日程", text: "日程、收集箱和目标经 iCloud 与 Mac 同步，在哪台设备上安排都不会丢。" },
  { icon: Timer, number: "06", title: "锁屏与灵动岛倒计时", text: "专注剩余时间显示在锁屏和灵动岛上，不用解锁就能看到。" },
  { icon: LayoutGrid, number: "07", title: "桌面小组件", text: "在主屏幕查看今天的安排，一点即可完成或开始专注。" },
  { icon: Mic, number: "08", title: "说一句，就记下了", text: "通过 Siri 或语音输入，想法直接进入收集箱。" },
]

// Upcoming: AI schedule assistant.
const assistantFeatures: Feature[] = [
  { icon: MessageSquareText, number: "09", title: "一句话交给秘书", text: "说一句或粘贴一段，自动整理出标题、时长、优先级和截止日；大任务拆成小步骤。" },
  { icon: CalendarCheck, number: "10", title: "一键排进日程", text: "避开会议，把最难的事排进你精力最好的时段。你确认后才会生效。" },
  { icon: ShieldCheck, number: "11", title: "计划乱了，有人兜底", text: "专注被打断或延长时，自动顺延后面的日程；截止日来不及时提前提醒并给出补救方案。" },
  { icon: Brain, number: "12", title: "越用越懂你", text: "校准估时、找出你的高效时段。早上给出今天最重要的三件事，晚上陪你复盘。" },
]

const steps = [
  { number: "01", title: "先安排今天", text: "在日历中添加日程，写下任务和预计时长；也可以用 ⌘K 快速创建。" },
  { number: "02", title: "一键开始专注", text: "选中日程开始倒计时。需要时暂停、加 15 分钟、提前完成或放弃；剩余时间会显示在菜单栏。" },
  { number: "03", title: "进入沉浸模式", text: "打开全屏专注，让注意力留在眼前的事。设置快捷指令后，还可同步开启系统「时钟」倒计时。" },
]

// Facts lifted from the feature copy above, surfaced as a quick-glance strip.
const stats = [
  { value: "50% · 80%", label: "专注进度默认提醒" },
  { value: "+15 分钟", label: "一键延长倒计时" },
  { value: "21:00", label: "每晚提醒未完成日程" },
  { value: "macOS 14+", label: "Apple 芯片与 Intel 均支持" },
]

export default function Home() {
  return (
    <>
      <Effects />
      <Nav />
      <main>
        <section className="hero" id="top">
          <div className="hero-bg" aria-hidden="true">
            <div className="aurora aurora-a" />
            <div className="aurora aurora-b" />
            <div className="hero-orb"><Image src="/immerse-hero.png" alt="" fill priority sizes="(max-width: 760px) 160vw, 1200px" /></div>
            <div className="horizon" />
            <div className="grain" />
          </div>
          <div className="hero-content wrap">
            <span className="eyebrow glass reveal"><span className="live-dot" /> 为专注而造的 macOS 日程 App</span>
            <h1 className="grad-text reveal">让日程清晰，<br />让专注发生。</h1>
            <p className="hero-lede reveal">一款为 macOS 打造的沉浸式日程管理 App。<br />从规划日程到一键开始倒计时，陪你专心完成每件重要的事。</p>
            <div className="hero-actions reveal">
              <a className="btn btn-light" href={DOWNLOAD_URL} suppressHydrationWarning>下载 Immerse <ArrowRight size={16} /></a>
              <a className="btn btn-glass" href="#features">探索功能 <ArrowDown size={14} /></a>
            </div>
            <div className="hero-note reveal"><span>为 macOS 14+ 打造</span><i />Apple 芯片与 Intel 均支持</div>
          </div>
          <div className="stats wrap reveal">
            <div className="stats-inner glass">
              {stats.map((s) => <div className="stat" key={s.label}><span className="stat-value">{s.value}</span><span className="stat-label">{s.label}</span></div>)}
            </div>
            <div className="hero-caption"><span>LESS SCATTER. MORE PRESENCE.</span><span>沉浸日程 · Immerse</span></div>
          </div>
        </section>

        <section className="band band-raised" id="features">
          <div className="wrap">
            <div className="section-label reveal"><span>一切，刚刚好</span><span>01 — 功能</span></div>
            <div className="intro-heading">
              <h2 className="grad-text reveal">一份日程，<br />一段专注。</h2>
              <p className="reveal">Immerse 是一款沉浸式日程管理 App：先安排一天，再一键开始倒计时。全屏专注、菜单栏计时与贴心提醒，让计划真正落地。</p>
            </div>
            <div className="feature-grid">
              {features.map((f, i) => <FeatureCard feature={f} index={i} key={f.number} />)}
            </div>
          </div>
        </section>

        <section className="band focus-band">
          <div className="focus-glow" aria-hidden="true" />
          <div className="focus-inner wrap">
            <div className="focus-copy">
              <span className="kicker reveal">专注，从一键开始</span>
              <p className="focus-title grad-text reveal">开始倒计时。<br />进入全屏沉浸。</p>
              <span className="focus-foot reveal">菜单栏显示剩余时间 · 暂停、延长、完成或放弃</span>
            </div>
            {/* Decorative countdown mock that echoes the in-app focus timer. */}
            <div className="timer glass-card reveal" aria-hidden="true">
              <div className="timer-head"><span className="live-dot" /><span>专注中</span><span className="timer-tag">菜单栏</span></div>
              <div className="timer-ring">
                <svg viewBox="0 0 120 120">
                  <defs>
                    <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#eef2fc" />
                      <stop offset="100%" stopColor="#8f9bff" />
                    </linearGradient>
                  </defs>
                  <circle className="ring-track" cx="60" cy="60" r="52" />
                  <circle className="ring-progress" cx="60" cy="60" r="52" />
                </svg>
                <div className="timer-readout"><strong>18:42</strong><span>剩余时间</span></div>
              </div>
              <div className="timer-bar"><span className="bar-fill" /><i style={{ left: "50%" }}><b>50%</b></i><i style={{ left: "80%" }}><b>80%</b></i></div>
              <div className="timer-actions"><span>暂停</span><span>+15 分钟</span><span>完成</span><span>放弃</span></div>
            </div>
          </div>
        </section>

        <section className="band band-raised" id="how">
          <div className="wrap">
            <div className="section-label reveal"><span>从现在开始</span><span>02 — 如何使用</span></div>
            <div className="how-layout">
              <div className="how-copy">
                <h2 className="grad-text reveal">留出一段时间，<br />给真正重要的事。</h2>
                <p className="how-lede reveal">不需要复杂的仪式。准备好日程，选择此刻要做的一件事，然后全心投入。</p>
              </div>
              <div className="steps">
                {steps.map((step, i) => (
                  <article className="step glass-card reveal" style={{ "--delay": `${i * 90}ms` } as React.CSSProperties} key={step.number}>
                    <span className="step-num">{step.number}</span>
                    <div><h3>{step.title}</h3><p>{step.text}</p></div>
                  </article>
                ))}
              </div>
            </div>
            <div className="tip glass reveal"><span className="tip-title"><Sparkles size={14} /> 提醒与快捷指令</span><p>专注进度默认在 50% 和 80% 提醒，可在设置中调整；倒计时结束会通知你，每天 21:00 提醒尚未完成的日程（提醒时间可更改）。首次启动的引导也会带你配置勿扰与系统「时钟」倒计时快捷指令。</p></div>
          </div>
        </section>

        <section className="band soon-band" id="iphone">
          <div className="soon-glow" aria-hidden="true" />
          <div className="wrap">
            <div className="section-label reveal"><span>即将推出</span><span>03 — iPhone 版</span></div>
            <div className="soon-heading">
              <div>
                <span className="soon-badge reveal"><span className="live-dot" />iPhone 版 · 即将推出</span>
                <h2 className="grad-text reveal">专注，<br />也装进口袋。</h2>
                <p className="reveal">在 Mac 上安排，在 iPhone 上继续。倒计时、小组件和语音记录，随手可用。</p>
              </div>
              {/* Decorative Dynamic Island + Live Activity mock. */}
              <div className="island-mock reveal" aria-hidden="true">
                <div className="island"><span className="island-logo"><Image src="/immerse-logo.png" alt="" width={18} height={18} /></span><span className="island-time">18:42</span></div>
                <div className="live-activity glass">
                  <div className="la-top"><span className="live-dot" /><span>专注中</span><span className="la-time">剩余 18:42</span></div>
                  <div className="la-bar"><span /></div>
                </div>
              </div>
            </div>
            <div className="feature-grid">
              {iphoneFeatures.map((f, i) => <FeatureCard feature={f} index={i} key={f.number} />)}
            </div>
          </div>
        </section>

        <section className="band band-raised" id="assistant">
          <div className="wrap">
            <div className="section-label reveal"><span>即将推出</span><span>04 — 私人日程秘书</span></div>
            <div className="soon-heading">
              <div>
                <span className="soon-badge reveal"><Sparkles size={13} />私人日程秘书 · 即将推出</span>
                <h2 className="grad-text reveal">说出要做的事，<br />剩下的交给秘书。</h2>
                <p className="reveal">整理任务、排进日程、计划被打乱时帮你重排。每一步都由你确认。</p>
              </div>
              {/* Decorative parsed-task mock: request in, structured plan out. */}
              <div className="assistant-mock glass-card reveal" aria-hidden="true">
                <div className="bubble">周五前交季度报告，大概要 6 小时</div>
                <div className="parsed">
                  <span className="parsed-title"><Sparkles size={13} /> 已整理并拆成 3 步</span>
                  <div className="chips"><span>季度报告</span><span>6 小时</span><span>重要</span><span>周五截止</span></div>
                  <div className="parsed-actions"><span className="ok">采用方案</span><span>调整</span></div>
                </div>
              </div>
            </div>
            <div className="feature-grid">
              {assistantFeatures.map((f, i) => <FeatureCard feature={f} index={i} key={f.number} />)}
            </div>
            <p className="fineprint reveal"><KeyRound size={13} />智能解析需要填写你自己的 Claude API Key；不填写时，排期、重排、提醒和复盘照样可用。AI 可随时关闭。</p>
          </div>
        </section>

        <section className="band cta">
          <div className="cta-glow" aria-hidden="true" />
          <div className="wrap cta-inner">
            <span className="cta-logo glass reveal"><Image src="/immerse-logo.png" alt="" width={44} height={44} aria-hidden="true" /></span>
            <h2 className="grad-text reveal">给每一段专注，一个安静的开始。</h2>
            <div className="hero-actions reveal">
              <a className="btn btn-light" href={DOWNLOAD_URL} suppressHydrationWarning>下载 Immerse <ArrowRight size={16} /></a>
              <a className="btn btn-glass" href={REPO_URL} target="_blank" rel="noreferrer">开源于 GitHub <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <a className="brand" href="#top"><span className="brand-orb"><Image className="brand-mark" src="/immerse-logo.png" alt="" width={24} height={24} aria-hidden="true" /></span><span>Immerse</span></a>
            <p>沉浸日程 · Immerse<br />让日程清晰，让专注发生。</p>
          </div>
          <div className="footer-cols">
            <div><span>产品</span><a href="#features">功能</a><a href="#how">如何使用</a><a href="#iphone">即将推出</a><a href={DOWNLOAD_URL}>下载 Immerse</a></div>
            <div><span>开源</span><a href={REPO_URL} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a><a href={`${REPO_URL}/releases`} target="_blank" rel="noreferrer">Releases <ArrowUpRight size={12} /></a></div>
          </div>
        </div>
        <div className="wrap footer-bottom"><small>© 2025 Immerse · 为 macOS 而作</small><small>给每一段专注，一个安静的开始。</small></div>
      </footer>
    </>
  )
}
