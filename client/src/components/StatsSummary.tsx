import { Card } from './ui/card';

export const StatsSummary = ({ stats }: { stats: any }) => {
  const statItems = [
    { label: 'STR', value: stats?.strength || 10, name: 'Strength' },
    { label: 'AGI', value: stats?.agility || 10, name: 'Agility' },
    { label: 'INT', value: stats?.intelligence || 10, name: 'Intelligence' },
    { label: 'VIT', value: stats?.vitality || 10, name: 'Vitality' },
    { label: 'SEN', value: stats?.sense || 10, name: 'Sense' },
  ];

  return (
    <Card className='p-6 space-y-6'>
       <h3 className='text-lg font-heading tracking-wider uppercase text-muted-foreground border-b border-muted pb-2'>Hunter Stats</h3>
       <div className='grid grid-cols-1 gap-4'>
          {statItems.map((stat) => (
             <div key={stat.label} className='flex items-center justify-between group cursor-default'>
                <div className='flex items-center gap-3'>
                   <span className='text-muted-foreground font-mono w-8'>{stat.label}</span>
                   <span className='text-xs text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest'>{stat.name}</span>
                </div>
                <div className='font-mono text-lg text-primary group-hover:text-white transition-colors bg-white/5 px-2 rounded-sm min-w-[40px] text-center'>
                   {stat.value}
                </div>
             </div>
          ))}
       </div>
    </Card>
  );
};
