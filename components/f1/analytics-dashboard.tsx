'use client'

import { useState } from 'react'
import {
  Home, Radio, Calendar, BarChart2, Trophy, Car, Users, Flag, LineChart, 
  Swords, Activity, Timer, Wrench, Skull, X
} from 'lucide-react'
import { HomeView } from './views/home-view'
import { HeadToHeadView } from './views/head-to-head-view'
import { PitStopsView } from './views/pit-stops-view'

type ViewType = 'home' | 'head-to-head' | 'pit-stops';

export function AnalyticsDashboard() {
  const [activeView, setActiveView] = useState<ViewType>('head-to-head')

  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] text-zinc-400 font-sans overflow-hidden">
      
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0 border-r border-zinc-800/50 bg-[#0c0c0e] flex flex-col h-full">
        {/* Logo Section */}
        <div className="p-4 flex items-center justify-between border-b border-zinc-800/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-f1-red flex items-center justify-center text-white font-bold tracking-tighter">
              F1
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold leading-tight">F1 Analytics</span>
              <span className="text-zinc-500 text-[10px] tracking-widest uppercase">RACE CONTROL v3.2</span>
            </div>
          </div>
          <button className="text-zinc-500 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
          
          <div className="mb-6">
            <div className="px-4 mb-2 text-xs font-semibold text-zinc-600 tracking-wider">OVERVIEW</div>
            <NavItem 
              icon={<Home size={16} />} 
              label="Home" 
              active={activeView === 'home'} 
              onClick={() => setActiveView('home')} 
            />
            <NavItem icon={<Radio size={16} />} label="Live Timing" badge="BETA" />
            <NavItem icon={<Calendar size={16} />} label="Schedule" />
            <NavItem icon={<BarChart2 size={16} />} label="Results" />
          </div>

          <div className="mb-6">
            <div className="px-4 mb-2 text-xs font-semibold text-zinc-600 tracking-wider">STANDINGS</div>
            <NavItem icon={<Trophy size={16} />} label="Driver Standings" />
            <NavItem icon={<Car size={16} />} label="Constructor Standings" />
          </div>

          <div className="mb-6">
            <div className="px-4 mb-2 text-xs font-semibold text-zinc-600 tracking-wider">PROFILES</div>
            <NavItem icon={<Users size={16} />} label="Drivers" />
            <NavItem icon={<Flag size={16} />} label="Teams" />
          </div>

          <div className="mb-6">
            <div className="px-4 mb-2 text-xs font-semibold text-zinc-600 tracking-wider">ANALYTICS</div>
            <NavItem icon={<LineChart size={16} />} label="Driver Stats" />
            <NavItem 
              icon={<Swords size={16} />} 
              label="Head To Head" 
              active={activeView === 'head-to-head'}
              onClick={() => setActiveView('head-to-head')}
            />
            <NavItem icon={<Activity size={16} />} label="Consistency" />
            <NavItem icon={<Timer size={16} />} label="Race Pace" />
            <NavItem 
              icon={<Wrench size={16} />} 
              label="Pit Stops" 
              active={activeView === 'pit-stops'}
              onClick={() => setActiveView('pit-stops')}
            />
          </div>

          <div className="mb-6">
            <div className="px-4 mb-2 text-xs font-semibold text-zinc-600 tracking-wider">TECHNICAL</div>
          </div>

          <div className="mb-6">
            <div className="px-4 mb-2 text-xs font-semibold text-zinc-600 tracking-wider">FUN & MORE</div>
            <NavItem icon={<Skull size={16} />} label="Destructors" />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800/50 text-xs flex items-center gap-2 text-zinc-500">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          Systems Online
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-[#0a0a0a] min-w-0">
        {activeView === 'home' && <HomeView />}
        {activeView === 'head-to-head' && <HeadToHeadView />}
        {activeView === 'pit-stops' && <PitStopsView />}
      </div>

    </div>
  )
}

function NavItem({ icon, label, badge, active, onClick }: { icon: React.ReactNode, label: string, badge?: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-all
        ${active 
          ? 'text-f1-red bg-f1-red/10 border-r-2 border-f1-red' 
          : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5 border-r-2 border-transparent'
        }
      `}
    >
      <div className="flex items-center gap-3">
        {icon}
        {label}
      </div>
      {badge && (
        <span className="text-[9px] bg-f1-cyan/20 text-f1-cyan px-1.5 py-0.5 rounded tracking-wider font-medium">
          {badge}
        </span>
      )}
    </button>
  )
}
