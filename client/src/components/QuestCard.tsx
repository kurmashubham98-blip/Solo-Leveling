import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check } from 'lucide-react';
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
    E: 'text-white border-white/50 bg-white/5',
    D: 'text-blue-400 border-blue-400/50 bg-blue-400/5',
    C: 'text-green-400 border-green-400/50 bg-green-400/5',
    B: 'text-yellow-400 border-yellow-400/50 bg-yellow-400/5',
    A: 'text-orange-500 border-orange-500/50 bg-orange-500/5',
    S: 'text-primary border-primary shadow-glow-blue bg-primary/10',
};

export const QuestCard = ({ quest, onComplete }: QuestCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(0, 240, 255, 0.1)' }}
            className='group relative'
        >
            {/* Decorative "System" Corner Markers */}
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />

            <Card className={cn(
                "p-0 overflow-hidden border transition-all duration-300 bg-black/60",
                quest.status === 'COMPLETED' ? 'border-success/30 opacity-60' : 'border-muted group-hover:border-primary/50'
            )}>
                <div className='p-6 flex items-start justify-between gap-4'>
                    <div className='flex-1 space-y-3'>
                        <div className='flex items-center gap-3'>
                            <Badge className={cn('font-mono border font-bold', difficultyColors[quest.difficulty])}>
                                RANK {quest.difficulty}
                            </Badge>
                            <span className='text-[10px] font-heading text-muted-foreground tracking-[0.2em] uppercase border border-muted px-2 py-0.5 rounded-full'>{quest.type} QUEST</span>
                        </div>

                        <h3 className={cn(
                            "text-xl font-heading font-bold uppercase tracking-wide transition-colors",
                            quest.status === 'COMPLETED' ? "text-success line-through decoration-2" : "text-white group-hover:text-glow"
                        )}>
                            {quest.title}
                        </h3>

                        <p className='text-text-secondary text-sm max-w-lg font-mono leading-relaxed border-l-2 border-muted pl-4'>
                            {quest.description}
                        </p>
                    </div>

                    <div className='text-right space-y-4 min-w-[120px] flex flex-col items-end'>
                        <div className='text-sm font-mono text-secondary flex flex-col items-end'>
                            <span className='text-[10px] text-muted-foreground uppercase tracking-wider'>Reward</span>
                            <span className='font-bold drop-shadow-[0_0_5px_rgba(189,0,255,0.5)]'>+{quest.rewardXp} XP</span>
                        </div>

                        {quest.status === 'ACTIVE' && (
                            <Button
                                size='sm'
                                onClick={() => onComplete(quest.id)}
                                className='w-full font-heading tracking-widest bg-primary/20 text-primary border border-primary/50 hover:bg-primary hover:text-black hover:shadow-glow-blue transition-all'
                            >
                                COMPLETE
                            </Button>
                        )}

                        {quest.status === 'COMPLETED' && (
                            <div className='flex items-center gap-2 text-success font-heading text-sm tracking-widest bg-success/10 px-3 py-1 rounded-sm border border-success/30'>
                                <Check className='w-4 h-4' /> CLEARED
                            </div>
                        )}
                    </div>
                </div>

                {/* Progress Bar (Visual only for now) */}
                {quest.status === 'ACTIVE' && (
                    <div className="h-[2px] w-full bg-muted/30">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 20, ease: 'linear' }} // Mock timer effect
                            className="h-full bg-primary/50 shadow-glow-blue"
                        />
                    </div>
                )}
            </Card>
        </motion.div>
    );
};
