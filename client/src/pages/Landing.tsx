import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Activity, Sword, Shield, ChevronRight, Terminal, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Landing = () => {
    return (
        <div className='bg-background min-h-screen relative overflow-hidden text-text-primary font-sans selection:bg-primary/30 selection:text-white'>

            {/* Dynamic Background Elements */}
            <div className='absolute inset-0 pointer-events-none'>
                <div className='absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] animate-pulse' />
                <div className='absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] animate-pulse' style={{ animationDelay: '2s' }} />
            </div>

            {/* Navbar / System Header */}
            <header className='fixed top-0 w-full z-50 border-b border-primary/20 bg-background/80 backdrop-blur-md'>
                <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
                    <div className='flex items-center gap-2 text-primary font-heading tracking-widest uppercase'>
                        <Terminal className='w-5 h-5' />
                        <span>System OS v2.0</span>
                    </div>
                    <div className='flex items-center gap-4 text-xs font-mono text-muted-foreground'>
                        <span className='animate-pulse text-success'>● ONLINE</span>
                        <span>ID: PLAYER_01</span>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className='relative pt-40 pb-20 px-6'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className='text-center space-y-8 max-w-5xl mx-auto z-10 relative'
                    >
                        <div className='inline-flex items-center gap-2 px-3 py-1 border border-primary/30 rounded-full bg-primary/5 text-primary text-xs font-mono tracking-widest mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000'>
                            <Zap className='w-3 h-3' /> SYSTEM NOTIFICATION RECEIVED
                        </div>

                        <h1 className='text-6xl md:text-9xl font-black font-heading tracking-tighter uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 drop-shadow-2xl'>
                            Awaken <br />
                            <span className='text-primary relative inline-block'>
                                Your Power
                                <span className='absolute inset-0 blur-lg bg-primary/30 block' />
                            </span>
                        </h1>

                        <p className='text-xl md:text-2xl text-text-secondary font-light tracking-wide max-w-2xl mx-auto font-mono border-l-2 border-primary/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0'>
                            "You have daily quests pending. Failure to complete them will result in penalties."
                        </p>

                        <div className='flex flex-col md:flex-row items-center justify-center gap-6 pt-12'>
                            <Link to="/dashboard">
                                <Button size='lg' className='text-xl px-12 py-8 bg-primary text-black hover:bg-primary/90 shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] font-heading tracking-widest uppercase relative overflow-hidden group border-2 border-transparent hover:border-white transition-all'>
                                    <span className='relative z-10 flex items-center gap-2'> Accept Quest <ChevronRight className='w-6 h-6' /> </span>
                                    <div className='absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300' />
                                </Button>
                            </Link>
                            <Button variant='outline' size='lg' className='text-xl px-12 py-8 border-primary/30 text-primary hover:bg-primary/10 font-heading tracking-widest uppercase'>
                                System Guide
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature Grid / Modules */}
            <section className='py-32 px-6 relative z-10'>
                <div className='max-w-7xl mx-auto space-y-16'>
                    <div className='text-center space-y-4'>
                        <h2 className='text-4xl font-heading font-bold uppercase text-white flex items-center justify-center gap-3'>
                            <Cpu className='text-secondary w-8 h-8' /> System Modules
                        </h2>
                        <div className='h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto' />
                    </div>

                    <div className='grid md:grid-cols-3 gap-8'>
                        {[
                            {
                                icon: Activity,
                                title: 'Growth Analytics',
                                desc: 'Visualize your rise. Track XP, Stats, and consistency with military precision.',
                                color: 'text-primary',
                                border: 'border-primary/20',
                                bg: 'bg-primary/5'
                            },
                            {
                                icon: Sword,
                                title: 'Quest Management',
                                desc: 'Daily, Weekly, and Main quests issued by the system. Complete them to survive.',
                                color: 'text-secondary',
                                border: 'border-secondary/20',
                                bg: 'bg-secondary/5'
                            },
                            {
                                icon: Shield,
                                title: 'Status Recovery',
                                desc: 'Monitor HP and fatigue. Ensure your vessel is prepared for the next dungeon.',
                                color: 'text-success',
                                border: 'border-success/20',
                                bg: 'bg-success/5'
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className={`p-1 rounded-sm bg-gradient-to-b from-transparent via-transparent to-${feature.border.split('-')[1]}/10`}
                            >
                                <Card className={`h-full p-8 bg-black/60 backdrop-blur-sm border ${feature.border} relative overflow-hidden group hover:border-opacity-100 transition-colors`}>
                                    <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                                        <feature.icon className={`w-24 h-24 ${feature.color}`} />
                                    </div>
                                    <feature.icon className={`w-12 h-12 mb-6 ${feature.color} drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]`} />
                                    <h3 className='text-2xl font-heading font-bold uppercase mb-4 text-white group-hover:text-glow transition-all'>{feature.title}</h3>
                                    <p className='text-text-secondary font-mono text-sm leading-relaxed'>{feature.desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Decorative Footer */}
            <footer className='border-t border-white/5 bg-black py-12 text-center'>
                <p className='text-xs font-mono text-muted-foreground uppercase tracking-[0.3em]'>
                    System Administrator © 2024 // All Rights Reserved
                </p>
            </footer>

        </div>
    );
};
