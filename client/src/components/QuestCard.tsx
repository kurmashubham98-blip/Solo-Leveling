import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check, Clock, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface QuestCardProps {
  quest: {
    id: number;
    title: string;
    description: string;
    difficulty: 'E' | 'D' | 'C' | 'B' | 'A' | 'S';
    rewardXp: number;
    status: 'ACTIVE' | 'COMPLETED' | 'FAILED';
    type: 'DAILY' | 'WEEKLY' | 'MAIN';
  };
  onComplete: (id: number) => void;
}

const difficultyColors = {
  E: 'text-white border-white/50',
  D: 'text-blue-400 border-blue-400/50',
  C: 'text-green-400 border-green-400/50',
  B: 'text-yellow-400 border-yellow-400/50',
  A: 'text-orange-500 border-orange-500/50',
  S: 'text-primary border-primary shadow-glow-blue',
};

export const QuestCard = ({ quest, onComplete }: QuestCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.01 }}
      className='group relative'
    >
      <Card className={cn(
        "p-0 overflow-hidden border-l-4 transition-all duration-300",
        quest.status === 'COMPLETED' ? 'border-l-success opacity-50' : 'border-l-primary',
        quest.status === 'FAILED' && 'border-l-danger opacity-70'
      )}>
        <div className='p-6 flex items-start justify-between gap-4'>
           <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-3'>
                 <Badge variant='outline' className={cn('font-mono', difficultyColors[quest.difficulty])}>
                    {quest.difficulty}-RANK
                 </Badge>
                 <span className='text-xs text-muted-foreground tracking-widest uppercase'>{quest.type} QUEST</span>
              </div>
              <h3 className={cn(
                "text-xl font-heading font-bold uppercase tracking-wide transition-colors",
                quest.status === 'COMPLETED' ? "text-success line-through" : "text-white group-hover:text-primary"
              )}>
                {quest.title}
              </h3>
              <p className='text-muted-foreground text-sm max-w-lg'>{quest.description}</p>
           </div>
           
           <div className='text-right space-y-4 min-w-[100px]'>
              <div className='text-sm font-mono text-secondary'>
                 +{quest.rewardXp} XP
              </div>
              
              {quest.status === 'ACTIVE' && (
                <Button 
                  size='sm' 
                  onClick={() => onComplete(quest.id)}
                  className='w-full font-heading tracking-widest'
                >
                  COMPLETE
                </Button>
              )}
              
              {quest.status === 'COMPLETED' && (
                 <div className='flex items-center justify-end gap-1 text-success font-heading text-sm tracking-widest'>
                    <Check className='w-4 h-4' /> CLEARED
                 </div>
              )}
           </div>
        </div>
      </Card>
    </motion.div>
  );
};
