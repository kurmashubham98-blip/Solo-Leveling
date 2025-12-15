import { StatChart } from '../components/StatChart';
import { Card } from '../components/ui/card';
import { Activity, TrendingUp, Zap } from 'lucide-react';

export const Analytics = () => {
  return (
    <div className='space-y-8 pb-20'>
      <div className='space-y-2'>
         <h1 className='text-3xl font-heading font-bold uppercase text-white'>Performance Metrics</h1>
         <p className='text-muted-foreground'>System Analysis of Player Growth.</p>
      </div>

      <div className='grid md:grid-cols-3 gap-6'>
         <Card className='p-6 flex items-center justify-between'>
            <div>
               <p className='text-xs font-heading text-muted-foreground uppercase tracking-wider'>Total XP Gained</p>
               <h3 className='text-2xl font-mono text-primary'>24,500</h3>
            </div>
            <Zap className='text-primary/50 w-8 h-8' />
         </Card>
         <Card className='p-6 flex items-center justify-between'>
            <div>
               <p className='text-xs font-heading text-muted-foreground uppercase tracking-wider'>Completion Rate</p>
               <h3 className='text-2xl font-mono text-success'>92.4%</h3>
            </div>
            <Activity className='text-success/50 w-8 h-8' />
         </Card>
         <Card className='p-6 flex items-center justify-between'>
            <div>
               <p className='text-xs font-heading text-muted-foreground uppercase tracking-wider'>Current Streak</p>
               <h3 className='text-2xl font-mono text-warning'>14 Days</h3>
            </div>
            <TrendingUp className='text-warning/50 w-8 h-8' />
         </Card>
      </div>

      <StatChart />

      <div className='grid md:grid-cols-2 gap-8'>
         <Card className='p-6 space-y-4 h-64'>
            <h3 className='text-sm font-heading text-muted-foreground uppercase tracking-wider border-b border-muted pb-2'>Quest Breakdown</h3>
            <div className='flex items-center justify-center h-full pb-8 text-muted-foreground'>
               [CHART PLACEHOLDER: Radar Chart]
            </div>
         </Card>
         <Card className='p-6 space-y-4 h-64'>
            <h3 className='text-sm font-heading text-muted-foreground uppercase tracking-wider border-b border-muted pb-2'>Recent Achievements</h3>
            <ul className='space-y-3'>
               <li className='flex items-center justify-between text-sm'>
                  <span className='text-white'>First Blood</span>
                  <span className='text-muted-foreground font-mono'>2024-12-10</span>
               </li>
               <li className='flex items-center justify-between text-sm'>
                  <span className='text-white'>Consistency King</span>
                  <span className='text-muted-foreground font-mono'>2024-12-14</span>
               </li>
            </ul>
         </Card>
      </div>
    </div>
  );
};
