"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

type Player = 'Player' | 'Sneh';
type CellValue = 'X' | 'O' | null;

const lines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

export default function GameSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [board, setBoard] = useState<CellValue[]>(Array(9).fill(null));
  const [firstPlayerThisRound, setFirstPlayerThisRound] = useState<Player>('Player');
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null);

  // Check for winner on every board change
  useEffect(() => {
    let currentWinner: Player | 'Draw' | null = null;
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        currentWinner = board[a] === 'X' ? 'Player' : 'Sneh';
        break;
      }
    }

    if (!currentWinner && !board.includes(null)) {
      currentWinner = 'Draw';
    }

    if (currentWinner) {
      setWinner(currentWinner);
    }
  }, [board]);

  // Sneh's AI Turn
  useEffect(() => {
    if (!isModalOpen || winner || isPlayerTurn) return;

    const timer = setTimeout(() => {
      let bestMove = -1;

      // 1. Can Sneh win?
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] === 'O' && board[b] === 'O' && !board[c]) { bestMove = c; break; }
        if (board[a] === 'O' && board[c] === 'O' && !board[b]) { bestMove = b; break; }
        if (board[b] === 'O' && board[c] === 'O' && !board[a]) { bestMove = a; break; }
      }

      // 2. Can Player win? Block them!
      if (bestMove === -1) {
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (board[a] === 'X' && board[b] === 'X' && !board[c]) { bestMove = c; break; }
          if (board[a] === 'X' && board[c] === 'X' && !board[b]) { bestMove = b; break; }
          if (board[b] === 'X' && board[c] === 'X' && !board[a]) { bestMove = a; break; }
        }
      }

      // 3. Take center
      if (bestMove === -1 && !board[4]) {
        bestMove = 4;
      }

      // 4. Random empty space
      if (bestMove === -1) {
        const emptyIndices = board.map((val, idx) => val === null ? idx : null).filter(val => val !== null) as number[];
        if (emptyIndices.length > 0) {
          bestMove = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        }
      }

      if (bestMove !== -1) {
        const newBoard = [...board];
        newBoard[bestMove] = 'O';
        setBoard(newBoard);
        setIsPlayerTurn(true);
      }
    }, 600); // 600ms delay to feel like "thinking"

    return () => clearTimeout(timer);
  }, [isPlayerTurn, board, winner, isModalOpen]);

  const handleCellClick = (index: number) => {
    if (!isPlayerTurn || winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsPlayerTurn(false);
  };

  const handleRestart = () => {
    let nextFirstPlayer = firstPlayerThisRound;
    if (winner === 'Player') nextFirstPlayer = 'Player';
    else if (winner === 'Sneh') nextFirstPlayer = 'Sneh';
    else if (winner === 'Draw') {
      nextFirstPlayer = firstPlayerThisRound === 'Player' ? 'Sneh' : 'Player';
    }

    setBoard(Array(9).fill(null));
    setWinner(null);
    setFirstPlayerThisRound(nextFirstPlayer);
    setIsPlayerTurn(nextFirstPlayer === 'Player');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Optional: Reset game state on close so it's fresh next time
    setTimeout(() => {
      setBoard(Array(9).fill(null));
      setWinner(null);
      setFirstPlayerThisRound('Player');
      setIsPlayerTurn(true);
    }, 300);
  };

  return (
    <section className="py-12 flex justify-center items-center w-full">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-mono font-bold text-lg md:text-xl rounded-full shadow-[0_10px_30px_rgba(99,102,241,0.4)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.6)] transition-all duration-300"
      >
        Got enough info! Now let's play a game 🎮
      </motion.button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
              className="bg-white dark:bg-slate-900 border border-purple-200 dark:border-slate-700 shadow-2xl rounded-3xl p-6 md:p-8 w-full max-w-[380px] flex flex-col items-center relative"
            >
              {/* Close Button for Mobile/Desktop */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-gray-200 transition-colors bg-slate-100 dark:bg-slate-800 p-2 rounded-full"
                aria-label="Close Game"
              >
                <AiOutlineClose size={20} />
              </button>

              <h2 className="text-3xl font-black font-mono text-slate-800 dark:text-white mb-2 mt-4">Tic Tac Toe</h2>
              <p className="text-slate-500 dark:text-gray-400 font-mono text-sm mb-6 text-center">
                Player (X) vs Sneh (O)<br/>
                <span className="text-xs text-purple-500 font-semibold">
                  {winner ? "Game Over!" : (isPlayerTurn ? "Your turn!" : "Sneh is thinking...")}
                </span>
              </p>

              {/* Game Board */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 w-full aspect-square">
                {board.map((cell, index) => (
                  <motion.button
                    key={index}
                    whileTap={{ scale: cell || winner || !isPlayerTurn ? 1 : 0.9 }}
                    onClick={() => handleCellClick(index)}
                    disabled={!!cell || !!winner || !isPlayerTurn}
                    className={`w-full h-full rounded-2xl text-5xl sm:text-6xl font-black font-mono flex items-center justify-center transition-colors
                      ${cell === 'X' ? 'text-purple-600 bg-purple-100 dark:bg-purple-900/30' : ''}
                      ${cell === 'O' ? 'text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30' : ''}
                      ${!cell ? 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer' : 'cursor-default'}
                    `}
                  >
                    {cell && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', bounce: 0.5 }}
                      >
                        {cell}
                      </motion.span>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Status & Restart */}
              <div className="h-16 flex flex-col items-center justify-center">
                {winner ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center"
                  >
                    <p className="text-2xl font-black font-mono text-slate-800 dark:text-white mb-3">
                      {winner === 'Draw' ? "It's a Draw! 🤝" : `${winner} Wins! 🏆`}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleRestart}
                      className="px-6 py-2 bg-slate-800 dark:bg-white text-white dark:text-slate-900 font-bold font-mono rounded-full"
                    >
                      Play Again
                    </motion.button>
                  </motion.div>
                ) : (
                  <p className="text-slate-400 font-mono text-sm text-center">
                    Winner goes first next round.<br/>Draw swaps the first player.
                  </p>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
