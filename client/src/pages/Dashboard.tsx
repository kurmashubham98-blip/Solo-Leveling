import { useEffect, useState } from 'react';
import { PlayerHUD } from '../components/PlayerHUD';
import { QuestList } from '../components/QuestList';
import { ActivityGrid } from '../components/ActivityGrid';
import { StatsSummary } from '../components/StatsSummary';
import { api } from '../services/api';
import { Modal } from '../components/ui/modal';
import { Button } from '../components/ui/button';

export const Dashboard = () => {
    const [player, setPlayer] = useState<any>(null);
    const [quests, setQuests] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [lastReward, setLastReward] = useState(0);

    const fetchData = async () => {
        try {
            const user = await api.post('/auth/login', { username: 'Shadow' });
            setPlayer(user);
            const userQuests = await api.get(`/quests/${user.id}`);
            setQuests(userQuests);
            setLoading(false);
        } catch (err) { console.error(err); }
    };

    useEffect(() => { fetchData(); }, []);

    const handleComplete = async (questId: number) => {
        if (!player) return;
        try {
            const result = await api.post(`/quests/${questId}/complete`, { userId: player.id });
            if (result.success) {
                setLastReward(result.xpGain);
                setModalOpen(true);
                fetchData();
            }
        } catch (err) { console.error(err); }
    };

    if (loading || !player) return <div className='p-20 text-center animate-pulse text-primary font-mono'>INITIALIZING SYSTEM...</div>;

    return (
        <div className='pb-20'>
            <PlayerHUD player={player} />
            <div className='grid lg:grid-cols-3 gap-8'>
                <div className='lg:col-span-2 space-y-8'>
                    <div className='space-y-2'>
                        <h3 className='text-sm font-heading tracking-wider text-muted-foreground uppercase pl-1'>System Log</h3>
                        <ActivityGrid />
                    </div>
                    <QuestList quests={quests} onComplete={handleComplete} />
                </div>
                <div className='space-y-8'>
                    <StatsSummary stats={player.stats} />
                </div>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title='QUEST CLEARED' type='success'>
                <div className='text-center space-y-6'>
                    <p className='text-muted-foreground'>You have successfully completed the mandate.</p>
                    <div className='py-4'><div className='text-4xl font-mono text-primary animate-bounce'>+{lastReward} XP</div></div>
                    <Button className='w-full' onClick={() => setModalOpen(false)}>ACCEPT REWARD</Button>
                </div>
            </Modal>
        </div>
    );
};
