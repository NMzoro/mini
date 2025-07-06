import { useNavigate, useLocation } from "react-router-dom";
import BeforeAfter from "../components/BeforeAfter";
import MiniMaxDecisionTree from "./MiniMaxDecisionTree";
import { useState, useEffect } from "react";

const AlgorMinMax = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pages = ['/', '/objectif', '/logique', '/algor/minmax','/flux','/jeu'];
  const currentIndex = pages.indexOf(location.pathname);

  const [showTree, setShowTree] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleToggleTree = () => {
    setShowTree(prev => !prev);
  };

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

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pb-8 pt-12">
        {/* Header */}
        <div className="text-center pb-8 px-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center text-3xl">
            🤖
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Algorithme MiniMax
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            L'algorithme qui permet à l'IA de jouer de manière optimale en explorant tous les coups possibles
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-8 px-6 pb-8">
          {/* Principe de base card */}
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Principe de base</h2>
            <div className="text-gray-700 space-y-3">
              <p>
                L'algorithme MiniMax explore tous les coups possibles alternativement pour les deux joueurs :
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5">
                <li>L'ordinateur ('O') cherche à <span className="font-medium">maximiser</span> son score</li>
                <li>Le joueur humain ('X') cherche à <span className="font-medium">minimiser</span> le score</li>
              </ul>
              <div className="bg-gray-50 p-3 rounded-lg mt-3 text-center">
                <p>L'IA (O) analyse chaque case vide et simule tous les coups possibles jusqu'à la fin de la partie.</p>
              </div>
              <div className="flex justify-center mt-4">
                <button 
                  onClick={handleToggleTree}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200"
                >
                  {showTree ? "Masquer l'arbre" : "Voir l'arbre de décision"}
                </button>
              </div>
            </div>
          </div>

          {/* Decision Tree */}
          {isMounted && (
            <div
              className={`transition-all duration-300 ease-in-out ${
                showTree ? "opacity-100 max-h-[2000px]" : "opacity-0 max-h-0 overflow-hidden"
              }`}
            >
              <MiniMaxDecisionTree />
            </div>
          )}

          {/* Code section */}
<div className={`${showTree ? "hidden" : ""} p-6 bg-white rounded-lg border border-gray-200 shadow-sm`}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Code simplifié en Python</h2>
            <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto max-w-full">
              <pre className="text-sm text-gray-800 font-mono h-80 overflow-y-auto">
                <code className="whitespace-pre">
{`# Définition d'une case vide sur le plateau
EMPTY = '_'

# Fonction pour afficher le plateau de façon lisible
def afficher_plateau(plateau):
    for i in range(0, 9, 3):
        print(plateau[i], plateau[i+1], plateau[i+2])
    print()

# Fonction pour vérifier si un joueur a gagné
def ligne_gagnante(plateau, joueur):
    lignes = [
        [0,1,2], [3,4,5], [6,7,8],    # lignes horizontales
        [0,3,6], [1,4,7], [2,5,8],    # colonnes verticales
        [0,4,8], [2,4,6]              # diagonales
    ]
    for ligne in lignes:
        if plateau[ligne[0]] == joueur and plateau[ligne[1]] == joueur and plateau[ligne[2]] == joueur:
            return True
    return False

# Fonction pour vérifier si la partie est nulle (match nul)
def match_nul(plateau):
    return EMPTY not in plateau and not ligne_gagnante(plateau, 'x') and not ligne_gagnante(plateau, 'o')

# Fonction pour évaluer la position actuelle du plateau
def evaluer_position(plateau):
    if ligne_gagnante(plateau, 'o'):
        return 10   # L'ordinateur a gagné, score positif
    elif ligne_gagnante(plateau, 'x'):
        return -10  # Le joueur a gagné, score négatif
    else:
        return 0    # Match nul ou partie en cours

# Algorithme MiniMax qui simule tous les coups possibles
def minimax(plateau, joueur):
    score = evaluer_position(plateau)

    # Si la partie est terminée (victoire ou match nul)
    if score == 10 or score == -10:
        return score
    if match_nul(plateau):
        return 0

    if joueur == 'o':  # Tour de l'ordinateur : maximiser le score
        meilleur_score = -1000
        for i in range(9):
            if plateau[i] == EMPTY:
                plateau[i] = joueur
                score = minimax(plateau, 'x')  # Tour du joueur humain ensuite
                plateau[i] = EMPTY
                meilleur_score = max(meilleur_score, score)
        return meilleur_score
    else:  # Tour du joueur humain : minimiser le score
        meilleur_score = 1000
        for i in range(9):
            if plateau[i] == EMPTY:
                plateau[i] = joueur
                score = minimax(plateau, 'o')  # Tour de l'ordinateur ensuite
                plateau[i] = EMPTY
                meilleur_score = min(meilleur_score, score)
        return meilleur_score

# Fonction pour trouver le meilleur coup pour l'ordinateur 'o'
def meilleur_mouvement(plateau):
    meilleur_score = -1000
    meilleur_coup = -1
    for i in range(9):
        if plateau[i] == EMPTY:
            plateau[i] = 'o'
            score = minimax(plateau, 'x')
            plateau[i] = EMPTY
            if score > meilleur_score:
                meilleur_score = score
                meilleur_coup = i
    return meilleur_coup

# Fonction principale du jeu
def jouer():
    plateau = [EMPTY]*9  # Plateau vide au départ
    joueur_courant = 'x'  # Le joueur humain commence

    while True:
        afficher_plateau(plateau)

        # Vérifier si un joueur a gagné
        if ligne_gagnante(plateau, 'x'):
            print("Félicitations ! Tu as gagné la partie.")
            break
        if ligne_gagnante(plateau, 'o'):
            print("L'ordinateur a gagné la partie, essaie encore.")
            break
        if match_nul(plateau):
            print("Match nul.")
            break

        if joueur_courant == 'x':
            mouvement = input("Entre un numéro de case de 0 à 8 : ")
            # Vérifier que l'entrée est valide
            if not mouvement.isdigit() or int(mouvement) not in range(9):
                print("Entrée invalide, entre un nombre entre 0 et 8.")
                continue
            mouvement = int(mouvement)
            if plateau[mouvement] != EMPTY:
                print("Case déjà prise, choisis-en une autre.")
                continue
            plateau[mouvement] = 'x'
            joueur_courant = 'o'  # C'est au tour de l'ordinateur
        else:
            print("L'ordinateur joue...")
            mouvement = meilleur_mouvement(plateau)
            plateau[mouvement] = 'o'
            joueur_courant = 'x'  # C'est au tour du joueur humain

# Lancer la partie
jouer()
`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <span className={`${showTree ? "hidden" : ""}`}>
        <BeforeAfter 
          handlePrev={handlePrev} 
          currentIndex={currentIndex} 
          handleNext={handleNext} 
          pages={pages}
        />
        </span>
      </div>
    </div>
  );
};

export default AlgorMinMax;