# Définition d'une case vide sur le plateau
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
