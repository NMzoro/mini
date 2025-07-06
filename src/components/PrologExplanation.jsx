import React, { useState } from 'react';

const PrologExplanation = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const prologCode = `% Base de connaissances Prolog pour Tic-Tac-Toe
% Définition du plateau de jeu
plateau([_, _, _, _, _, _, _, _, _]).

% Définition des lignes gagnantes
ligne_gagnante([X, X, X, _, _, _, _, _, _], X) :- X \\= _.
ligne_gagnante([_, _, _, X, X, X, _, _, _], X) :- X \\= _.
ligne_gagnante([_, _, _, _, _, _, X, X, X], X) :- X \\= _.
ligne_gagnante([X, _, _, X, _, _, X, _, _], X) :- X \\= _.
ligne_gagnante([_, X, _, _, X, _, _, X, _], X) :- X \\= _.
ligne_gagnante([_, _, X, _, _, X, _, _, X], X) :- X \\= _.
ligne_gagnante([X, _, _, _, X, _, _, _, X], X) :- X \\= _.
ligne_gagnante([_, _, X, _, X, _, X, _, _], X) :- X \\= _.

% Prédicat pour vérifier une victoire
victoire(Plateau, Joueur) :-
    ligne_gagnante(Plateau, Joueur).

% Prédicat pour vérifier un match nul
match_nul(Plateau) :-
    \\+ member(_, Plateau),
    \\+ victoire(Plateau, x),
    \\+ victoire(Plateau, o).

% Mouvement valide
mouvement_valide(Plateau, Position) :-
    nth0(Position, Plateau, _),
    var(Plateau).

% Effectuer un mouvement
effectuer_mouvement(Plateau, Position, Joueur, NouveauPlateau) :-
    mouvement_valide(Plateau, Position),
    nth0(Position, Plateau, Joueur, NouveauPlateau).

% Évaluation de position
evaluer_position(Plateau, 10) :- victoire(Plateau, o).
evaluer_position(Plateau, -10) :- victoire(Plateau, x).
evaluer_position(Plateau, 0) :- match_nul(Plateau).`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(prologCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback pour les anciens navigateurs
      const textarea = document.createElement('textarea');
      textarea.value = prologCode;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
      {/* Carte explicative à gauche */}
      <div className="lg:w-1/2 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">🔍</span>
            Base de connaissances définissant les règles du jeu
          </h2>
          
          {/* Navigation */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`px-4 py-2 font-medium ${activeTab === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab(0)}
            >
              Structure
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 1 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab(1)}
            >
              Victoire
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 2 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab(2)}
            >
              Logique
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="px-6 pb-6">
          {activeTab === 0 && (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center gap-2">
                <div className="w-2 h-6 bg-blue-400 rounded"></div>
                Structure du Plateau
              </h3>
              <p className="text-gray-700 mb-3">
                Le plateau est représenté par une liste de 9 éléments, chaque élément correspondant à une case. Si une case contient un underscore <span className='font-mono bg-gray-100 px-1.5 py-0.5 rounded border border-gray-300 text-sm'>_</span>, cela signifie qu'elle est vide au départ :
              </p>
              <div className="grid grid-cols-3 gap-2 mb-3 text-center">
                {[0,1,2,3,4,5,6,7,8].map(pos => (
                  <div key={pos} className="bg-white p-2 rounded border border-gray-300 text-sm shadow-xs">
                    Case {pos}
                  </div>
                ))}
              </div>
              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <code className="text-green-800 font-mono text-sm">
                  plateau([_,_,_,_,_,_,_,_,_])
                </code>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center gap-2">
                <div className="w-2 h-6 bg-blue-400 rounded"></div>
                Conditions de Victoire
              </h3>
              <p className="text-gray-700 mb-2 font-medium">
                Explication de la règle :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-3">
                <li>Si les cases numéro <span className="font-mono bg-gray-100 px-1 rounded">0</span>, <span className="font-mono bg-gray-100 px-1 rounded">1</span> et <span className="font-mono bg-gray-100 px-1 rounded">2</span> contiennent la même valeur <strong>(X ou O)</strong></li>
                <li>Et qu'elles ne sont pas vides</li>
                <li>Alors le joueur correspondant a gagné</li>
              </ul>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded mb-2">
                <code className="text-yellow-800 font-mono text-xs">
                  ligne_gagnante([X, X, X, _, _, _, _, _, _], X):- X \= _.
                </code>
              </div>
              <p className="text-gray-700 text-sm">
                Cette règle est déclinée en 8 variantes pour couvrir toutes les possibilités de victoire (3 lignes, 3 colonnes, 2 diagonales).
              </p>
            </div>
          )}

          {activeTab === 2 && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center gap-2">
                  <div className="w-2 h-6 bg-blue-400 rounded"></div>
                  Fonctions Principales
                </h3>
                
                <div className="grid gap-4">
                  {/* Victoire */}
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-xs">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-mono text-purple-600 mb-1">victoire/2</h4>
                        <p className="text-gray-700 text-sm">Vérifie si un joueur a aligné 3 symboles identiques</p>
                        <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                          <code className="text-gray-700 font-mono text-xs">
                            victoire(Plateau, Joueur) :- ligne_gagnante(Plateau, Joueur).
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Match Nul */}
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-xs">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-mono text-purple-600 mb-1">match_nul/1</h4>
                        <p className="text-gray-700 text-sm">Détecte quand toutes les cases sont remplies sans vainqueur</p>
                        <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                          <code className="text-gray-700 font-mono text-xs">
                            match_nul(Plateau) :- 
                            <div className="space-y-2 ml-6">
                            <div>\+ member(_, Plateau), </div>
                            <div>\+ victoire(Plateau, x), </div>
                            <div>\+ victoire(Plateau, o).</div>
                            </div>

                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mouvement Valide */}
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-xs">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-mono text-purple-600 mb-1">mouvement_valide/2</h4>
                        <p className="text-gray-700 text-sm">Contrôle qu'un coup est jouable sur une position donnée</p>
                        <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                          <code className="text-gray-700 font-mono text-xs">
                            mouvement_valide(Plateau, Position) :- nth0(Position, Plateau, _), var(Plateau).
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Evaluation Position */}
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-xs">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-mono text-purple-600 mb-1">evaluer_position/2</h4>
                        <p className="text-gray-700 text-sm">Attribue un score à l'état actuel du jeu</p>
                        <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                          <div className="bg-green-50 p-2 rounded border border-green-200 text-center">
                            <div className="text-green-600 font-bold">10</div>
                            <div className="text-green-700">Victoire O</div>
                          </div>
                          <div className="bg-red-50 p-2 rounded border border-red-200 text-center">
                            <div className="text-red-600 font-bold">-10</div>
                            <div className="text-red-700">Victoire X</div>
                          </div>
                          <div className="bg-gray-100 p-2 rounded border border-gray-300 text-center">
                            <div className="text-gray-600 font-bold">0</div>
                            <div className="text-gray-700">Match nul</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Code à droite avec fonction de copie */}
      <div className="lg:w-1/2">
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="flex justify-between items-center bg-gray-700 px-4 py-3">
            <span className="text-gray-300 font-mono text-sm">base_de_connaissances.pl</span>
            <button 
              onClick={copyToClipboard}
              className="flex items-center gap-1 text-gray-300 hover:text-white text-sm"
            >
              {copied ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Copié!
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                  Copier le code
                </>
              )}
            </button>
          </div>
          <pre className="p-4 overflow-auto max-h-[500px]">
            <code className="text-gray-300 font-mono text-sm">
              {prologCode}
            </code>
          </pre>
        </div>

        {/* Exemple d'utilisation */}
        <div className="mt-4 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Exemple d'utilisation</h3>
          <div className="bg-gray-50 p-3 rounded font-mono text-sm overflow-auto">
            <p className="text-gray-700">% Initialiser un plateau vide</p>
            <p className="text-blue-600">?- plateau(Plateau).</p>
            <p className="text-gray-700">% Vérifier une victoire</p>
            <p className="text-blue-600">?- victoire([x,x,x,o,o,_,_,_,_], x).</p>
            <p className="text-green-600">true.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrologExplanation;