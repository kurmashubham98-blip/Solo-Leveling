import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { StatsSummary } from '../components/StatsSummary';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const statsData = [
  { subject: 'Strength', A: 120, fullMark: 150 },
  { subject: 'Agility', A: 98, fullMark: 150 },
  { subject: 'Intelligence', A: 86, fullMark: 150 },
  { subject: 'Vitality', A: 99, fullMark: 150 },
  { subject: 'Sense', A: 85, fullMark: 150 },
];

export const Profile = () => {
  return (
    <div className='space-y-8 pb-20'>
      <div className='relative h-48 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-sm overflow-hidden'>
         <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1931&auto=format&fit=crop")] bg-cover bg-center opacity-20 mix-blend-overlay' />
         <div className='absolute bottom-0 left-0 p-8 flex items-end gap-6'>
            <div className='w-24 h-24 bg-black rounded-full border-2 border-primary overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.5)]'>
               <img src='https://github.com/shadcn.png' className='w-full h-full object-cover' />
            </div>
            <div className='mb-2'>
               <h1 className='text-3xl font-heading font-bold text-white uppercase tracking-widest'>Shadow Monarch</h1>
               <div className='flex gap-2 mt-2'>
                  <Badge variant='rankS'>RANK S-CLASS</Badge>
                  <Badge variant='outline' className='font-mono'>LVL 75</Badge>
               </div>
            </div>
         </div>
      </div>

      <div className='grid lg:grid-cols-2 gap-8'>
         <Card className='p-6'>
            <h3 className='text-sm font-heading text-muted-foreground uppercase tracking-wider mb-6'>Attribute Radar</h3>
            <div className='h-[300px] w-full'>
               <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={statsData}>
                     <PolarGrid stroke="#333" />
                     <PolarAngleAxis dataKey="subject" tick={{ fill: '#A3A3A3', fontSize: 12, fontFamily: 'Orbitron' }} />
                     <Radar
                        name="Mike"
                        dataKey="A"
                        stroke="#BD00FF"
                        strokeWidth={2}
                        fill="#BD00FF"
                        fillOpacity={0.3}
                     />
                  </RadarChart>
               </ResponsiveContainer>
            </div>
         </Card>

         <div className='space-y-8'>
            <StatsSummary stats={{ strength: 120, agility: 98, intelligence: 86, vitality: 99, sense: 85 }} />
            
            <Card className='p-6'>
               <h3 className='text-sm font-heading text-muted-foreground uppercase tracking-wider mb-4'>Job Class</h3>
               <div className='p-4 bg-black/40 border border-muted rounded-sm'>
                  <div className='flex justify-between items-center mb-2'>
                     <span className='text-primary font-heading uppercase'>Necromancer</span>
                     <Badge variant='outline'>Advanced</Badge>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                     A specialized class capable of summoning collected souls to fight assist in quests.
                  </p>
               </div>
            </Card>
         </div>
      </div>
    </div>
  );
};
