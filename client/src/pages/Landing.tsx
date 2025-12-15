import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Activity, Bell, Sword, Shield, ChevronRight } from 'lucide-react';

export const Landing = () => {
    return (
        <div className='bg-background min-h-screen relative overflow-hidden text-text-primary font-sans'>

            {/* Hero Section */}
            <section className='relative pt-32 pb-20 px-6'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='text-center space-y-6 max-w-4xl mx-auto z-10 relative'
                    >
                        <h1 className='text-6xl md:text-8xl font-black font-heading tracking-tighter uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500'>
                            The <span className='text-primary drop-shadow-[0_0_20px_rgba(0,240,255,0.8)]'>System</span><br />Awaits You
                        </h1>
                        <p className='text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto'>
                            Gamify your existence. Complete daily quests, level up your stats, and become the main character of your own story.
                        </p>

                        <div className='flex items-center justify-center gap-6 pt-8'>
                            <Button size='lg' className='text-lg px-10 py-6 animate-pulse'>
                                Player Login <ChevronRight className='ml-2 w-5 h-5' />
                            </Button>
                            <Button variant='outline' size='lg' className='text-lg px-10 py-6 border-white/20 text-white hover:bg-white/5'>
                                View Demo
                            </Button>
                        </div>
                    </motion.div>
                </div>
                <div className='absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none' />
            </section>

            {/* Features Section */}
            <section className='py-24 px-6 relative z-10'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid md:grid-cols-2 gap-16 items-center'>
                        <div className='space-y-6'>
                            <h2 className='text-4xl font-heading font-bold uppercase text-white'><span className='text-secondary'>Visualize</span> Your Rise</h2>
                            <p className='text-muted-foreground text-lg'>
                                Track every XP gain. Monitor your consistency with our advanced activity heatmap and growth charts. The numbers don't lie.
                            </p>
                            <ul className='space-y-4 font-heading tracking-wider text-sm'>
                                <li className='flex items-center gap-3'><Activity className='text-secondary' /> REAL-TIME GROWTH ANALYTICS</li>
                                <li className='flex items-center gap-3'><Activity className='text-secondary' /> STREAK TRACKING PROTOCOLS</li>
                                <li className='flex items-center gap-3'><Activity className='text-secondary' /> LEVEL UP REWARDS</li>
                            </ul>
                        </div>
                        <motion.div
                            className='relative'
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className='absolute inset-0 bg-secondary/20 blur-3xl rounded-full' />
                            <Card className='p-8 relative bg-black/80 border-secondary/30'>
                                <div className='flex items-end justify-between h-64 gap-2'>
                                    {[40, 60, 30, 80, 55, 90, 100].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1, duration: 1 }}
                                            className='w-full bg-secondary shadow-[0_0_10px_rgba(189,0,255,0.5)] rounded-t-sm opacity-80'
                                        />
                                    ))}
                                </div>
                                <div className='mt-4 flex justify-between text-xs font-mono text-muted-foreground'>
                                    <span>MON</span><span>SUN</span>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Cards Section */}
            <section className='py-24 px-6 bg-black/50'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-16 space-y-4'>
                        <h2 className='text-4xl font-heading font-bold uppercase'>System Features</h2>
                        <p className='text-muted-foreground'>Tools designed for your ascension.</p>
                    </div>

                    <div className='grid md:grid-cols-3 gap-8'>
                        {[
                            { icon: Bell, title: 'Smart Directives', desc: 'The System verifies your schedule. Timely alerts ensure you never miss a daily quest.', color: 'text-warning' },
                            { icon: Sword, title: 'Habit Arsenal', desc: 'Manage your inventory of skills. Turn mundane tasks into epic quests for XP.', color: 'text-primary' },
                            { icon: Shield, title: 'Penalty System', desc: 'Failure has consequences. Miss a quest, lose HP. Survive to see another day.', color: 'text-danger' }
                        ].map((feature, i) => (
                            <Card key={i} className='p-8 hover:bg-white/5 transition-colors border-muted group'>
                                <feature.icon className={`w-12 h-12 mb-6 ${feature.color} group-hover:shadow-[0_0_10px_rgba(189,0,255,0.5)] transition-transform duration-300`} />
                                <h3 className='text-2xl font-heading font-bold uppercase mb-4'>{feature.title}</h3>
                                <p className='text-muted-foreground'>{feature.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-32 px-6 relative'>
                <div className='absolute inset-0 bg-primary/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]' />
                <div className='max-w-4xl mx-auto text-center relative z-10 space-y-8'>
                    <h2 className='text-5xl font-heading font-bold uppercase'>Ready to Ascend?</h2>
                    <Button size='lg' className='text-xl px-12 py-8 shadow-[0_0_40px_rgba(0,240,255,0.5)] hover:shadow-[0_0_60px_rgba(0,240,255,0.8)] transition-shadow duration-500'>
                        ACCEPT INVITATION
                    </Button>
                </div>
            </section>

        </div>
    );
};
