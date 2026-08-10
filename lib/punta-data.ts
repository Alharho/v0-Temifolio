export type MatchStatus = 'live' | 'upcoming' | 'finished'
export type Confidence = 'High' | 'Medium' | 'Watch'

export type PopularPick = {
  id: string
  fixtureId: string
  market: '1X2' | 'Goals' | 'BTTS' | 'Cards'
  selection: string
  odds: string
  popularity: number
  probability: number
  confidence: Confidence
  freshness: string
  source: string
}

export type Fixture = {
  id: string
  competition: string
  kickoff: string
  status: MatchStatus
  minute?: string
  home: string
  away: string
  homeShort: string
  awayShort: string
  score?: [number, number]
  prediction: string
  probability: number
  confidence: Confidence
  market: string
  odds: string
  risk: string
  factors: string[]
  availability: string
  freshness: string
  source: string
  xg?: [number, number]
  events?: { minute: string; label: string; team: 'home' | 'away' }[]
}

export const PRODUCT = {
  name: 'Punta Intelligence',
  shortName: 'PUNTA',
  timezone: 'Africa/Lagos',
  dateLabel: 'Tuesday, 10 August 2026',
}

export const fixtures: Fixture[] = [
  {
    id: 'ars-che', competition: 'Premier League', kickoff: '19:30', status: 'upcoming',
    home: 'Arsenal', away: 'Chelsea', homeShort: 'ARS', awayShort: 'CHE',
    prediction: 'Arsenal win', probability: 68, confidence: 'High', market: '1X2', odds: '1.74',
    risk: 'Chelsea transition threat', factors: ['Home edge +0.42', 'Recent chance quality', 'Chelsea away variance'],
    availability: 'Lineups not released', freshness: 'Updated 8m ago', source: 'Punta model · Opta feed', xg: [1.86, 0.94],
  },
  {
    id: 'rma-bet', competition: 'La Liga', kickoff: '20:00', status: 'upcoming',
    home: 'Real Madrid', away: 'Real Betis', homeShort: 'RMA', awayShort: 'BET',
    prediction: 'Over 2.5 goals', probability: 73, confidence: 'High', market: 'Goals', odds: '1.62',
    risk: 'Low-tempo first half', factors: ['Combined xG trend', 'Box entries above baseline', 'Betis defensive absences'],
    availability: 'Expected XI modeled', freshness: 'Updated 12m ago', source: 'Punta model · Opta feed', xg: [2.18, 1.12],
  },
  {
    id: 'int-juv', competition: 'Serie A', kickoff: '17:45', status: 'live', minute: '63\'',
    home: 'Inter Milan', away: 'Juventus', homeShort: 'INT', awayShort: 'JUV', score: [1, 0],
    prediction: 'Inter Milan win', probability: 79, confidence: 'High', market: 'Live 1X2', odds: '1.31',
    risk: 'Game state volatility', factors: ['Inter territory control', 'Juventus low box access', 'Scoreline protection'],
    availability: 'Live event feed active', freshness: 'Live · 14s ago', source: 'Match centre · Opta', xg: [1.42, 0.38],
    events: [{ minute: '31\'', label: 'Goal · Çalhanoğlu', team: 'home' }, { minute: '58\'', label: 'Yellow card · Danilo', team: 'away' }],
  },
  {
    id: 'psg-lyo', competition: 'Ligue 1', kickoff: '15:00', status: 'finished', minute: 'FT',
    home: 'Paris SG', away: 'Lyon', homeShort: 'PSG', awayShort: 'LYO', score: [2, 1],
    prediction: 'Paris SG win', probability: 71, confidence: 'High', market: '1X2', odds: '1.48',
    risk: '—', factors: ['Model result aligned', 'Shot volume advantage'], availability: 'Final data reconciled', freshness: 'Closed 21m ago', source: 'Match centre · Opta',
  },
  {
    id: 'ben-por', competition: 'Primeira Liga', kickoff: '21:15', status: 'upcoming',
    home: 'Benfica', away: 'FC Porto', homeShort: 'BEN', awayShort: 'FCP',
    prediction: 'Both teams to score', probability: 64, confidence: 'Medium', market: 'Goals', odds: '1.83',
    risk: 'Derby emotion', factors: ['High duel intensity', 'Both attack ratings positive', 'Lineup uncertainty'],
    availability: '2 players pending', freshness: 'Updated 25m ago', source: 'Punta model · Liga data', xg: [1.48, 1.27],
  },
]

export const popularPicks: PopularPick[] = [
  { id: 'pick-arsenal', fixtureId: 'ars-che', market: '1X2', selection: 'Arsenal', odds: '1.74', popularity: 82, probability: 68, confidence: 'High', freshness: 'Updated 8m ago', source: 'Punta reference board' },
  { id: 'pick-rma-goals', fixtureId: 'rma-bet', market: 'Goals', selection: 'Over 2.5', odds: '1.62', popularity: 76, probability: 73, confidence: 'High', freshness: 'Updated 12m ago', source: 'Punta reference board' },
  { id: 'pick-inter', fixtureId: 'int-juv', market: '1X2', selection: 'Inter Milan', odds: '1.31', popularity: 91, probability: 79, confidence: 'High', freshness: 'Live · 14s ago', source: 'Punta live board' },
  { id: 'pick-benfica-btts', fixtureId: 'ben-por', market: 'BTTS', selection: 'Yes', odds: '1.83', popularity: 61, probability: 64, confidence: 'Medium', freshness: 'Updated 25m ago', source: 'Punta reference board' },
  { id: 'pick-rma-corners', fixtureId: 'rma-bet', market: 'Cards', selection: 'Under 5.5 cards', odds: '1.68', popularity: 48, probability: 58, confidence: 'Watch', freshness: 'Updated 12m ago', source: 'Punta reference board' },
]

export const analystPrompts = ['Why is Arsenal favoured?', 'Show live momentum', 'Which pick has least risk?']

export const marketMix = [
  { label: '1X2', value: 42 },
  { label: 'Goals', value: 31 },
  { label: 'BTTS', value: 18 },
  { label: 'Cards', value: 9 },
]

export function getFixture(id: string) {
  return fixtures.find((fixture) => fixture.id === id) ?? fixtures[0]
}

export function initials(name: string) {
  return name.split(' ').map((part) => part[0]).join('').slice(0, 3)
}
