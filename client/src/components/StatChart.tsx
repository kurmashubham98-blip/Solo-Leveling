import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface StatChartProps {
  data?: any[];
}

const defaultData = [ 
    {name: 'Mon', xp: 420}, {name: 'Tue', xp: 600}, {name: 'Wed', xp: 300}, 
    {name: 'Thu', xp: 850}, {name: 'Fri', xp: 1200}, {name: 'Sat', xp: 900}, {name: 'Sun', xp: 1400} 
];

export const StatChart = ({ data = defaultData }: StatChartProps) => {
  return (
    <div className="h-[350px] w-full bg-card-bg/50 backdrop-blur-sm p-6 border border-muted rounded-sm relative overflow-hidden group">
       <div className="flex items-center justify-between mb-6 z-10 relative">
          <h3 className="text-sm font-heading tracking-wider text-muted-foreground uppercase">System: Growth Rate</h3>
          <span className="text-xs text-primary font-mono animate-pulse">LIVE FEED</span>
       </div>

       {/* Background Grid decorative */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />
       
       <ResponsiveContainer width="100%" height="80%">
         <LineChart data={data}>
           <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" vertical={false} />
           <XAxis 
             dataKey="name" 
             stroke="#525252" 
             fontSize={12} 
             tickLine={false} 
             axisLine={false} 
             fontFamily="Share Tech Mono"
             dy={10}
           />
           <YAxis 
             stroke="#525252" 
             fontSize={12} 
             tickLine={false} 
             axisLine={false} 
             fontFamily="Share Tech Mono"
             dx={-10}
           />
           <Tooltip 
             contentStyle={{ backgroundColor: '#050505', border: '1px solid #1f1f1f', borderRadius: '4px' }}
             itemStyle={{ color: '#00F0FF', fontFamily: 'Share Tech Mono' }}
             labelStyle={{ color: '#A3A3A3', marginBottom: '0.5rem', fontFamily: 'Orbitron' }}
             cursor={{ stroke: '#00F0FF', strokeWidth: 1, strokeDasharray: '4 4' }}
           />
           <Line 
             type="step" 
             dataKey="xp" 
             stroke="#00F0FF" 
             strokeWidth={2} 
             dot={{ r: 4, fill: '#050505', stroke: '#00F0FF', strokeWidth: 2 }} 
             activeDot={{ r: 6, fill: '#00F0FF', stroke: '#fff', strokeWidth: 0, boxShadow: '0 0 10px #00F0FF' }}
             animationDuration={2000}
           />
         </LineChart>
       </ResponsiveContainer>
    </div>
  );
};
