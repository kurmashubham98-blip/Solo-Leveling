import { useState } from 'react';
import { Tabs } from './ui/tabs';
import { QuestCard } from './QuestCard';
import { AnimatePresence, motion } from 'framer-motion';
import { ClipboardList } from 'lucide-react';

interface QuestListProps {
  quests: any[];
  onComplete: (id: number) => void;
}

export const QuestList = ({ quests, onComplete }: QuestListProps) => {
  const [activeTab, setActiveTab] = useState('daily');

  const filteredQuests = quests.filter(q => 
    activeTab === 'daily' ? q.type === 'DAILY' : 
    activeTab === 'weekly' ? q.type === 'WEEKLY' : true
  );

  return (
    <div className='space-y-6'>
       <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
             <ClipboardList className='text-primary' />
             <h2 className='text-xl font-heading font-bold uppercase tracking-wider text-white'>Active Mandates</h2>
          </div>
          <Tabs 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
            tabs={[
              { id: 'daily', label: 'Daily' },
              { id: 'weekly', label: 'Weekly' }
            ]} 
          />
       </div>

       <div className='space-y-4 min-h-[300px]'>
          <AnimatePresence mode='popLayout'>
             {filteredQuests.length > 0 ? (
               filteredQuests.map((quest) => (
                 <QuestCard key={quest.id} quest={quest} onComplete={onComplete} />
               ))
             ) : (
               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }}
                 className='text-center py-20 text-muted-foreground border border-dashed border-muted rounded-sm'
               >
                 No active quests found in this sector.
               </motion.div>
             )}
          </AnimatePresence>
       </div>
    </div>
  );
};
