'use client'

import { Timer } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'

const pitStopData = [
  { driver: 'Verstappen', duration: 2.15 },
  { driver: 'Norris', duration: 2.20 },
  { driver: 'Leclerc', duration: 2.25 },
  { driver: 'Russell', duration: 2.40 },
  { driver: 'Perez', duration: 2.52 },
  { driver: 'Sainz', duration: 2.60 },
  { driver: 'Hamilton', duration: 2.80 },
  { driver: 'Alonso', duration: 2.90 },
]

const recentPitStops = [
  { driver: 'Max Verstappen', round: 'Miami', lap: 15, duration: '2.0s', compound: 'Hard' },
  { driver: 'Lando Norris', round: 'Miami', lap: 16, duration: '2.2s', compound: 'Medium' },
  { driver: 'Charles Leclerc', round: 'Miami', lap: 17, duration: '2.3s', compound: 'Hard' },
  { driver: 'Lewis Hamilton', round: 'Miami', lap: 18, duration: '2.8s', compound: 'Medium' },
]

export function PitStopsView() {
  return (
    <div className="flex flex-col h-full p-6 text-zinc-300">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Timer className="text-f1-red w-6 h-6" />
        <h1 className="text-2xl font-bold text-white tracking-wide">Pit Stops</h1>
      </div>
      <p className="text-zinc-500 mb-6 ml-9 text-sm">Pit stop timing and strategy analysis</p>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-[#111113] border border-f1-red/20 rounded-xl p-6 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2 font-semibold">Fastest Pit Stop</div>
          <div className="text-5xl font-black text-white tracking-tighter text-glow-red">2s</div>
          <div className="text-sm font-semibold mt-2">Max Verstappen</div>
          <div className="text-xs text-zinc-500">Lap 15</div>
        </div>
        
        <div className="bg-[#111113] border border-zinc-800/80 rounded-xl p-6 flex flex-col items-center justify-center">
          <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2 font-semibold">Total Pit Stops</div>
          <div className="text-5xl font-black tracking-tighter text-[#00d2be] text-glow-cyan">15</div>
          <div className="text-xs text-zinc-500 mt-2">Across all races</div>
        </div>

        <div className="bg-[#111113] border border-zinc-800/80 rounded-xl p-6 flex flex-col items-center justify-center">
          <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2 font-semibold">Avg Duration</div>
          <div className="text-5xl font-black tracking-tighter text-[#ffb800] glow-yellow">2.4s</div>
          <div className="text-xs text-zinc-500 mt-2">All teams</div>
        </div>
      </div>

      {/* Average Pit Duration Chart */}
      <div className="bg-[#111113] border border-zinc-900 rounded-xl p-6 mb-6 flex-[0.8] min-h-0 flex flex-col">
        <h3 className="text-xs text-zinc-500 font-semibold tracking-wider mb-6 uppercase">Average Pit Duration By Driver</h3>
        <div className="flex-1 min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={pitStopData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
              <XAxis dataKey="driver" stroke="#666" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#666" fontSize={11} tickLine={false} axisLine={false} domain={[1.5, 3.5]} />
              <Tooltip cursor={{fill: '#222'}} contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
              <Bar dataKey="duration" fill="#00d2be" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pit Stops Table */}
      <div className="bg-[#111113] border border-zinc-900 rounded-xl p-6 flex-1 min-h-0 flex flex-col">
        <h3 className="text-xs text-zinc-500 font-semibold tracking-wider mb-4 uppercase">All Pit Stops</h3>
        <div className="flex-1 overflow-auto custom-scrollbar">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] text-zinc-500 uppercase tracking-wider sticky top-0 bg-[#111113] z-10 font-semibold">
              <tr>
                <th className="pb-3 border-b border-zinc-800">Driver</th>
                <th className="pb-3 border-b border-zinc-800">Round</th>
                <th className="pb-3 border-b border-zinc-800">Lap</th>
                <th className="pb-3 border-b border-zinc-800">Duration</th>
                <th className="pb-3 border-b border-zinc-800">Compound</th>
              </tr>
            </thead>
            <tbody>
              {recentPitStops.map((stop, i) => (
                <tr key={i} className="border-b border-zinc-800/50 hover:bg-white/5 transition-colors">
                  <td className="py-3 font-semibold text-zinc-200">{stop.driver}</td>
                  <td className="py-3 text-zinc-400">{stop.round}</td>
                  <td className="py-3 text-zinc-400">{stop.lap}</td>
                  <td className="py-3 font-mono text-zinc-300">{stop.duration}</td>
                  <td className="py-3 text-zinc-400">{stop.compound}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
