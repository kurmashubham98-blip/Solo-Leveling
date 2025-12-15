import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface StatChartProps {
    data?: any[];
}

const defaultData = [
    { name: 'Mon', xp: 420 }, { name: 'Tue', xp: 600 }, { name: 'Wed', xp: 300 },
    { name: 'Thu', xp: 850 }, { name: 'Fri', xp: 1200 }, { name: 'Sat', xp: 900 }, { name: 'Sun', xp: 1400 }
];

export const StatChart = ({ data = defaultData }: StatChartProps) => {
    return (
        <div className="h-[350px] w-full bg-panel-bg/90 backdrop-blur-sm p-6 border border-primary/20 rounded-sm relative overflow-hidden group shadow-system-panel">
            <div className="flex items-center justify-between mb-6 z-10 relative">
                <h3 className="text-sm font-heading tracking-widest text-muted-foreground uppercase flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                    Growth Metrics
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-primary">
                    <span className="animate-pulse">● LIVE</span>
                    <span className="opacity-50">v.1.0.4</span>
                </div>
            </div>

            {/* Background Grid decorative */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

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
                        contentStyle={{ backgroundColor: '#000000', border: '1px solid #00F0FF', borderRadius: '2px', boxShadow: '0 0 10px rgba(0,240,255,0.2)' }}
                        itemStyle={{ color: '#00F0FF', fontFamily: 'Share Tech Mono' }}
                        labelStyle={{ color: '#A3A3A3', marginBottom: '0.5rem', fontFamily: 'Orbitron', letterSpacing: '0.1em' }}
                        cursor={{ stroke: '#00F0FF', strokeWidth: 1, strokeDasharray: '4 4' }}
                    />
                    <Line
                        type="monotone"
                        dataKey="xp"
                        stroke="#00F0FF"
                        strokeWidth={2}
                        dot={{ r: 4, fill: '#050505', stroke: '#00F0FF', strokeWidth: 2 }}
                        activeDot={{ r: 6, fill: '#00F0FF', stroke: '#fff', strokeWidth: 0 }}
                        animationDuration={2000}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
