import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Coins, Heart, Zap, Skull } from 'lucide-react';

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
        <div className='bg-panel-bg/90 backdrop-blur-md border border-primary/20 p-6 rounded-sm mb-8 shadow-system-panel relative overflow-hidden group'>

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0)_25%,rgba(0,240,255,0.02)_25%,rgba(0,240,255,0.02)_50%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_75%,rgba(0,240,255,0.02)_75%,rgba(0,240,255,0.02)_100%)] bg-[size:20px_20px] pointer-events-none" />

            <div className='flex items-center gap-8 relative z-10'>
                {/* Avatar Area */}
                <div className='relative'>
                    <div className='w-24 h-24 bg-black rounded-full border-2 border-primary shadow-[0_0_20px_rgba(0,240,255,0.4)] overflow-hidden relative z-10'>
                        <img src='https://github.com/shadcn.png' alt='Avatar' className='w-full h-full object-cover grayscale mix-blend-luminosity brightness-110' />
                        {/* Scanline over avatar */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-30 animate-scanline pointer-events-none" />
                    </div>
                    {/* Level Badge Absolute */}
                    <div className="absolute -bottom-2 md:-right-2 bg-black border border-primary text-primary px-2 py-0.5 rounded-sm text-xs font-mono font-bold shadow-glow-blue z-20">
                        LVL.{player.level}
                    </div>
                </div>

                {/* Info Area */}
                <div className='flex-1 space-y-5'>
                    <div className='flex flex-wrap items-center justify-between gap-4'>
                        <div>
                            <h2 className='text-4xl font-heading font-bold tracking-widest uppercase text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] flex items-center gap-3'>
                                {player.username}
                            </h2>
                            <p className='text-primary text-xs font-mono tracking-[0.3em] uppercase opacity-80 pl-1 mt-1'>
                                JOB: NECROMANCER
                            </p>
                        </div>
                        <div className='text-right'>
                            <Badge variant='rankS' size='lg' className='mb-2 text-lg px-4 py-1 shadow-glow-blue animate-pulse'>
                                RANK {player.rank}
                            </Badge>
                        </div>
                    </div>

                    {/* Bars */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4'>
                        {/* HP Bar */}
                        <div className='space-y-2'>
                            <div className='flex justify-between text-xs font-mono text-danger tracking-wider'>
                                <span className='flex items-center gap-2'><Heart className='w-3 h-3 fill-danger' /> HEALTH</span>
                                <span>{player.hp} / {player.maxHp}</span>
                            </div>
                            <div className="relative h-3 bg-black/50 rounded-sm overflow-hidden border border-danger/20">
                                <div
                                    className="absolute top-0 left-0 h-full bg-danger shadow-[0_0_10px_rgba(255,0,60,0.5)] transition-all duration-700 ease-out"
                                    style={{ width: `${hpPercent}%` }}
                                />
                            </div>
                        </div>

                        {/* XP Bar */}
                        <div className='space-y-2'>
                            <div className='flex justify-between text-xs font-mono text-secondary tracking-wider'>
                                <span className='flex items-center gap-2'><Zap className='w-3 h-3 fill-secondary' /> EXPERIENCE</span>
                                <span>{player.xp} / {player.maxXp}</span>
                            </div>
                            <div className="relative h-3 bg-black/50 rounded-sm overflow-hidden border border-secondary/20">
                                <div
                                    className="absolute top-0 left-0 h-full bg-secondary shadow-[0_0_10px_rgba(189,0,255,0.5)] transition-all duration-700 ease-out"
                                    style={{ width: `${xpPercent}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gold & Fatigue Absolute */}
            <div className='absolute top-4 right-4 flex flex-col items-end gap-2 font-mono text-xs'>
                <div className='flex items-center gap-2 px-3 py-1 bg-black/60 rounded-sm border border-warning/30 text-warning'>
                    <Coins className='w-3 h-3 text-warning' />
                    <span>{player.gold.toLocaleString()} G</span>
                </div>
            </div>
        </div>
    );
};
