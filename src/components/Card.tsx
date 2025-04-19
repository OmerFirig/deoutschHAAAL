import React from 'react';
import { motion } from 'framer-motion';
import { WordPair } from '../data/germanWords';

interface CardProps {
  word: WordPair;
  isFlipped: boolean;
  onFlip: () => void;
}

export const Card: React.FC<CardProps> = ({ word, isFlipped, onFlip }) => {
  return (
    <div 
      className="preserve-3d w-80 h-48 cursor-pointer" 
      onClick={onFlip}
      role="button"
      tabIndex={0}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.1 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full rounded-xl shadow-lg p-6 bg-white"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-3xl font-bold text-blue-600">{word.german}</p>
            <p className="text-sm text-gray-500 mt-2 capitalize">{word.category}</p>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full rounded-xl shadow-lg p-6 bg-red-600"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-3xl font-bold text-white">{word.english}</p>
            <p className="text-sm text-red-200 mt-2">Dönmek için tekrar tıkla</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}