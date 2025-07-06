import React, { useEffect, useState, useCallback } from "react";

// Fonction JS pour générer l'arbre minimax simple (uniquement pour affichage)
function generateMinimaxTree(board, player) {
  const opponent = player === "x" ? "o" : "x";

  function checkVictory(b, p) {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6],
    ];
    return lines.some(line => line.every(i => b[i] === p));
  }

  function checkDraw(b) {
    return b.every(c => c !== null);
  }

  function evaluer(b) {
    if (checkVictory(b, "o")) return 10;
    if (checkVictory(b, "x")) return -10;
    if (checkDraw(b)) return 0;
    return null;
  }

  function recurse(b, currentPlayer) {
    const score = evaluer(b);
    if (score !== null) {
      return { name: `Score: ${score}`, children: [] };
    }

    const children = [];
    for(let i=0; i<9; i++) {
      if(b[i] === null) {
        const newBoard = b.slice();
        newBoard[i] = currentPlayer;
        children.push(recurse(newBoard, currentPlayer === "x" ? "o" : "x"));
      }
    }

    return { name: `Joueur: ${currentPlayer}`, children };
  }

  return recurse(board, player);
}

export default function TicTacToePyodide() {
  const [pyodide, setPyodide] = useState(null);
  const [message, setMessage] = useState("Chargement de Python...");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(true);
  const [tree, setTree] = useState(null);

  useEffect(() => {
    async function loadPyodideAndPackages() {
      const pyodideInstance = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/",
      });
      setPyodide(pyodideInstance);
      setMessage("Python chargé, à toi de jouer !");
    }
    loadPyodideAndPackages();
  }, []);

  // Calcule le coup ordi avec Python (Pyodide)
  async function playComputerMove(currentBoard) {
    if (!pyodide) return null;
    pyodide.globals.set("plateau", currentBoard);

    const codePython = `
def victoire(plateau, joueur):
    lignes = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
    for ligne in lignes:
        if all(plateau[pos] == joueur for pos in ligne):
            return True
    return False

def match_nul(plateau):
    return all(c is not None for c in plateau) and not victoire(plateau, 'x') and not victoire(plateau, 'o')

def evaluer_position(plateau):
    if victoire(plateau, 'o'):
        return 10
    elif victoire(plateau, 'x'):
        return -10
    elif match_nul(plateau):
        return 0
    else:
        return None

def mouvement_valide(plateau, pos):
    return 0 <= pos < 9 and plateau[pos] is None

def effectuer_mouvement(plateau, pos, joueur):
    new_plateau = plateau[:]
    new_plateau[pos] = joueur
    return new_plateau

def minimax(plateau, joueur):
    score = evaluer_position(plateau)
    if score is not None:
        return score, None

    if joueur == 'o':
        meilleur_score = -float('inf')
        meilleur_coup = None
        for i in range(9):
            if mouvement_valide(plateau, i):
                new_plateau = effectuer_mouvement(plateau, i, joueur)
                score_courant, _ = minimax(new_plateau, 'x')
                if score_courant > meilleur_score:
                    meilleur_score = score_courant
                    meilleur_coup = i
        return meilleur_score, meilleur_coup
    else:
        meilleur_score = float('inf')
        meilleur_coup = None
        for i in range(9):
            if mouvement_valide(plateau, i):
                new_plateau = effectuer_mouvement(plateau, i, joueur)
                score_courant, _ = minimax(new_plateau, 'o')
                if score_courant < meilleur_score:
                    meilleur_score = score_courant
                    meilleur_coup = i
        return meilleur_score, meilleur_coup

_, coup = minimax(plateau, 'o')
coup
    `;
    try {
      const coup = await pyodide.runPythonAsync(codePython);
      return coup;
    } catch (err) {
      setMessage("Erreur Python : " + err.message);
      return null;
    }
  }

  function checkVictory(board, player) {
    const lines = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6],
    ];
    return lines.some(line => line.every(index => board[index] === player));
  }

  function checkDraw(board) {
    return board.every(cell => cell !== null);
  }

  async function handleClick(pos) {
    if (!playerTurn) return;
    if (board[pos] !== null) return;
    if (checkVictory(board, 'x') || checkVictory(board, 'o')) return;

    const newBoard = [...board];
    newBoard[pos] = "x";
    setBoard(newBoard);

    if (checkVictory(newBoard, 'x')) {
      setMessage("Bravo, tu as gagné !");
      setPlayerTurn(false);
      setTree(generateMinimaxTree(newBoard, "o"));
      return;
    }
    if (checkDraw(newBoard)) {
      setMessage("Match nul !");
      setPlayerTurn(false);
      setTree(generateMinimaxTree(newBoard, "o"));
      return;
    }

    setMessage("Tour de l'ordinateur...");
    setPlayerTurn(false);

    // Génère arbre du tour ordi pour affichage
    setTree(generateMinimaxTree(newBoard, "o"));

    const coupOrdi = await playComputerMove(newBoard);
    if (coupOrdi !== null && newBoard[coupOrdi] === null) {
      newBoard[coupOrdi] = "o";
      setBoard(newBoard);

      if (checkVictory(newBoard, 'o')) {
        setMessage("L'ordinateur a gagné !");
        setPlayerTurn(false);
        setTree(generateMinimaxTree(newBoard, "x"));
        return;
      }
      if (checkDraw(newBoard)) {
        setMessage("Match nul !");
        setPlayerTurn(false);
        setTree(generateMinimaxTree(newBoard, "x"));
        return;
      }

      setMessage("À toi de jouer !");
      setPlayerTurn(true);
      setTree(generateMinimaxTree(newBoard, "x"));
    } else {
      setMessage("Erreur dans le calcul du coup ordinateur.");
      setPlayerTurn(true);
    }
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setMessage("À toi de jouer !");
    setPlayerTurn(true);
    setTree(null);
  }

  // Simple affichage de l'arbre (JSON indenté)
  return (
    <div style={{ display: "flex", gap: 20, padding: 20 }}>
      {/* Plateau */}
      <div>
        <h2>Tic Tac Toe (React + Python WASM)</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 60px)",
            gap: 5,
            justifyContent: "center",
            margin: "20px auto",
          }}
        >
          {board.map((val, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              style={{
                width: 60,
                height: 60,
                backgroundColor: "#eee",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 32,
                cursor: val || !playerTurn ? "not-allowed" : "pointer",
                borderRadius: 6,
                userSelect: "none",
                boxShadow: "0 0 4px rgba(0,0,0,0.1)",
              }}
            >
              {val && val.toUpperCase()}
            </div>
          ))}
        </div>
        <button
          onClick={reset}
          style={{ padding: "8px 16px", fontSize: 16, cursor: "pointer" }}
        >
          Recommencer
        </button>
        <p style={{ marginTop: 15, fontWeight: "bold" }}>{message}</p>
      </div>

      {/* Affichage de l'arbre (JSON simple) */}
      <div
        style={{
          flex: 1,
          maxWidth: 400,
          whiteSpace: "pre-wrap",
          backgroundColor: "#f7f7f7",
          padding: 15,
          borderRadius: 8,
          fontSize: 12,
          fontFamily: "monospace",
          overflowY: "auto",
          height: 360,
        }}
      >
        <h3>Arbre Minimax (simplifié)</h3>
        {tree ? JSON.stringify(tree, null, 2) : "Cliquez pour jouer..."}
      </div>
    </div>
  );
}
