import { Card } from './ui/card';

interface StatsSummaryProps {
    stats?: {
        strength: number;
        agility: number;
        intelligence: number;
        vitality: number;
        sense: number;
    }
}

const defaultStats = { strength: 85, agility: 72, intelligence: 88, vitality: 64, sense: 92 };

export const StatsSummary = ({ stats = defaultStats }: StatsSummaryProps) => {
    const displayStats = [
        { label: 'STRENGTH', value: stats.strength, code: 'STR', color: 'text-danger' },
        { label: 'AGILITY', value: stats.agility, code: 'AGI', color: 'text-primary' },
        { label: 'SENSE', value: stats.sense, code: 'SNS', color: 'text-secondary' },
        { label: 'VITALITY', value: stats.vitality, code: 'VIT', color: 'text-success' },
        { label: 'INTELLIGENCE', value: stats.intelligence, code: 'INT', color: 'text-warning' }
    ];

    return (
        <Card className='p-6 bg-panel-bg/90 backdrop-blur-md border border-primary/20 shadow-system-panel relative overflow-hidden group h-full'>
            {/* Decorative Header */}
            <div className='flex items-center justify-between mb-8 border-b border-primary/10 pb-4'>
                <h3 className='text-xl font-heading font-bold uppercase tracking-widest text-white flex items-center gap-2'>
                    STATUS
                </h3>
                <span className='text-xs font-mono text-muted-foreground animate-pulse'>[UPDATED]</span>
            </div>

            <div className='space-y-6 relative z-10'>
                {displayStats.map((stat, i) => (
                    <div key={i} className='group/stat'>
                        <div className='flex items-end justify-between mb-2'>
                            <span className='text-sm font-mono text-muted-foreground flex items-center gap-2'>
                                <span className='w-1 h-3 bg-primary/20 group-hover/stat:bg-primary transition-colors' />
                                {stat.code}
                            </span>
                            <span className={`text-xl font-heading font-bold ${stat.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]`}>
                                {stat.value}
                            </span>
                        </div>
                        <div className='h-1 w-full bg-muted/20 overflow-hidden'>
                            <div
                                className={`h-full ${stat.color.replace('text', 'bg')} opacity-60 shadow-[0_0_10px_currentColor] group-hover/stat:opacity-100 transition-all duration-500`}
                                style={{ width: `${stat.value}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Decorative bottom text */}
            <div className='mt-8 pt-4 border-t border-primary/10 text-[10px] font-mono text-muted-foreground text-center tracking-[0.2em] opacity-50 uppercase'>
                Vessel Performance: Optimal
            </div>
        </Card>
    );
};
