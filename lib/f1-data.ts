export type TyreCompound = 'soft' | 'medium' | 'hard' | 'inter' | 'wet'
export type FlagStatus = 'green' | 'yellow' | 'red' | 'safety-car' | 'vsc' | 'checkered'
export type SessionType = 'FP1' | 'FP2' | 'FP3' | 'Q1' | 'Q2' | 'Q3' | 'RACE' | 'SPRINT'

export interface Driver {
  id: string
  number: number
  code: string
  name: string
  team: string
  teamColor: string
  position: number
  gap: string
  interval: string
  lastLap: string
  bestLap: string
  tyre: TyreCompound
  tyreAge: number
  pits: number
  delta: number
  speed: number
  gear: number
  rpm: number
  throttle: number
  brake: number
  ers: number
  fuel: number
  tyreWear: { fl: number; fr: number; rl: number; rr: number }
  sectorTimes: { s1: number; s2: number; s3: number }
  sectorStatus: { s1: 'pb' | 'sb' | 'normal'; s2: 'pb' | 'sb' | 'normal'; s3: 'pb' | 'sb' | 'normal' }
}

export interface RaceEvent {
  id: string
  time: string
  type: 'pit' | 'fastest' | 'flag' | 'overtake' | 'incident' | 'drs' | 'battle'
  message: string
  driver?: string
  color: string
}

export interface WeatherData {
  airTemp: number
  trackTemp: number
  humidity: number
  wind: number
  windDirection: string
  rain: number
}

export interface SessionData {
  type: SessionType
  track: string
  country: string
  currentLap: number
  totalLaps: number
  flag: FlagStatus
  timeRemaining: string
  weather: WeatherData
}

export interface TelemetryPoint {
  lap: number
  distance: number
  speed: number
  throttle: number
  brake: number
  gear: number
  rpm: number
}

export interface Battle {
  id: string
  drivers: [string, string]
  gap: number
  duration: number
  type: 'drs' | 'wheel-to-wheel' | 'defending'
}

export interface AIPrediction {
  driverId: string
  predictedPosition: number
  confidence: number
  pitStrategy: string
  riskLevel: 'low' | 'medium' | 'high'
}

// Sample Data
export const drivers: Driver[] = [
  {
    id: 'ver',
    number: 1,
    code: 'VER',
    name: 'Max Verstappen',
    team: 'Red Bull Racing',
    teamColor: '#3671C6',
    position: 1,
    gap: 'LEADER',
    interval: '-',
    lastLap: '1:32.456',
    bestLap: '1:31.892',
    tyre: 'medium',
    tyreAge: 12,
    pits: 1,
    delta: 0,
    speed: 312,
    gear: 8,
    rpm: 11500,
    throttle: 95,
    brake: 0,
    ers: 78,
    fuel: 42,
    tyreWear: { fl: 32, fr: 35, rl: 28, rr: 30 },
    sectorTimes: { s1: 28.234, s2: 35.456, s3: 28.766 },
    sectorStatus: { s1: 'pb', s2: 'normal', s3: 'sb' },
  },
  {
    id: 'ham',
    number: 44,
    code: 'HAM',
    name: 'Lewis Hamilton',
    team: 'Ferrari',
    teamColor: '#E8002D',
    position: 2,
    gap: '+2.345',
    interval: '+2.345',
    lastLap: '1:32.789',
    bestLap: '1:32.123',
    tyre: 'hard',
    tyreAge: 18,
    pits: 1,
    delta: -0.234,
    speed: 308,
    gear: 7,
    rpm: 11200,
    throttle: 88,
    brake: 5,
    ers: 65,
    fuel: 40,
    tyreWear: { fl: 45, fr: 48, rl: 40, rr: 42 },
    sectorTimes: { s1: 28.456, s2: 35.678, s3: 28.655 },
    sectorStatus: { s1: 'normal', s2: 'normal', s3: 'pb' },
  },
  {
    id: 'lec',
    number: 16,
    code: 'LEC',
    name: 'Charles Leclerc',
    team: 'Ferrari',
    teamColor: '#E8002D',
    position: 3,
    gap: '+5.678',
    interval: '+3.333',
    lastLap: '1:32.901',
    bestLap: '1:32.345',
    tyre: 'hard',
    tyreAge: 18,
    pits: 1,
    delta: 0.156,
    speed: 305,
    gear: 7,
    rpm: 11000,
    throttle: 82,
    brake: 8,
    ers: 72,
    fuel: 41,
    tyreWear: { fl: 42, fr: 45, rl: 38, rr: 40 },
    sectorTimes: { s1: 28.567, s2: 35.789, s3: 28.545 },
    sectorStatus: { s1: 'normal', s2: 'normal', s3: 'sb' },
  },
  {
    id: 'nor',
    number: 4,
    code: 'NOR',
    name: 'Lando Norris',
    team: 'McLaren',
    teamColor: '#FF8000',
    position: 4,
    gap: '+8.234',
    interval: '+2.556',
    lastLap: '1:33.012',
    bestLap: '1:32.567',
    tyre: 'medium',
    tyreAge: 8,
    pits: 2,
    delta: -0.445,
    speed: 310,
    gear: 8,
    rpm: 11400,
    throttle: 92,
    brake: 0,
    ers: 85,
    fuel: 38,
    tyreWear: { fl: 18, fr: 20, rl: 15, rr: 17 },
    sectorTimes: { s1: 28.678, s2: 35.890, s3: 28.444 },
    sectorStatus: { s1: 'normal', s2: 'pb', s3: 'pb' },
  },
  {
    id: 'pia',
    number: 81,
    code: 'PIA',
    name: 'Oscar Piastri',
    team: 'McLaren',
    teamColor: '#FF8000',
    position: 5,
    gap: '+12.567',
    interval: '+4.333',
    lastLap: '1:33.234',
    bestLap: '1:32.789',
    tyre: 'medium',
    tyreAge: 8,
    pits: 2,
    delta: 0.089,
    speed: 306,
    gear: 7,
    rpm: 11100,
    throttle: 78,
    brake: 12,
    ers: 80,
    fuel: 39,
    tyreWear: { fl: 20, fr: 22, rl: 17, rr: 19 },
    sectorTimes: { s1: 28.789, s2: 35.901, s3: 28.544 },
    sectorStatus: { s1: 'normal', s2: 'normal', s3: 'pb' },
  },
  {
    id: 'rus',
    number: 63,
    code: 'RUS',
    name: 'George Russell',
    team: 'Mercedes',
    teamColor: '#27F4D2',
    position: 6,
    gap: '+15.890',
    interval: '+3.323',
    lastLap: '1:33.456',
    bestLap: '1:32.901',
    tyre: 'hard',
    tyreAge: 22,
    pits: 1,
    delta: 0.234,
    speed: 302,
    gear: 7,
    rpm: 10900,
    throttle: 72,
    brake: 18,
    ers: 58,
    fuel: 36,
    tyreWear: { fl: 52, fr: 55, rl: 48, rr: 50 },
    sectorTimes: { s1: 28.890, s2: 36.012, s3: 28.554 },
    sectorStatus: { s1: 'normal', s2: 'normal', s3: 'pb' },
  },
  {
    id: 'ant',
    number: 12,
    code: 'ANT',
    name: 'Kimi Antonelli',
    team: 'Mercedes',
    teamColor: '#27F4D2',
    position: 7,
    gap: '+18.234',
    interval: '+2.344',
    lastLap: '1:33.678',
    bestLap: '1:33.012',
    tyre: 'medium',
    tyreAge: 15,
    pits: 1,
    delta: -0.178,
    speed: 304,
    gear: 7,
    rpm: 11050,
    throttle: 85,
    brake: 6,
    ers: 70,
    fuel: 37,
    tyreWear: { fl: 38, fr: 40, rl: 34, rr: 36 },
    sectorTimes: { s1: 28.945, s2: 36.123, s3: 28.610 },
    sectorStatus: { s1: 'pb', s2: 'normal', s3: 'normal' },
  },
  {
    id: 'sai',
    number: 55,
    code: 'SAI',
    name: 'Carlos Sainz',
    team: 'Williams',
    teamColor: '#64C4FF',
    position: 8,
    gap: '+22.456',
    interval: '+4.222',
    lastLap: '1:33.890',
    bestLap: '1:33.234',
    tyre: 'medium',
    tyreAge: 10,
    pits: 2,
    delta: 0.312,
    speed: 299,
    gear: 6,
    rpm: 10700,
    throttle: 65,
    brake: 25,
    ers: 62,
    fuel: 35,
    tyreWear: { fl: 25, fr: 28, rl: 22, rr: 24 },
    sectorTimes: { s1: 29.012, s2: 36.234, s3: 28.644 },
    sectorStatus: { s1: 'normal', s2: 'normal', s3: 'pb' },
  },
  {
    id: 'alo',
    number: 14,
    code: 'ALO',
    name: 'Fernando Alonso',
    team: 'Aston Martin',
    teamColor: '#229971',
    position: 9,
    gap: '+25.789',
    interval: '+3.333',
    lastLap: '1:34.012',
    bestLap: '1:33.456',
    tyre: 'hard',
    tyreAge: 25,
    pits: 1,
    delta: -0.089,
    speed: 297,
    gear: 6,
    rpm: 10500,
    throttle: 58,
    brake: 32,
    ers: 55,
    fuel: 34,
    tyreWear: { fl: 58, fr: 62, rl: 52, rr: 55 },
    sectorTimes: { s1: 29.123, s2: 36.345, s3: 28.544 },
    sectorStatus: { s1: 'normal', s2: 'normal', s3: 'sb' },
  },
  {
    id: 'str',
    number: 18,
    code: 'STR',
    name: 'Lance Stroll',
    team: 'Aston Martin',
    teamColor: '#229971',
    position: 10,
    gap: '+28.901',
    interval: '+3.112',
    lastLap: '1:34.234',
    bestLap: '1:33.678',
    tyre: 'medium',
    tyreAge: 12,
    pits: 2,
    delta: 0.178,
    speed: 295,
    gear: 6,
    rpm: 10400,
    throttle: 55,
    brake: 35,
    ers: 68,
    fuel: 33,
    tyreWear: { fl: 30, fr: 32, rl: 26, rr: 28 },
    sectorTimes: { s1: 29.234, s2: 36.456, s3: 28.544 },
    sectorStatus: { s1: 'normal', s2: 'normal', s3: 'sb' },
  },
]

export const raceEvents: RaceEvent[] = [
  { id: '1', time: '14:32:15', type: 'fastest', message: 'Fastest lap: VER 1:31.892', driver: 'VER', color: 'purple' },
  { id: '2', time: '14:31:45', type: 'pit', message: 'NOR enters pit lane', driver: 'NOR', color: 'yellow' },
  { id: '3', time: '14:30:22', type: 'overtake', message: 'HAM overtakes LEC for P2', driver: 'HAM', color: 'green' },
  { id: '4', time: '14:29:15', type: 'drs', message: 'DRS enabled in Zone 1', color: 'cyan' },
  { id: '5', time: '14:28:45', type: 'battle', message: 'Battle: HAM vs LEC for P2 - Gap 0.8s', color: 'orange' },
  { id: '6', time: '14:27:30', type: 'flag', message: 'Green flag - Track clear', color: 'green' },
  { id: '7', time: '14:25:12', type: 'incident', message: 'Yellow flag Sector 2 - Debris on track', color: 'yellow' },
  { id: '8', time: '14:24:00', type: 'pit', message: 'PIA exits pit lane - P5', driver: 'PIA', color: 'yellow' },
]

export const sessionData: SessionData = {
  type: 'RACE',
  track: 'Monaco',
  country: 'Monaco',
  currentLap: 42,
  totalLaps: 78,
  flag: 'green',
  timeRemaining: '45:23',
  weather: {
    airTemp: 24,
    trackTemp: 38,
    humidity: 52,
    wind: 8,
    windDirection: 'SW',
    rain: 0,
  },
}

export const battles: Battle[] = [
  { id: '1', drivers: ['HAM', 'LEC'], gap: 0.8, duration: 180, type: 'drs' },
  { id: '2', drivers: ['NOR', 'PIA'], gap: 1.2, duration: 120, type: 'defending' },
  { id: '3', drivers: ['RUS', 'ANT'], gap: 0.5, duration: 90, type: 'wheel-to-wheel' },
]

export const aiPredictions: AIPrediction[] = [
  { driverId: 'ver', predictedPosition: 1, confidence: 95, pitStrategy: 'No more stops needed', riskLevel: 'low' },
  { driverId: 'ham', predictedPosition: 2, confidence: 78, pitStrategy: 'Consider soft for final stint', riskLevel: 'medium' },
  { driverId: 'lec', predictedPosition: 3, confidence: 72, pitStrategy: 'Under pressure - maintain gap', riskLevel: 'medium' },
  { driverId: 'nor', predictedPosition: 4, confidence: 85, pitStrategy: 'Fresh tyres - can push hard', riskLevel: 'low' },
  { driverId: 'pia', predictedPosition: 5, confidence: 80, pitStrategy: 'Hold position, save tyres', riskLevel: 'low' },
]

export const historicalLaps: TelemetryPoint[][] = [
  // Lap 40 telemetry
  Array.from({ length: 100 }, (_, i) => ({
    lap: 40,
    distance: i * 33,
    speed: 180 + Math.sin(i * 0.15) * 80 + Math.random() * 10,
    throttle: 50 + Math.sin(i * 0.15) * 45 + Math.random() * 5,
    brake: Math.max(0, Math.cos(i * 0.15) * 50 + Math.random() * 10),
    gear: Math.min(8, Math.max(1, Math.floor(4 + Math.sin(i * 0.15) * 3.5))),
    rpm: 8000 + Math.sin(i * 0.15) * 3500,
  })),
  // Lap 41 telemetry
  Array.from({ length: 100 }, (_, i) => ({
    lap: 41,
    distance: i * 33,
    speed: 182 + Math.sin(i * 0.15) * 78 + Math.random() * 8,
    throttle: 52 + Math.sin(i * 0.15) * 44 + Math.random() * 4,
    brake: Math.max(0, Math.cos(i * 0.15) * 48 + Math.random() * 8),
    gear: Math.min(8, Math.max(1, Math.floor(4 + Math.sin(i * 0.15) * 3.5))),
    rpm: 8100 + Math.sin(i * 0.15) * 3400,
  })),
]

// Voice command patterns
export const voiceCommands = [
  { pattern: /show (.*) telemetry/i, action: 'showTelemetry', extract: 1 },
  { pattern: /compare (.*) and (.*)/i, action: 'compareDrivers', extract: [1, 2] },
  { pattern: /pit strategy for (.*)/i, action: 'pitStrategy', extract: 1 },
  { pattern: /weather update/i, action: 'weatherUpdate' },
  { pattern: /race status/i, action: 'raceStatus' },
  { pattern: /tyre status (.*)/i, action: 'tyreStatus', extract: 1 },
  { pattern: /gap to leader (.*)/i, action: 'gapToLeader', extract: 1 },
  { pattern: /fastest lap/i, action: 'fastestLap' },
  { pattern: /safety car/i, action: 'safetyCar' },
  { pattern: /drs zones/i, action: 'drsZones' },
]

// AI Strategy suggestions
export const strategyTemplates = [
  "Based on current pace, {driver} should pit in {laps} laps for optimal undercut.",
  "{driver}'s tyres are degrading {rate}% faster than expected. Consider early stop.",
  "Gap to {driver} is closing. Recommend activating push mode.",
  "Weather radar shows {chance}% rain probability in {time} minutes.",
  "{driver} has DRS range opportunity in {sectors} if pace maintained.",
  "Current strategy projects P{position} finish. Alternative: {alternative}",
]

export function getTeamColor(team: string): string {
  const colors: Record<string, string> = {
    'Red Bull Racing': '#3671C6',
    'Ferrari': '#E8002D',
    'McLaren': '#FF8000',
    'Mercedes': '#27F4D2',
    'Aston Martin': '#229971',
    'Alpine': '#FF87BC',
    'Williams': '#64C4FF',
    'RB': '#6692FF',
    'Kick Sauber': '#52E252',
    'Haas': '#B6BABD',
  }
  return colors[team] || '#FFFFFF'
}

export function getTyreColor(compound: TyreCompound): string {
  const colors: Record<TyreCompound, string> = {
    soft: '#FF3333',
    medium: '#FFD700',
    hard: '#FFFFFF',
    inter: '#43B02A',
    wet: '#0066FF',
  }
  return colors[compound]
}

export function getFlagColor(flag: FlagStatus): string {
  const colors: Record<FlagStatus, string> = {
    green: '#00FF00',
    yellow: '#FFD700',
    red: '#FF0000',
    'safety-car': '#FFD700',
    vsc: '#FFD700',
    checkered: '#FFFFFF',
  }
  return colors[flag]
}
