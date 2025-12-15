import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '../services/api';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Modal } from '../components/ui/modal';
import { QuestCard } from '../components/QuestCard';
import { Plus, Swords } from 'lucide-react';

export const Quests = () => {
    const [quests, setQuests] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('DAILY');
    const [rewardXp, setRewardXp] = useState(10);

    const fetchQuests = async () => {
        try {
            const data = await api.get('/quests/1');
            setQuests(data);
            setLoading(false);
        } catch (err) { console.error(err); }
    };

    useEffect(() => { fetchQuests(); }, []);

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/quests', { userId: 1, title, description, type, rewardXp });
            setCreateModalOpen(false); setTitle(''); setDescription(''); fetchQuests();
        } catch (err) { console.error(err); }
    };

    const handleComplete = async (id: number) => {
        try {
            const res = await api.post(`/quests/${id}/complete`, { userId: 1 });
            if (res.success) fetchQuests();
        } catch (err) { console.error(err); }
    };

    if (loading) return <div className='p-20 text-center animate-pulse text-primary font-mono'>LOADING QUEST DATA...</div>;

    return (
        <div className='max-w-4xl mx-auto pb-20'>
            <div className='flex items-center justify-between mb-8'>
                <div className='space-y-1'>
                    <h1 className='text-3xl font-heading font-bold uppercase text-white flex items-center gap-3'>
                        <Swords className='text-primary' /> Active Quests
                    </h1>
                    <p className='text-muted-foreground'>Current system directives.</p>
                </div>
                <Button onClick={() => setCreateModalOpen(true)}>
                    <Plus className='w-4 h-4 mr-2' /> NEW QUEST
                </Button>
            </div>

            <div className='space-y-4'>
                <AnimatePresence>
                    {quests.length === 0 ? (
                        <div className='text-center py-20 border border-dashed border-muted rounded-sm'>
                            <p className='text-muted-foreground'>NO ACTIVE DIRECTIVES</p>
                        </div>
                    ) : quests.map((quest) => (
                        <QuestCard key={quest.id} quest={quest} onComplete={handleComplete} />
                    ))}
                </AnimatePresence>
            </div>

            <Modal isOpen={createModalOpen} onClose={() => setCreateModalOpen(false)} title='INITIATE NEW QUEST'>
                <form onSubmit={handleCreate} className='space-y-6'>
                    <div className='space-y-2'>
                        <label className='text-xs font-heading font-bold text-muted-foreground uppercase'>Title</label>
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='e.g. 100 Pushups' required />
                    </div>
                    <div className='space-y-2'>
                        <label className='text-xs font-heading font-bold text-muted-foreground uppercase'>Description</label>
                        <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Quest details...' />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                            <label className='text-xs font-heading font-bold text-muted-foreground uppercase'>Reward XP</label>
                            <Input type='number' value={rewardXp} onChange={(e) => setRewardXp(Number(e.target.value))} />
                        </div>
                        <div className='space-y-2'>
                            <label className='text-xs font-heading font-bold text-muted-foreground uppercase'>Type</label>
                            <select
                                className='flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value='DAILY'>DAILY</option>
                                <option value='WEEKLY'>WEEKLY</option>
                                <option value='MAIN'>MAIN</option>
                            </select>
                        </div>
                    </div>
                    <Button type='submit' className='w-full' size='lg'>CONFIRM OBJECTIVE</Button>
                </form>
            </Modal>
        </div>
    );
};
