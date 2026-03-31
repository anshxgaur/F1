'use client'

import {
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, ReferenceLine, ReferenceDot
} from 'recharts'

const createData = (points: number, start: number, variance: number, trend = 0) => {
  let val = start;
  return Array.from({ length: points }).map((_, i) => {
    // Replacing Math.random() with deterministic Math.sin to avoid React Hydration mismatch
    const pseudoRandom = (Math.sin(i * 1234.5678) * 0.5) + 0.5;
    val += (pseudoRandom - 0.5) * variance + trend;
    return { lap: i + 1, value: val };
  });
};

const telemetryData = createData(25, 300, 30);
const lapTimeData = createData(25, 93, 2, -0.05);

const throttleBrakeData = Array.from({ length: 25 }).map((_, i) => {
  const pseudoRandom = (Math.sin(i * 8765.4321) * 0.5) + 0.5;
  return {
    lap: i + 1,
    throttle: Math.max(50, 100 - pseudoRandom * 40 - (Math.sin(i) * 20)),
    brake: Math.max(0, 50 - pseudoRandom * 20 + (Math.sin(i) * 30)),
  };
});

const tireData = createData(25, 5, 5, 3.5).map(d => ({ ...d, value: Math.max(0, d.value) }));

export function HomeView() {
  return (
    <div className="flex flex-col h-full p-6 text-zinc-300 gap-6">
      
      {/* Top Metrics Row */}
      <div className="grid grid-cols-6 gap-4">
        {[
          { label: 'SPEED', val: '328', unit: 'km/h', color: 'text-f1-red' },
          { label: 'RPM', val: '12612', unit: 'rev/min', color: 'text-f1-cyan' },
          { label: 'GEAR', val: '7', unit: '', color: 'text-yellow-500' },
          { label: 'THROTTLE', val: '69%', unit: '', color: 'text-green-500' },
          { label: 'BRAKE', val: '33%', unit: '', color: 'text-rose-500' },
          { label: 'TIRE WEAR', val: '84%', unit: '', color: 'text-orange-500' }
        ].map((m, i) => (
          <div key={i} className="bg-[#111113] border border-zinc-800/80 rounded-xl p-4 flex flex-col items-center justify-center">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">{m.label}</div>
            <div className={`text-3xl font-bold tracking-tighter ${m.color}`}>{m.val}</div>
            {m.unit && <div className="text-[10px] text-zinc-600 mt-1">{m.unit}</div>}
          </div>
        ))}
      </div>

      {/* Grid of Charts */}
      <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
        
        {/* Speed Telemetry */}
        <div className="bg-[#111113] border border-zinc-800/80 rounded-xl p-5 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-f1-red/50 to-transparent"></div>
          <h3 className="text-xs text-zinc-500 font-semibold tracking-wider mb-4 uppercase">Speed Telemetry</h3>
          <div className="flex-1 min-h-0 -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={telemetryData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis dataKey="lap" stroke="#444" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#444" fontSize={10} tickLine={false} axisLine={false} domain={['dataMin - 20', 'auto']} />
                <Tooltip cursor={{ stroke: '#444' }} contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                <Area type="monotone" dataKey="value" stroke="#ff2800" fillOpacity={0.1} fill="#ff2800" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lap Times */}
        <div className="bg-[#111113] border border-zinc-800/80 rounded-xl p-5 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-f1-cyan/50 to-transparent"></div>
          <h3 className="text-xs text-zinc-500 font-semibold tracking-wider mb-4 uppercase">Lap Times</h3>
          <div className="flex-1 min-h-0 -ml-4 relative">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lapTimeData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis dataKey="lap" stroke="#444" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#444" fontSize={10} tickLine={false} axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
                <Tooltip 
                  cursor={{ stroke: '#fff', strokeWidth: 1 }} 
                  contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid #00d2be', borderRadius: '4px' }} 
                  itemStyle={{ color: '#00d2be' }}
                />
                <ReferenceLine x={19} stroke="#fff" strokeOpacity={0.5} />
                <Line type="monotone" dataKey="value" stroke="#00d2be" strokeWidth={2} dot={false} activeDot={{ r: 6, fill: '#000', stroke: '#00d2be', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Throttle & Brake */}
        <div className="bg-[#111113] border border-zinc-800/80 rounded-xl p-5 flex flex-col">
          <h3 className="text-xs text-zinc-500 font-semibold tracking-wider mb-4 uppercase">Throttle & Brake</h3>
          <div className="flex-1 min-h-0 -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={throttleBrakeData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis dataKey="lap" stroke="#444" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#444" fontSize={10} tickLine={false} axisLine={false} domain={[0, 100]} />
                <Tooltip cursor={{ stroke: '#444' }} contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                <Line type="monotone" dataKey="throttle" stroke="#22c55e" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="brake" stroke="#ef4444" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tire Degradation */}
        <div className="bg-[#111113] border border-zinc-800/80 rounded-xl p-5 flex flex-col">
          <h3 className="text-xs text-zinc-500 font-semibold tracking-wider mb-4 uppercase">Tire Degradation</h3>
          <div className="flex-1 min-h-0 -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={tireData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis dataKey="lap" stroke="#444" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#444" fontSize={10} tickLine={false} axisLine={false} domain={[0, 100]} />
                <Tooltip cursor={{ stroke: '#444' }} contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                <Area type="monotone" dataKey="value" stroke="#f97316" fillOpacity={0.2} fill="url(#colorDeg)" />
                <defs>
                  <linearGradient id="colorDeg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  )
}
