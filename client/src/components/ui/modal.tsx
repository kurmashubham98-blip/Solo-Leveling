import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, CheckCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  type?: 'default' | 'alert' | 'success'; 
}

export const Modal = ({ isOpen, onClose, title, children, type = 'default' }: ModalProps) => {
  if (!isOpen) return null;

  const borderColor = type === 'alert' ? 'border-danger' : type === 'success' ? 'border-success' : 'border-primary';
  const glowColor = type === 'alert' ? 'shadow-[0_0_20px_rgba(255,0,60,0.3)]' : type === 'success' ? 'shadow-[0_0_20px_rgba(0,255,148,0.3)]' : 'shadow-[0_0_20px_rgba(0,240,255,0.3)]';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className={cn(
            "relative w-full max-w-md bg-card-bg border rounded-sm overflow-hidden",
            borderColor,
            glowColor
          )}
        >
          {/* Header */}
          <div className={cn("px-6 py-4 border-b flex items-center justify-between", borderColor, "bg-white/5")}>
             <div className="flex items-center gap-3">
                {type === 'alert' && <AlertTriangle className="text-danger w-5 h-5" />}
                {type === 'success' && <CheckCircle className="text-success w-5 h-5" />}
                <h3 className="text-lg font-heading tracking-widest uppercase text-white">{title}</h3>
             </div>
             <button onClick={onClose} className="text-muted-foreground hover:text-white transition-colors">
               <X className="w-5 h-5" />
             </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
