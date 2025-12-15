import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export const Tabs = ({ activeTab, onTabChange, tabs, className }: { activeTab: string, onTabChange: (id: string) => void, tabs: { id: string, label: string }[], className?: string }) => {
    return (
        <div className={cn("flex space-x-1 bg-muted/20 p-1 rounded-sm", className)}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={cn(
                        "relative px-4 py-1.5 text-sm font-medium font-heading uppercase tracking-wider transition-colors outline-none",
                        activeTab === tab.id ? "text-background" : "text-text-muted hover:text-text-primary"
                    )}
                >
                    {activeTab === tab.id && (
                        <motion.div
                            layoutId="active-tab"
                            className="absolute inset-0 bg-primary shadow-glow-blue rounded-[2px]"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                </button>
            ))}
        </div>
    );
};
