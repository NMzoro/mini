% Base de connaissances Prolog pour Tic-Tac-Toe
% Définition du plateau de jeu
plateau([_, _, _, _, _, _, _, _, _]).

% Définition des lignes gagnantes
ligne_gagnante([X, X, X, _, _, _, _, _, _], X) :- X \= _.
ligne_gagnante([_, _, _, X, X, X, _, _, _], X) :- X \= _.
ligne_gagnante([_, _, _, _, _, _, X, X, X], X) :- X \= _.
ligne_gagnante([X, _, _, X, _, _, X, _, _], X) :- X \= _.
ligne_gagnante([_, X, _, _, X, _, _, X, _], X) :- X \= _.
ligne_gagnante([_, _, X, _, _, X, _, _, X], X) :- X \= _.
ligne_gagnante([X, _, _, _, X, _, _, _, X], X) :- X \= _.
ligne_gagnante([_, _, X, _, X, _, X, _, _], X) :- X \= _.

% Prédicat pour vérifier une victoire
victoire(Plateau, Joueur) :-
    ligne_gagnante(Plateau, Joueur).

% Prédicat pour vérifier un match nul
match_nul(Plateau) :-
    \+ member(_, Plateau),
    \+ victoire(Plateau, x),
    \+ victoire(Plateau, o).

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
evaluer_position(Plateau, 0) :- match_nul(Plateau).