import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Coins, Heart, Zap } from 'lucide-react';

interface PlayerHUDProps {
    player: {
        username: string;
        level: number;
        rank: string;
        hp: number;
        maxHp: number;
        xp: number;
        maxXp: number;
        gold: number;
    };
}

export const PlayerHUD = ({ player }: PlayerHUDProps) => {
    const hpPercent = (player.hp / player.maxHp) * 100;
    const xpPercent = (player.xp / player.maxXp) * 100;

    return (
        <div className='bg-panel-bg border border-muted p-6 rounded-sm mb-8 shadow-lg relative overflow-hidden'>
            <div className='flex items-center gap-6 relative z-10'>
                {/* Avatar */}
                <div className='w-20 h-20 bg-muted/50 rounded-full border-2 border-primary shadow-[0_0_15px_rgba(0,240,255,0.3)] overflow-hidden relative group'>
                    <img src='https://github.com/shadcn.png' alt='Avatar' className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500' />
                    <div className='absolute inset-0 bg-primary/20 mix-blend-overlay' />
                </div>

                {/* Info */}
                <div className='flex-1 space-y-4'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h2 className='text-3xl font-heading font-bold tracking-widest uppercase text-white drop-shadow-md'>{player.username}</h2>
                            <p className='text-muted-foreground text-sm font-heading tracking-widest'>CLASS: SHADOW MONARCH</p>
                        </div>
                        <div className='text-right'>
                            <Badge variant='rankS' size='lg' className='mb-2'>RANK {player.rank}</Badge>
                            <p className='text-xs text-muted-foreground'>LEVEL {player.level}</p>
                        </div>
                    </div>

                    {/* Bars */}
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='space-y-1'>
                            <div className='flex justify-between text-xs font-mono text-danger'>
                                <span className='flex items-center gap-1'><Heart className='w-3 h-3' /> HP</span>
                                <span>{player.hp} / {player.maxHp}</span>
                            </div>
                            <Progress value={hpPercent} variant='danger' className='h-3' />
                        </div>
                        <div className='space-y-1'>
                            <div className='flex justify-between text-xs font-mono text-secondary'>
                                <span className='flex items-center gap-1'><Zap className='w-3 h-3' /> XP</span>
                                <span>{player.xp} / {player.maxXp}</span>
                            </div>
                            <Progress value={xpPercent} variant='success' className='h-3 bg-muted/30' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Gold Absolute */}
            <div className='absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-black/40 rounded-full border border-warning/30 text-warning font-mono text-sm'>
                <Coins className='w-4 h-4' />
                <span>{player.gold.toLocaleString()} G</span>
            </div>
        </div>
    );
};
