'use client'

import { useEffect, useMemo, useState } from 'react'
import { Activity, Bell, Bot, CalendarDays, ChevronRight, CircleHelp, Clock3, Command, Gauge, LayoutDashboard, Menu, Radio, Search, ShieldCheck, Sparkles, Star, Target, Trophy, X } from 'lucide-react'
import { PRODUCT, analystPrompts, fixtures, getFixture, initials, marketMix, popularPicks, type Fixture, type PopularPick } from '@/lib/punta-data'

type View = 'today' | 'picks' | 'live' | 'ai'

const navItems: { id: View; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'today', label: 'Today', icon: LayoutDashboard },
  { id: 'picks', label: 'Picks', icon: Target },
  { id: 'live', label: 'Live', icon: Radio },
  { id: 'ai', label: 'AI Analyst', icon: Bot },
]

function Signal({ tone = 'green', children }: { tone?: 'green' | 'amber' | 'muted'; children: React.ReactNode }) {
  return <span className={`signal signal-${tone}`}><span className="signal-dot" />{children}</span>
}

function TeamMark({ name, short }: { name: string; short: string }) {
  return <div className="team-mark" title={name}>{short.slice(0, 3)}</div>
}

function FixtureRow({ fixture, onSelect }: { fixture: Fixture; onSelect: (fixture: Fixture) => void }) {
  const isLive = fixture.status === 'live'
  return (
    <button className="fixture-row" onClick={() => onSelect(fixture)} aria-label={`Open ${fixture.home} versus ${fixture.away}`}>
      <div className="fixture-time">{isLive ? <><span className="live-pulse" />{fixture.minute}</> : fixture.kickoff}<small>{fixture.competition}</small></div>
      <div className="fixture-teams"><div><TeamMark name={fixture.home} short={fixture.homeShort} /><span>{fixture.home}</span></div><div><TeamMark name={fixture.away} short={fixture.awayShort} /><span>{fixture.away}</span></div></div>
      <div className="fixture-score">{fixture.score ? <><strong>{fixture.score[0]}</strong><strong>{fixture.score[1]}</strong></> : <span>—</span>}</div>
      <div className="fixture-prediction"><span>{fixture.prediction}</span><strong>{fixture.probability}%</strong></div>
      <ChevronRight className="row-chevron" aria-hidden="true" />
    </button>
  )
}

function PickCard({ fixture, onSelect, featured = false }: { fixture: Fixture; onSelect: (fixture: Fixture) => void; featured?: boolean }) {
  return <button className={`pick-card ${featured ? 'pick-featured' : ''}`} onClick={() => onSelect(fixture)}>
    <div className="pick-card-top"><span className="eyebrow">{featured ? 'TOP INTELLIGENCE' : fixture.competition}</span><span className={`confidence confidence-${fixture.confidence.toLowerCase()}`}>{fixture.confidence}</span></div>
    <div className="pick-match"><TeamMark name={fixture.home} short={fixture.homeShort} /><div><strong>{fixture.home}</strong><span>vs</span><strong>{fixture.away}</strong></div><TeamMark name={fixture.away} short={fixture.awayShort} /></div>
    <div className="pick-answer"><div><small>RECOMMENDATION</small><strong>{fixture.prediction}</strong></div><div className="probability"><strong>{fixture.probability}%</strong><small>model probability</small></div></div>
    <div className="confidence-track"><span style={{ width: `${fixture.probability}%` }} /></div>
    <div className="pick-meta"><span>{fixture.market}</span><span>Risk: {fixture.risk}</span><span>{fixture.odds} ref.</span></div>
  </button>
}

function PopularPicksBoard({ onSelect }: { onSelect: (fixture: Fixture) => void }) {
  const [market, setMarket] = useState('All')
  const [saved, setSaved] = useState<string[]>([])
  const visible = popularPicks.filter((pick) => market === 'All' || pick.market === market)
  const fixtureFor = (pick: PopularPick) => getFixture(pick.fixtureId)
  return <section className="popular-board"><div className="popular-board-header"><div><span className="eyebrow">REFERENCE MARKET BOARD</span><h2>Popular picks</h2><p>What the board is leaning toward, paired with Punta&apos;s model probability.</p></div><Signal tone="muted">Not live sportsbook odds</Signal></div><div className="popular-tabs" role="tablist" aria-label="Popular pick markets">{['All', '1X2', 'Goals', 'BTTS', 'Cards'].map((item) => <button key={item} role="tab" aria-selected={market === item} className={market === item ? 'popular-tab-active' : ''} onClick={() => setMarket(item)}>{item}</button>)}</div><div className="popular-list">{visible.map((pick, index) => <div className="popular-row" key={pick.id}><span className="popular-rank">{String(index + 1).padStart(2, '0')}</span><button className="popular-fixture" onClick={() => onSelect(fixtureFor(pick))}><span>{fixtureFor(pick).homeShort} <em>vs</em> {fixtureFor(pick).awayShort}</span><small>{pick.market} · {pick.freshness}</small></button><div className="popular-selection"><span>{pick.selection}</span><strong>{pick.odds}</strong></div><div className="popular-signal"><div><i style={{ width: `${pick.popularity}%` }} /></div><span>{pick.popularity}% popular</span></div><div className={`confidence confidence-${pick.confidence.toLowerCase()}`}>{pick.probability}%</div><button className={`save-pick ${saved.includes(pick.id) ? 'save-pick-active' : ''}`} onClick={() => setSaved((current) => current.includes(pick.id) ? current.filter((id) => id !== pick.id) : [...current, pick.id])} aria-label={`${saved.includes(pick.id) ? 'Remove' : 'Save'} ${pick.selection}`}><Star /></button></div>)}</div><div className="popular-board-footer"><span><ShieldCheck />Popularity is a reference signal, not a recommendation.</span><button onClick={() => window.dispatchEvent(new CustomEvent('punta-view', { detail: 'picks' }))}>Open full picks <ChevronRight /></button></div></section>
}

function DetailSheet({ fixture, onClose }: { fixture: Fixture; onClose: () => void }) {
  return <div className="sheet-backdrop" role="presentation" onMouseDown={onClose}><aside className="detail-sheet" role="dialog" aria-modal="true" aria-label={`${fixture.home} versus ${fixture.away} intelligence`} onMouseDown={(event) => event.stopPropagation()}>
    <div className="sheet-header"><div><span className="eyebrow">{fixture.competition} · {fixture.kickoff}</span><h2>{fixture.home} <span>vs</span> {fixture.away}</h2></div><button className="icon-button" onClick={onClose} aria-label="Close details"><X /></button></div>
    {fixture.status === 'live' && <div className="live-banner"><Radio /> Live match · {fixture.minute} <strong>{fixture.score?.[0]} — {fixture.score?.[1]}</strong></div>}
    <section className="sheet-section"><div className="section-title"><span>Model outlook</span><Signal>{fixture.freshness}</Signal></div><div className="outlook"><div className="outlook-number">{fixture.probability}<small>%</small><span>{fixture.confidence} confidence</span></div><div className="prob-bars"><div><span>Home</span><i style={{ width: `${fixture.probability}%` }} /><b>{fixture.probability}%</b></div><div><span>Draw</span><i style={{ width: '18%' }} /><b>18%</b></div><div><span>Away</span><i style={{ width: `${100 - fixture.probability - 18}%` }} /><b>{100 - fixture.probability - 18}%</b></div></div></div></section>
    <section className="sheet-section"><div className="section-title"><span>Recommended market</span><span className="market-pill">{fixture.market}</span></div><div className="recommendation"><Target /><div><strong>{fixture.prediction}</strong><span>Reference price {fixture.odds} · Not a guarantee</span></div></div></section>
    <section className="sheet-section"><div className="section-title"><span>Key factors</span><span className="muted-label">Evidence ranked</span></div><div className="factor-list">{fixture.factors.map((factor, index) => <div key={factor}><span>0{index + 1}</span>{factor}<ChevronRight /></div>)}</div></section>
    <section className="sheet-section split-stats"><div><span className="muted-label">Projected xG</span><strong>{fixture.xg ? `${fixture.xg[0]} — ${fixture.xg[1]}` : 'Unavailable'}</strong></div><div><span className="muted-label">Availability</span><strong>{fixture.availability}</strong></div></section>
    <footer className="sheet-footer"><ShieldCheck /> {fixture.source} · {fixture.freshness}. This is model output, not financial advice.</footer>
  </aside></div>
}

function Sidebar({ active, setActive }: { active: View; setActive: (view: View) => void }) {
  return <aside className="sidebar"><div className="brand"><div className="brand-mark">P</div><div><strong>PUNTA</strong><span>INTELLIGENCE</span></div></div><div className="workspace-label">PUBLIC INTELLIGENCE <span>OPEN ACCESS</span></div><nav>{navItems.map(({ id, label, icon: Icon }) => <button key={id} className={active === id ? 'nav-active' : ''} onClick={() => setActive(id)}><Icon />{label}{id === 'live' && <span className="nav-live">1</span>}</button>)}</nav><div className="sidebar-bottom"><div className="data-health"><div><span className="health-icon"><Activity /></span><span><strong>Data health</strong><small>All systems nominal</small></span></div><Signal>98.4% fresh</Signal></div><button className="sidebar-link"><CircleHelp /> Documentation</button><div className="public-access"><div className="avatar">P</div><span><strong>Public access</strong><small>Predictions are open to everyone</small></span><Signal tone="muted">No sign in</Signal></div></div></aside>
}

function Topbar({ view, setView }: { view: View; setView: (view: View) => void }) {
  return <header className="topbar"><div className="mobile-brand"><div className="brand-mark">P</div><strong>PUNTA</strong></div><div className="crumb"><span>Punta Intelligence</span><ChevronRight /><strong>{navItems.find((item) => item.id === view)?.label}</strong></div><div className="top-actions"><button className="date-button"><CalendarDays />{PRODUCT.dateLabel}<span className="timezone">{PRODUCT.timezone}</span></button><button className="icon-button"><Search /></button><button className="icon-button notification"><Bell /><i /></button><div className="public-badge" aria-label="Public access">PUBLIC</div></div></header>
}

function TodayView({ onSelect }: { onSelect: (fixture: Fixture) => void }) {
  const featured = fixtures[0]
  const upcoming = fixtures.filter((fixture) => fixture.status === 'upcoming')
  const orderedFixtures = [...fixtures.filter((f) => f.status === 'live'), ...upcoming, ...fixtures.filter((f) => f.status === 'finished')]
  return (
    <div className="view-content">
      <section className="welcome-row"><div><div className="eyebrow">TUESDAY · 10 AUG 2026</div><h1>Today&apos;s public brief.</h1><p>Open match intelligence is ready for everyone. <span className="desktop-only">Five fixtures scanned across three competitions.</span></p></div><div className="brief-status"><Signal>Brief generated</Signal><small>08:42 Lagos time</small></div></section>
      <section className="metric-strip"><div><span>FIXTURES SCANNED</span><strong>05</strong><small>Across 3 competitions</small></div><div><span>HIGH CONFIDENCE</span><strong>03</strong><small>Above 70% probability</small></div><div><span>LIVE NOW</span><strong className="metric-live">01</strong><small>One match in play</small></div><div className="method"><span>MODEL PIPELINE</span><div><b>DATA</b><i /><b>MODEL</b><i /><b>CONTEXT</b></div><small>Last sync 14 seconds ago</small></div></section>
      <div className="content-grid"><main><div className="section-heading"><div><span className="eyebrow">RANKED BY SIGNAL STRENGTH</span><h2>Top intelligence</h2></div><button className="text-button" onClick={() => window.dispatchEvent(new CustomEvent('punta-view', { detail: 'picks' }))}>View all picks <ChevronRight /></button></div><PickCard fixture={featured} onSelect={onSelect} featured /><PopularPicksBoard onSelect={onSelect} /><div className="section-heading fixture-heading"><div><span className="eyebrow">SOURCE: MATCH CENTRE</span><h2>Fixture feed</h2></div><div className="feed-legend"><Signal>Live</Signal><Signal tone="muted">Upcoming</Signal></div></div><div className="fixture-list">{orderedFixtures.map((fixture) => <FixtureRow key={fixture.id} fixture={fixture} onSelect={onSelect} />)}</div></main><ContextPanel /></div>
    </div>
  )
}

function ContextPanel() {
  return <aside className="context-panel"><div className="panel-card"><div className="section-title"><span>Model snapshot</span><Gauge /></div><div className="snapshot-score">7.8<span>/10</span><small>Signal quality today</small></div><div className="snapshot-grid"><div><strong>+12.4%</strong><span>Edge vs baseline</span></div><div><strong>73%</strong><span>Avg. probability</span></div></div><div className="mini-bars"><div><span>Form</span><i style={{ width: '84%' }} /><b>84</b></div><div><span>Matchup</span><i style={{ width: '72%' }} /><b>72</b></div><div><span>Context</span><i style={{ width: '66%' }} /><b>66</b></div></div></div><div className="panel-card"><div className="section-title"><span>Market distribution</span><span className="muted-label">5 picks</span></div><div className="market-donut"><div><strong>42%</strong><span>1X2</span></div></div><div className="market-list">{marketMix.map((market) => <div key={market.label}><span><i className={`market-dot dot-${market.label.toLowerCase().replace('x', 'x')}`} />{market.label}</span><b>{market.value}%</b></div>)}</div></div><div className="panel-card live-pulse-card"><div className="section-title"><span>Live pulse</span><Signal>1 in play</Signal></div><div className="live-match"><div className="live-match-header"><span>63' · Serie A</span><strong>1 — 0</strong></div><div><span>Inter Milan</span><span>Juventus</span></div><div className="momentum"><i style={{ width: '68%' }} /><span>Inter control</span></div></div><button className="panel-link" onClick={() => window.dispatchEvent(new CustomEvent('punta-view', { detail: 'live' }))}>Open live centre <ChevronRight /></button></div></aside>
}

function PicksView({ onSelect }: { onSelect: (fixture: Fixture) => void }) {
  const [filter, setFilter] = useState('All')
  const filtered = fixtures.filter((fixture) => filter === 'All' || fixture.confidence === filter || fixture.market === filter)
  return <div className="view-content"><section className="page-heading"><div><span className="eyebrow">MODEL OUTPUT · 05 PICKS</span><h1>Ranked picks</h1><p>Every recommendation is scored by probability, confidence, and risk.</p></div><div className="freshness-box"><Signal>Provider data fresh</Signal><small>Last reconciled 8 minutes ago</small></div></section><PopularPicksBoard onSelect={onSelect} /><div className="filter-bar">{['All', 'High', 'Medium', '1X2', 'Goals'].map((item) => <button key={item} className={filter === item ? 'filter-active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="picks-grid">{filtered.map((fixture) => <PickCard key={fixture.id} fixture={fixture} onSelect={onSelect} />)}</div></div>
}

function LiveView({ onSelect }: { onSelect: (fixture: Fixture) => void }) {
  const liveFixtures = fixtures.filter((fixture) => fixture.status === 'live')
  return <div className="view-content"><section className="page-heading"><div><span className="eyebrow"><span className="live-pulse" /> LIVE CENTRE · UPDATED 14S AGO</span><h1>Live pulse</h1><p>Follow the match state without losing the model context.</p></div><Signal>Match feed active</Signal></section><div className="live-layout"><div className="live-main">{liveFixtures.map((fixture) => <button className="live-hero" key={fixture.id} onClick={() => onSelect(fixture)}><div className="live-hero-top"><span>{fixture.competition} · {fixture.minute}</span><Signal>Live</Signal></div><div className="live-score"><div><TeamMark name={fixture.home} short={fixture.homeShort} /><strong>{fixture.home}</strong></div><div className="score-large">{fixture.score?.[0]} <span>—</span> {fixture.score?.[1]}</div><div><TeamMark name={fixture.away} short={fixture.awayShort} /><strong>{fixture.away}</strong></div></div><div className="live-stats"><div><span>MODEL WIN PROBABILITY</span><strong>{fixture.probability}%</strong></div><div><span>PROJECTED XG</span><strong>{fixture.xg?.[0]} — {fixture.xg?.[1]}</strong></div><div><span>MOMENTUM</span><strong>Inter control</strong></div></div><div className="event-list">{fixture.events?.map((event) => <div key={event.minute + event.label}><span>{event.minute}</span><b className={event.team}>{event.label}</b></div>)}</div></button>)}</div><div className="panel-card live-note"><Sparkles /><h3>Live interpretation</h3><p>Inter&apos;s territory control is holding above the pre-match baseline. The model has increased the home win probability by 6 points since kickoff.</p><span className="muted-label">Evidence window · last 15 minutes</span></div></div></div>
}

function AiView({ onSelect }: { onSelect: (fixture: Fixture) => void }) {
  const [question, setQuestion] = useState('')
  const answer = question.toLowerCase().includes('least') ? 'Real Madrid vs Real Betis has the lowest modeled risk today. The Over 2.5 goals recommendation carries a 73% probability and is supported by both teams\' combined chance-quality trend.' : question.toLowerCase().includes('live') ? 'Inter Milan are controlling the live match. Their current projected xG is 1.42 vs 0.38 and the model gives them a 79% win probability at 63 minutes.' : 'Arsenal are favoured because the model combines a +0.42 home edge with stronger recent chance quality. Chelsea\'s transition threat keeps the risk label visible, so the recommendation is not certainty.'
  return <div className="view-content"><section className="page-heading"><div><span className="eyebrow">PUNTA COPILOT · EVIDENCE ONLY</span><h1>AI analyst</h1><p>Ask about today&apos;s board. Answers stay inside the available match data.</p></div><div className="ai-badge"><Bot /> Online</div></section><div className="ai-layout"><div className="ai-chat"><div className="ai-message assistant"><div className="ai-avatar"><Sparkles /></div><div><strong>Punta analyst</strong><p>I&apos;ve reviewed five fixtures across three competitions. I can explain a recommendation, compare risk, or interpret the live match state.</p></div></div><div className="suggestions">{analystPrompts.map((prompt) => <button key={prompt} onClick={() => setQuestion(prompt)}>{prompt}</button>)}</div>{question && <div className="ai-message user"><p>{question}</p></div>}<div className="ai-message assistant"><div className="ai-avatar"><Sparkles /></div><div><strong>Evidence-backed read</strong><p>{answer}</p><small>Sources: Punta model · Opta feed · freshness varies by fixture.</small></div></div><div className="ai-composer"><input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask about a fixture or pick..." aria-label="Ask the AI analyst" /><button aria-label="Send question"><ChevronRight /></button></div></div><div className="ai-side panel-card"><div className="section-title"><span>Available context</span><ShieldCheck /></div>{fixtures.slice(0, 3).map((fixture) => <button key={fixture.id} onClick={() => onSelect(fixture)}><span>{fixture.homeShort} · {fixture.awayShort}</span><strong>{fixture.probability}%</strong><ChevronRight /></button>)}<div className="unavailable"><Clock3 /><span><strong>Unavailable</strong>Injuries and confirmed lineups are not connected in this prototype.</span></div></div></div></div>
}

export function PuntaDashboard() {
  const [view, setView] = useState<View>('today')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = useMemo(() => selectedId ? getFixture(selectedId) : null, [selectedId])

  const navigate = (next: View) => setView(next)
  useEffect(() => {
    const handleView = (event: Event) => setView((event as CustomEvent<View>).detail)
    window.addEventListener('punta-view', handleView)
    return () => window.removeEventListener('punta-view', handleView)
  }, [])
  return <div className="punta-shell"><Sidebar active={view} setActive={navigate} /><div className="main-shell"><Topbar view={view} setView={navigate} /><div className="mobile-nav">{navItems.map(({ id, label, icon: Icon }) => <button key={id} className={view === id ? 'nav-active' : ''} onClick={() => navigate(id)}><Icon /><span>{label}</span></button>)}</div>{view === 'today' && <TodayView onSelect={(fixture) => setSelectedId(fixture.id)} />}{view === 'picks' && <PicksView onSelect={(fixture) => setSelectedId(fixture.id)} />}{view === 'live' && <LiveView onSelect={(fixture) => setSelectedId(fixture.id)} />}{view === 'ai' && <AiView onSelect={(fixture) => setSelectedId(fixture.id)} />}</div>{selected && <DetailSheet fixture={selected} onClose={() => setSelectedId(null)} />}</div>
}

