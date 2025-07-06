import React, { useState, useEffect } from 'react';
import { Download, BarChart3, Gamepad2, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import BeforeAfter from './BeforeAfter';

const EMPTY = '';

const MorpionGame = () => {
  const [board, setBoard] = useState(Array(9).fill(EMPTY));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameHistory, setGameHistory] = useState([]);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [gameStatus, setGameStatus] = useState('En cours');
  const [aiThinking, setAiThinking] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [showNameInput, setShowNameInput] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const pages = ['/', '/objectif', '/logique', '/algor/minmax','/flux','/jeu'];
  const currentIndex = pages.indexOf(location.pathname);

  // Vérifie si un nom est déjà stocké dans le localStorage au chargement
  useEffect(() => {
    const storedName = localStorage.getItem('ticTacToePlayerName');
    if (storedName) {
      setPlayerName(storedName);
      setShowNameInput(false);
    }
  }, []);

  const handleNext = () => {
    if (currentIndex < pages.length - 1) {
      navigate(pages[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(pages[currentIndex - 1]);
    }
  };

  // Gère la soumission du nom du joueur
  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (playerName.trim()) {
      localStorage.setItem('ticTacToePlayerName', playerName.trim());
      setTimeout(() => {
        localStorage.removeItem('ticTacToePlayerName');
      }, 60000);
      setShowNameInput(false);
    }
  };

  // Vérifie si un joueur a gagné
  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // lignes horizontales
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // colonnes verticales
      [0, 4, 8], [2, 4, 6]             // diagonales
    ];
    
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  // Vérifie si c'est un match nul
  const checkDraw = (board) => {
    return board.every(cell => cell !== EMPTY) && !checkWinner(board);
  };

  // Évalue la position actuelle du plateau
  const evaluatePosition = (board) => {
    const winner = checkWinner(board);
    if (winner === 'O') return 10;
    if (winner === 'X') return -10;
    return 0;
  };

  // Implémentation de l'algorithme MiniMax
  const minimax = (board, depth, isMaximizing) => {
    const score = evaluatePosition(board);
    
    // Si le jeu est terminé, retourne le score
    if (score === 10 || score === -10) return score;
    if (checkDraw(board)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === EMPTY) {
          board[i] = 'O';
          bestScore = Math.max(bestScore, minimax(board, depth + 1, false));
          board[i] = EMPTY;
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === EMPTY) {
          board[i] = 'X';
          bestScore = Math.min(bestScore, minimax(board, depth + 1, true));
          board[i] = EMPTY;
        }
      }
      return bestScore;
    }
  };

  // Trouve le meilleur mouvement pour l'IA
  const findBestMove = () => {
    let bestScore = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < 9; i++) {
      if (board[i] === EMPTY) {
        const newBoard = [...board];
        newBoard[i] = 'O';
        const score = minimax(newBoard, 0, false);
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    return bestMove;
  };

  // Gère le coup de l'IA
  const makeAiMove = () => {
    if (checkWinner(board) || checkDraw(board)) return;

    setAiThinking(true);
    
    // Petit délai pour simuler la "réflexion" de l'IA
    setTimeout(() => {
      const bestMove = findBestMove();
      if (bestMove !== -1) {
        const newBoard = [...board];
        newBoard[bestMove] = 'O';
        setBoard(newBoard);
        
        const newMove = {
          player: 'O',
          position: bestMove,
          board: [...newBoard],
          evaluation: evaluatePosition(newBoard),
          strategy: getStrategyHint(newBoard, bestMove)
        };
        
        setGameHistory([...gameHistory, newMove]);
        setCurrentPlayer('X');
        updateGameStatus(newBoard);
      }
      setAiThinking(false);
    }, 500);
  };

  // Met à jour le statut du jeu
  const updateGameStatus = (board) => {
    const winner = checkWinner(board);
    if (winner) {
      setGameStatus(`Victoire de ${winner === 'X' ? playerName + ' (X)' : 'IA (O)'}`);
    } else if (checkDraw(board)) {
      setGameStatus('Match nul');
    } else {
      setGameStatus('En cours');
    }
  };

  // Donne un indice sur la stratégie de l'IA
  const getStrategyHint = (board, move) => {
    const center = 4;
    const corners = [0, 2, 6, 8];
    const edges = [1, 3, 5, 7];
    
    if (move === center) return "Contrôle du centre - stratégie optimale";
    if (corners.includes(move)) return "Prise d'un coin - position stratégique";
    if (edges.includes(move)) return "Prise d'un bord - généralement moins optimal";
    
    // Vérifie si l'IA a bloqué le joueur
    const tempBoard = [...board];
    tempBoard[move] = EMPTY;
    for (let i = 0; i < 9; i++) {
      if (tempBoard[i] === EMPTY) {
        tempBoard[i] = 'X';
        if (checkWinner(tempBoard)) {
          return "Blocage du joueur - empêche une victoire immédiate";
        }
        tempBoard[i] = EMPTY;
      }
    }
    
    return "Développement de la position";
  };

  // Gère le clic sur une case
  const handleCellClick = (index) => {
    if (board[index] !== EMPTY || currentPlayer !== 'X' || checkWinner(board) || checkDraw(board)) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    
    const newMove = {
      player: 'X',
      position: index,
      board: [...newBoard],
      evaluation: evaluatePosition(newBoard),
      strategy: "Coup du joueur"
    };
    
    setGameHistory([...gameHistory, newMove]);
    setCurrentPlayer('O');
    updateGameStatus(newBoard);
  };

  // Réinitialise le jeu
  const resetGame = () => {
    setBoard(Array(9).fill(EMPTY));
    setCurrentPlayer('X');
    setGameHistory([]);
    setGameStatus('En cours');
  };

  // Effet pour gérer le tour de l'IA
  useEffect(() => {
    if (currentPlayer === 'O' && !checkWinner(board) && !checkDraw(board)) {
      makeAiMove();
    }
  }, [currentPlayer, board]);

  const winner = checkWinner(board);
  const isDraw = checkDraw(board);

  // Modal pour saisir le nom du joueur
  if (showNameInput) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Avant de commencer</h2>
            <p className="text-gray-600 mt-2">Entrez votre nom pour personnaliser l'expérience</p>
          </div>
          
          <form onSubmit={handleNameSubmit}>
            <div className="mb-6">
              <label htmlFor="playerName" className="block text-sm font-medium text-gray-700 mb-2">
                Votre nom
              </label>
              <input
                type="text"
                id="playerName"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ex: Othmane"
                required
                autoFocus
              />
              <p className="mt-2 text-xs text-gray-500">
                Votre nom sera stocké pendant 1 minute.
              </p>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Commencer à jouer
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Interface principale du jeu
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center text-3xl">
              🕹️
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Plateau de jeu interactif</h1>
          <p className="text-gray-600">
            {playerName ? `${playerName} contre l'IA` : 'Affrontez l\'IA avec l\'algorithme MiniMax'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Game Board Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Jeu de Morpion</h2>
              <div className="flex items-center gap-2 text-gray-600">
                <span>Tour actuel :</span>
                <span className="font-bold text-blue-600">
                  {currentPlayer === 'X' ? `${playerName || 'Joueur'} (X)` : 'IA (O)'}
                  {aiThinking && currentPlayer === 'O' && ' (réfléchit...)'}
                </span>
              </div>
              <div className="mt-2">
                <span className="font-medium">Statut : </span>
                <span className={`font-bold ${
                  gameStatus.includes('Victoire') ? 'text-green-600' : 
                  gameStatus.includes('Match nul') ? 'text-yellow-600' : 
                  'text-blue-600'
                }`}>
                  {gameStatus}
                </span>
              </div>
            </div>

            {/* Game Board */}
            <div className="grid grid-cols-3 gap-2 mb-6 max-w-xs mx-auto">
              {board.map((cell, index) => (
                <button
                  key={index}
                  onClick={() => handleCellClick(index)}
                  className={`w-20 h-20 border-2 rounded-lg flex items-center justify-center text-3xl font-bold transition-colors duration-200 disabled:cursor-not-allowed
                    ${
                      cell === 'X' ? 'bg-blue-100 text-blue-600 border-blue-300' :
                      cell === 'O' ? 'bg-red-100 text-red-600 border-red-300' :
                      'bg-gray-50 border-gray-200 text-gray-400 hover:bg-gray-100'
                    }
                    ${winner && cell === winner && 'bg-green-100 border-green-400'}
                  `}
                  disabled={cell !== EMPTY || currentPlayer !== 'X' || winner || isDraw || aiThinking}
                >
                  {cell || index + 1}
                </button>
              ))}
            </div>

            {/* Game Controls */}
            <div className="text-center">
              <button
                onClick={resetGame}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Nouvelle partie
              </button>
            </div>
          </div>

          {/* Analysis Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Analyse des coups</h2>
              <button
                onClick={() => setShowAnalysis(!showAnalysis)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
              >
                {showAnalysis ? 'Masquer' : 'Afficher'}
              </button>
            </div>

            {showAnalysis && (
              <>
                {/* Move History */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-800">Historique des mouvements</span>
                  </div>

                  {gameHistory.length > 0 ? (
                    <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                      {gameHistory.map((move, index) => (
                        <div key={index} className={`p-3 rounded-lg border ${
                          move.player === 'X' ? 'border-blue-200 bg-blue-50' : 'border-red-200 bg-red-50'
                        }`}>
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="font-medium">
                                {move.player === 'X' ? `${playerName || 'Joueur'} (X)` : 'IA (O)'} - 
                              </span>
                              <span className="text-sm ml-2">Case {move.position + 1}</span>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded ${
                              move.evaluation > 0 ? 'bg-green-100 text-green-800' :
                              move.evaluation < 0 ? 'bg-red-100 text-red-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              Éval: {move.evaluation}
                            </span>
                          </div>
                          {move.strategy && (
                            <div className="mt-1 text-xs text-gray-600">
                              <span className="font-medium">Stratégie:</span> {move.strategy}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Gamepad2 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                      <p>Commencez à jouer pour voir l'analyse des coups</p>
                    </div>
                  )}
                </div>

                {/* Current Board Evaluation */}
                <div className="border-t pt-4">
                  <h3 className="font-medium text-gray-800 mb-3">Évaluation actuelle</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Score MiniMax:</span>
                      <span className="font-medium">{evaluatePosition(board)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Coups joués:</span>
                      <span className="font-medium">{gameHistory.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Prochain joueur:</span>
                      <span className="font-medium">{currentPlayer === 'X' ? `${playerName || 'Joueur'} (X)` : 'IA (O)'}</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Navigation */}
        <BeforeAfter 
          handlePrev={handlePrev} 
          currentIndex={currentIndex} 
          handleNext={handleNext} 
          pages={pages}
        />
      </div>
    </div>
  );
};

export default MorpionGame;