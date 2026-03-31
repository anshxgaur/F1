'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend
} from 'recharts'
import { ChevronDown, Swords } from 'lucide-react'

const statsData = [
  { name: 'Points', VER: 580, HAM: 220 },
  { name: 'Wins', VER: 19, HAM: 0 },
  { name: 'Podiums', VER: 21, HAM: 6 },
  { name: 'Poles', VER: 12, HAM: 1 },
]

const radarData = [
  { subject: 'Speed', VER: 98, HAM: 85, fullMark: 100 },
  { subject: 'Consistency', VER: 95, HAM: 88, fullMark: 100 },
  { subject: 'Tire Mgmt', VER: 92, HAM: 94, fullMark: 100 },
  { subject: 'Qualifying', VER: 97, HAM: 82, fullMark: 100 },
  { subject: 'Race Craft', VER: 96, HAM: 92, fullMark: 100 },
  { subject: 'Overtakes', VER: 85, HAM: 80, fullMark: 100 },
]

export function HeadToHeadView() {
  return (
    <div className="flex flex-col h-full p-6 text-zinc-300">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Swords className="text-f1-red w-6 h-6" />
        <h1 className="text-2xl font-bold text-white tracking-wide">Head to Head</h1>
      </div>
      <p className="text-zinc-500 mb-8 ml-9 text-sm">Compare two drivers</p>

      {/* Selectors */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <button className="flex items-center justify-between w-64 bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2 hover:border-zinc-700 transition-colors">
          <span>Max Verstappen</span>
          <ChevronDown size={16} className="text-zinc-500" />
        </button>
        
        <span className="text-f1-red font-black text-xl italic tracking-tighter">VS</span>
        
        <button className="flex items-center justify-between w-64 bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2 hover:border-zinc-700 transition-colors">
          <span>Lewis Hamilton</span>
          <ChevronDown size={16} className="text-zinc-500" />
        </button>
      </div>

      {/* Driver Cards */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-[#111113] border border-f1-red/20 rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute top-0 w-2 h-8 bg-[#3671C6] rounded-b"></div>
          <div className="text-xl font-bold text-white mt-4">Max Verstappen</div>
          <div className="text-sm text-zinc-500 mb-6">Red Bull Racing</div>
          <div className="text-5xl font-black text-white tracking-tighter text-glow-cyan">92.330s</div>
          <div className="text-xs text-zinc-600 mt-2 uppercase tracking-widest">Avg Lap Time</div>
        </div>

        <div className="bg-[#111113] border border-f1-cyan/20 rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute top-0 w-2 h-8 bg-[#27F4D2] rounded-b"></div>
          <div className="text-xl font-bold text-white mt-4">Lewis Hamilton</div>
          <div className="text-sm text-zinc-500 mb-6">Mercedes</div>
          <div className="text-5xl font-black text-white tracking-tighter text-glow-red">91.903s</div>
          <div className="text-xs text-zinc-600 mt-2 uppercase tracking-widest">Avg Lap Time</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
        
        {/* Stats Comparison Chart */}
        <div className="bg-[#111113] rounded-xl p-6 border border-zinc-900 flex flex-col">
          <h3 className="text-xs text-zinc-500 font-semibold tracking-wider mb-6 uppercase">Stats Comparison</h3>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis dataKey="name" stroke="#666" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#666" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: '#222'}} 
                  contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }}
                />
                <Bar dataKey="VER" fill="#ff2800" radius={[2, 2, 0, 0]} barSize={40} />
                <Bar dataKey="HAM" fill="#00d2be" radius={[2, 2, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="bg-[#111113] rounded-xl p-6 border border-zinc-900 flex flex-col">
          <h3 className="text-xs text-zinc-500 font-semibold tracking-wider mb-2 uppercase">Sector Performance</h3>
          <div className="flex-1 min-h-0 relative">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#888', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="VER" dataKey="VER" stroke="#ff2800" fill="#ff2800" fillOpacity={0.1} />
                <Radar name="HAM" dataKey="HAM" stroke="#00d2be" fill="#00d2be" fillOpacity={0.1} />
              </RadarChart>
            </ResponsiveContainer>
            <div className="absolute bottom-0 left-0 w-full flex justify-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-f1-red"></div> VER</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#00d2be]"></div> HAM</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
