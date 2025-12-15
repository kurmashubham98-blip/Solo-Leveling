import { motion } from 'framer-motion';

export const ActivityGrid = () => {
    // Generate last 365 days of activity (mock data)
    const generateActivity = () => {
        const days = [];
        for (let i = 0; i < 365; i++) {
            // Random intensity 0-4
            const intensity = Math.random() > 0.7 ? Math.floor(Math.random() * 5) : 0;
            days.push(intensity);
        }
        return days;
    };

    const activity = generateActivity();

    const getColor = (intensity: number) => {
        switch (intensity) {
            case 0: return 'bg-muted/20';
            case 1: return 'bg-primary/20';
            case 2: return 'bg-primary/40';
            case 3: return 'bg-primary/60';
            case 4: return 'bg-primary shadow-[0_0_4px_rgba(0,240,255,0.8)]';
            default: return 'bg-muted/20';
        }
    };

    return (
        <div className='p-4 bg-black/40 border border-muted rounded-sm'>
            <div className='flex gap-1 flex-wrap justify-center h-32 overflow-hidden content-start'>
                {activity.map((level, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.001 }}
                        className={`w-2 h-2 rounded-[1px] ${getColor(level)}`}
                        title={`Day ${i + 1}: Level ${level}`}
                    />
                ))}
            </div>
            <div className='flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground font-mono'>
                <span>LESS</span>
                <div className='flex gap-1'>
                    <div className='w-2 h-2 bg-muted/20 rounded-[1px]' />
                    <div className='w-2 h-2 bg-primary/20 rounded-[1px]' />
                    <div className='w-2 h-2 bg-primary/60 rounded-[1px]' />
                    <div className='w-2 h-2 bg-primary rounded-[1px]' />
                </div>
                <span>MORE</span>
            </div>
        </div>
    );
};
