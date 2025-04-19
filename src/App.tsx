import React, { useState } from 'react';
import { Languages, ArrowRight, Repeat, AlignCenter } from 'lucide-react';
import { Card } from './components/Card';
import { germanWords } from './data/germanWords';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [hasSeenAnswer, setHasSeenAnswer] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % germanWords.length);
    setAnswer('');
    setMessage('');
    setHasSeenAnswer(false);
  };

  const handleFlip = () => {
    if (isFlipped && hasSeenAnswer) {
      handleNext();
    } else {
      setIsFlipped(!isFlipped);
      if (!isFlipped) {
        setHasSeenAnswer(true);
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setAnswer('');
    setMessage('');
    setHasSeenAnswer(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isCorrect = answer.toLowerCase().trim() === germanWords[currentIndex].english.toLowerCase();
    setMessage(isCorrect ? '✅ Correct!' : '❌ Wrong! Try again');
    
    if (isCorrect) {
      setTimeout(() => {
        handleNext();
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center py-12">
      <div className="flex items-center gap-2 mb-8" style={{marginBottom:"5rem"}}>
        <Languages className="w-8 h-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">Almanca Kart Oynu</h1>
      </div>

      <div className="bg-white/50 rounded-2xl p-8 backdrop-blur-sm flex" style={{alignItems:"center",flexDirection:"column"}}>
        <div className="mb-4">
          <p className="text-gray-600">{currentIndex + 1}/{germanWords.length}</p>
        </div>

        <Card
          word={germanWords[currentIndex]}
          isFlipped={isFlipped}
          onFlip={handleFlip}
        />

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="answer" className="text-gray-700">
              Türkçe Anlamını Yazın:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Cevabınızı Yazın..."
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                Doğrula
              </button>
            </div>
          </div>
        </form>

        {message && (
          <div className={`mt-4 text-center text-lg font-semibold ${
            message.includes('Correct') ? 'text-green-600' : 'text-red-600'
          }`}>
            {message}
          </div>
        )}

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={handleRestart}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            <Repeat className="w-4 h-4" />
            Sıfırla
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Atla
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;