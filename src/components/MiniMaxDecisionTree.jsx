import '../css/MiniMaxDecisionTree.css'
export default function MiniMaxDecisionTree(){
    return(
        <>
                <div className="section">
        <h3 className='text-2xl font-semibold mb-4 text-gray-900'>Plateau initial</h3>
        <div className="board-container">
            <div>
                <div className="player-turn computer">Tour de l'ordinateur (O)</div>
                <div className="board">
                    <div className="cell x">X</div>
                    <div className="cell o">O</div>
                    <div className="cell empty">_</div>
                    <div className="cell empty">_</div>
                    <div className="cell x">X</div>
                    <div className="cell empty">_</div>
                    <div className="cell empty">_</div>
                    <div className="cell empty">_</div>
                    <div className="cell o">O</div>
                </div>
                <div className="code-block">plateau = ['x','o','_','_','x','_','_','_','o']</div>
            </div>
        </div>
        
        <div className="move-explanation">
            <p>L'ordinateur va tester <strong>toutes les cases vides</strong> et évaluer les conséquences :</p>
            <p>Cases disponibles : 2, 3, 5, 6, 7 (indices 0-8)</p>
        </div>
    </div>
    
    <div className="section">
        <h3 className='text-2xl font-semibold mb-4 text-gray-900'>Exploration complète des options</h3>
        
        <div className="all-options">
            {/* <!-- Option 1: Case 2 --> */}
            <div className="option">
                <div className="player-turn computer">Option 1: Case 2</div>
                <div className="board">
                    <div className="cell x">X</div>
                    <div className="cell o">O</div>
                    <div className="cell o move-highlight">O</div>
                    <div className="cell empty">_</div>
                    <div className="cell x">X</div>
                    <div className="cell empty">_</div>
                    <div className="cell empty">_</div>
                    <div className="cell empty">_</div>
                    <div className="cell o">O</div>
                </div>
                
                <div className="tree-level">
                    <div className="player-turn human">Réponses possibles de X</div>
                    
                    <div className="board-container">
                        <div>
                            <div className="board">
                                <div className="cell x">X</div>
                                <div className="cell o">O</div>
                                <div className="cell o">O</div>
                                <div className="cell x move-highlight">X</div>
                                <div className="cell x">X</div>
                                <div className="cell empty">_</div>
                                <div className="cell empty">_</div>
                                <div className="cell empty">_</div>
                                <div className="cell o">O</div>
                            </div>
                            <div className="score positive">Score: +10</div>
                        </div>
                        
                        <div>
                            <div className="board">
                                <div className="cell x">X</div>
                                <div className="cell o">O</div>
                                <div className="cell o">O</div>
                                <div className="cell empty">_</div>
                                <div className="cell x">X</div>
                                <div className="cell x move-highlight">X</div>
                                <div className="cell empty">_</div>
                                <div className="cell empty">_</div>
                                <div className="cell o">O</div>
                            </div>
                            <div className="score neutral">Score: 0</div>
                        </div>
                    </div>
                    
                    <div className="move-explanation">
                        <p>Score final: <span className="score positive">max(10, 0) = 10</span></p>
                    </div>
                </div>
            </div>
            
            {/* <!-- Option 2: Case 3 --> */}
            <div className="option">
                <div className="player-turn computer">Option 2: Case 3</div>
                <div className="board">
                    <div className="cell x">X</div>
                    <div className="cell o">O</div>
                    <div className="cell empty">_</div>
                    <div className="cell o move-highlight">O</div>
                    <div className="cell x">X</div>
                    <div className="cell empty">_</div>
                    <div className="cell empty">_</div>
                    <div className="cell empty">_</div>
                    <div className="cell o">O</div>
                </div>
                
                <div className="tree-level">
                    <div className="player-turn human">Réponses possibles de X</div>
                    
                    <div className="board-container">
                        <div>
                            <div className="board">
                                <div className="cell x">X</div>
                                <div className="cell o">O</div>
                                <div className="cell x move-highlight">X</div>
                                <div className="cell o">O</div>
                                <div className="cell x">X</div>
                                <div className="cell empty">_</div>
                                <div className="cell empty">_</div>
                                <div className="cell empty">_</div>
                                <div className="cell o">O</div>
                            </div>
                            <div className="score negative">Score: -10</div>
                        </div>
                        
                        <div>
                            <div className="board">
                                <div className="cell x">X</div>
                                <div className="cell o">O</div>
                                <div className="cell empty">_</div>
                                <div className="cell o">O</div>
                                <div className="cell x">X</div>
                                <div className="cell x move-highlight">X</div>
                                <div className="cell empty">_</div>
                                <div className="cell empty">_</div>
                                <div className="cell o">O</div>
                            </div>
                            <div className="score neutral">Score: 0</div>
                        </div>
                    </div>
                    
                    <div className="move-explanation">
                        <p>Score final: <span className="score negative">max(-10, 0) = 0</span></p>
                    </div>
                </div>
            </div>
            
            {/* <!-- Option 3: Case 5 --> */}
            <div className="option">
                <div className="player-turn computer">Option 3: Case 5</div>
                <div className="board">
                    <div className="cell x">X</div>
                    <div className="cell o">O</div>
                    <div className="cell empty">_</div>
                    <div className="cell empty">_</div>
                    <div className="cell x">X</div>
                    <div className="cell o move-highlight">O</div>
                    <div className="cell empty">_</div>
                    <div className="cell empty">_</div>
                    <div className="cell o">O</div>
                </div>
                
                <div className="tree-level">
                    <div className="player-turn human">Réponses possibles de X</div>
                    
                    <div className="board-container">
                        <div>
                            <div className="board">
                                <div className="cell x">X</div>
                                <div className="cell o">O</div>
                                <div className="cell x move-highlight">X</div>
                                <div className="cell empty">_</div>
                                <div className="cell x">X</div>
                                <div className="cell o">O</div>
                                <div className="cell empty">_</div>
                                <div className="cell empty">_</div>
                                <div className="cell o">O</div>
                            </div>
                            <div className="score negative">Score: -10</div>
                        </div>
                        
                        <div>
                            <div className="board">
                                <div className="cell x">X</div>
                                <div className="cell o">O</div>
                                <div className="cell empty">_</div>
                                <div className="cell x move-highlight">X</div>
                                <div className="cell x">X</div>
                                <div className="cell o">O</div>
                                <div className="cell empty">_</div>
                                <div className="cell empty">_</div>
                                <div className="cell o">O</div>
                            </div>
                            <div className="score neutral">Score: 0</div>
                        </div>
                    </div>
                    
                    <div className="move-explanation">
                        <p>Score final: <span className="score negative">max(-10, 0) = 0</span></p>
                    </div>
                </div>
            </div>
            
            {/* <!-- Option 4: Case 6 --> */}
            <div className="option">
                <div className="player-turn computer">Option 4: Case 6</div>
                <div className="board">
                    <div className="cell x">X</div>
                    <div className="cell o">O</div>
                    <div className="cell empty">_</div>
                    <div className="cell empty">_</div>
                    <div className="cell x">X</div>
                    <div className="cell empty">_</div>
                    <div className="cell o move-highlight">O</div>
                    <div className="cell empty">_</div>
                    <div className="cell o">O</div>
                </div>
                
                <div className="tree-level">
                    <div className="player-turn human">Réponses possibles de X</div>
                    
                    <div className="board-container">
                        <div>
                            <div className="board">
                                <div className="cell x">X</div>
                                <div className="cell o">O</div>
                                <div className="cell x move-highlight">X</div>
                                <div className="cell empty">_</div>
                                <div className="cell x">X</div>
                                <div className="cell empty">_</div>
                                <div className="cell o">O</div>
                                <div className="cell empty">_</div>
                                <div className="cell o">O</div>
                            </div>
                            <div className="score negative">Score: -10</div>
                        </div>
                        
                        <div>
                            <div className="board">
                                <div className="cell x">X</div>
                                <div className="cell o">O</div>
                                <div className="cell empty">_</div>
                                <div className="cell x move-highlight">X</div>
                                <div className="cell x">X</div>
                                <div className="cell empty">_</div>
                                <div className="cell o">O</div>
                                <div className="cell empty">_</div>
                                <div className="cell o">O</div>
                            </div>
                            <div className="score positive">Score: +10</div>
                        </div>
                    </div>
                    
                    <div className="move-explanation">
                        <p>Score final: <span className="score positive">max(-10, 10) = 10</span></p>
                    </div>
                </div>
            </div>
            
            {/* <!-- Option 5: Case 7 --> */}
            <div className="option">
                <div className="player-turn computer">Option 5: Case 7</div>
                <div className="board">
                    <div className="cell x">X</div>
                    <div className="cell o">O</div>
                    <div className="cell empty">_</div>
                    <div className="cell empty">_</div>
                    <div className="cell x">X</div>
                    <div className="cell empty">_</div>
                    <div className="cell empty">_</div>
                    <div className="cell o move-highlight">O</div>
                    <div className="cell o">O</div>
                </div>
                
                <div className="tree-level">
                    <div className="player-turn human">Réponses possibles de X</div>
                    
                    <div className="board-container">
                        <div>
                            <div className="board">
                                <div className="cell x">X</div>
                                <div className="cell o">O</div>
                                <div className="cell x move-highlight">X</div>
                                <div className="cell empty">_</div>
                                <div className="cell x">X</div>
                                <div className="cell empty">_</div>
                                <div className="cell empty">_</div>
                                <div className="cell o">O</div>
                                <div className="cell o">O</div>
                            </div>
                            <div className="score negative">Score: -10</div>
                        </div>
                        
                        <div>
                            <div className="board">
                                <div className="cell x">X</div>
                                <div className="cell o">O</div>
                                <div className="cell empty">_</div>
                                <div className="cell x move-highlight">X</div>
                                <div className="cell x">X</div>
                                <div className="cell empty">_</div>
                                <div className="cell empty">_</div>
                                <div className="cell o">O</div>
                                <div className="cell o">O</div>
                            </div>
                            <div className="score positive">Score: +10</div>
                        </div>
                    </div>
                    
                    <div className="move-explanation">
                        <p>Score final: <span className="score positive">max(-10, 10) = 10</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="section" style={{ backgroundColor: "white" }}>

        <h3 className='text-2xl font-semibold mb-4 text-gray-900'>Décision Finale</h3>
        
        <div className="move-explanation">
            <p>L'ordinateur compare toutes les options et choisit celle avec le meilleur score garanti :</p>
            
<div className="overflow-x-auto mt-4">
  <table className="w-full border border-gray-300 border-collapse text-sm min-w-[600px]">
    <thead className="bg-gray-100">
      <tr>
        <th className="border border-gray-300 px-4 py-2 text-left">Option</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Meilleur score</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Pire cas</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Analyse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Case 2</td>
        <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">+10</td>
        <td className="border border-gray-300 px-4 py-2 text-gray-600">0</td>
        <td className="border border-gray-300 px-4 py-2">Peut gagner si humain fait une erreur, sinon match nul</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Case 3</td>
        <td className="border border-gray-300 px-4 py-2 text-gray-600">0</td>
        <td className="border border-gray-300 px-4 py-2 text-red-600 font-semibold">-10</td>
        <td className="border border-gray-300 px-4 py-2">Risque de perdre si humain joue parfaitement</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Case 5</td>
        <td className="border border-gray-300 px-4 py-2 text-gray-600">0</td>
        <td className="border border-gray-300 px-4 py-2 text-red-600 font-semibold">-10</td>
        <td className="border border-gray-300 px-4 py-2">Risque de perdre si humain joue parfaitement</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Case 6</td>
        <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">+10</td>
        <td className="border border-gray-300 px-4 py-2 text-red-600 font-semibold">-10</td>
        <td className="border border-gray-300 px-4 py-2">Opportunité de gagner mais risque de perdre</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Case 7</td>
        <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">+10</td>
        <td className="border border-gray-300 px-4 py-2 text-red-600 font-semibold">-10</td>
        <td className="border border-gray-300 px-4 py-2">Opportunité de gagner mais risque de perdre</td>
      </tr>
    </tbody>
  </table>
</div>


            
            <p className='mt-3'><strong>Meilleur choix :</strong> Jouer en case 2 qui garantit au moins un match nul (score 0) avec possibilité de victoire si l'humain fait une erreur.</p>
        </div>
        
        <div className="board-container">
            <div>
                <div className="player-turn computer">Meilleur coup</div>
                <div className="board">
                    <div className="cell x">X</div>
                    <div className="cell o">O</div>
                    <div className="cell o move-highlight">O</div>
                    <div className="cell empty">_</div>
                    <div className="cell x">X</div>
                    <div className="cell empty">_</div>
                    <div className="cell empty">_</div>
                    <div className="cell empty">_</div>
                    <div className="cell o">O</div>
                </div>
                <div className="score neutral">Score garanti: 0</div>
            </div>
        </div>
    </div>
        </>
    )
}