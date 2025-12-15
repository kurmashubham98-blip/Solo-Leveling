import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

export const ActivityGrid = () => {
    // Generate dates for the last 365 days
    const dates = Array.from({ length: 365 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (364 - i));
        return {
            date: date.toISOString().split('T')[0],
            level: Math.random() > 0.7 ? Math.floor(Math.random() * 4) + 1 : 0
        };
    });

    const getLevelColor = (level: number) => {
        switch (level) {
            case 0: return 'bg-muted/30';
            case 1: return 'bg-primary/30';
            case 2: return 'bg-primary/50 shadow-[0_0_5px_rgba(0,240,255,0.3)]';
            case 3: return 'bg-primary/80 shadow-[0_0_8px_rgba(0,240,255,0.5)]';
            case 4: return 'bg-primary shadow-[0_0_12px_rgba(0,240,255,0.8)]';
            default: return 'bg-muted/30';
        }
    };

    return (
        <div className="bg-panel-bg/90 backdrop-blur-sm border border-primary/20 p-6 rounded-sm shadow-system-panel overflow-hidden relative group">
            <div className="flex items-center justify-between mb-6 relative z-10">
                <h3 className="text-sm font-heading tracking-widest text-muted-foreground uppercase flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    System Log // Activity
                </h3>
                <span className="text-xs font-mono text-primary/70">YEARLY_RECORD</span>
            </div>

            <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide">
                {Array.from({ length: 53 }).map((_, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                        {dates.slice(weekIndex * 7, (weekIndex + 1) * 7).map((day, dayIndex) => (
                            <TooltipProvider key={`${weekIndex}-${dayIndex}`}>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.001 * (weekIndex * 7 + dayIndex) }}
                                            className={`w-3 h-3 rounded-[1px] hover:scale-125 transition-transform duration-200 ${getLevelColor(day.level)}`}
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-black border border-primary text-primary font-mono text-xs">
                                        <p>{day.date}: {day.level} QUESTS</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ))}
                    </div>
                ))}
            </div>

            {/* Decorative Grid Overlays */}
            <div className="absolute top-0 right-0 p-2 opacity-50">
                <div className="w-16 h-1 bg-gradient-to-l from-primary to-transparent" />
            </div>
        </div>
    );
};
