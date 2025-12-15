import { PlayerHUD } from '../components/PlayerHUD';
import { ActivityGrid } from '../components/ActivityGrid';
import { StatChart } from '../components/StatChart';
import { StatsSummary } from '../components/StatsSummary';
import { Tabs } from '../components/ui/tabs';
import { QuestCard } from '../components/QuestCard';
import { Sword, LayoutDashboard, User, BarChart2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { AnimatePresence, motion } from 'framer-motion';

export const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('daily');
    const [quests, setQuests] = useState<any[]>([]);

    useEffect(() => {
        // Fetch Daily Quests mock or real
        const fetchDaily = async () => {
            try {
                const data = await api.get('/quests/1?type=DAILY');
                setQuests(data);
            } catch (err) { console.error("Failed to fetch quests", err); }
        };
        fetchDaily();
    }, [activeTab]);

    return (
        <div className='min-h-screen bg-background text-text-primary p-6 md:p-10 font-sans relative overflow-hidden'>
            {/* Sidebar (Mock representation for layout) */}
            <div className="fixed left-0 top-0 bottom-0 w-20 bg-black/80 border-r border-primary/20 hidden lg:flex flex-col items-center py-8 z-50 backdrop-blur-md">
                <div className="mb-12 text-primary font-heading font-bold text-2xl">SL</div>
                <nav className="space-y-8">
                    <div className="p-3 bg-primary/10 rounded-sm text-primary border border-primary/50 shadow-glow-blue cursor-pointer"><LayoutDashboard /></div>
                    <div className="p-3 text-muted-foreground hover:text-white cursor-pointer transition-colors"><Sword /></div>
                    <div className="p-3 text-muted-foreground hover:text-white cursor-pointer transition-colors"><BarChart2 /></div>
                    <div className="p-3 text-muted-foreground hover:text-white cursor-pointer transition-colors"><User /></div>
                </nav>
            </div>

            <div className="lg:pl-24 max-w-7xl mx-auto space-y-8 relative z-10">
                {/* Top HUD */}
                <PlayerHUD player={{
                    username: 'ShadowMonarch',
                    level: 42,
                    rank: 'S',
                    hp: 12500, maxHp: 15000,
                    xp: 8450, maxXp: 10000,
                    gold: 1500000
                }} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Stats & Quests */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Quests Section */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-heading font-bold uppercase tracking-wider flex items-center gap-2 text-white">
                                    <Sword className="text-primary w-5 h-5" /> Current Objectives
                                </h2>
                                <Tabs
                                    activeTab={activeTab}
                                    onTabChange={setActiveTab}
                                    tabs={[
                                        { id: 'daily', label: 'DAILY' },
                                        { id: 'weekly', label: 'WEEKLY' }
                                    ]}
                                    className="bg-black border border-primary/20"
                                />
                            </div>

                            <div className="space-y-4 min-h-[300px]">
                                <AnimatePresence>
                                    {quests.length > 0 ? quests.map((q) => (
                                        <QuestCard key={q.id} quest={q} onComplete={() => { }} />
                                    )) : (
                                        <div className="p-10 text-center border border-dashed border-muted text-muted-foreground font-mono">
                                            NO ACTIVE DIRECTIVES DETECTED
                                        </div>
                                    )}
                                    {/* Mock Quest for Display if empty */}
                                    {quests.length === 0 && (
                                        <QuestCard
                                            quest={{
                                                id: 999,
                                                title: '[DAILY QUEST] PREPARATION',
                                                description: 'Complete 100 push-ups, 100 sit-ups, 100 squats, and a 10km run.',
                                                difficulty: 'E',
                                                rewardXp: 100,
                                                status: 'ACTIVE',
                                                type: 'DAILY'
                                            }}
                                            onComplete={() => { }}
                                        />
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Activity Grid */}
                        <ActivityGrid />
                    </div>

                    {/* Right Column: Stats & Charts */}
                    <div className="space-y-8">
                        <div className="h-[400px]">
                            <StatsSummary />
                        </div>
                        <div className="h-[350px]">
                            <StatChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
