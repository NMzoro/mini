import { SiInfluxdb } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Card(){
    return(
        <>
            <section id="features" className="section-padding bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Fonctionnalités du Projet</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Découvrez les technologies et concepts avancés implémentés dans ce projet d'intelligence artificielle.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link to="/objectif">
                <div className="feature-card text-center">
<div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl shadow-md" style={{ backgroundColor: '#F8F8F8' }}>
                            🎯
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Objectif du projet</h3>
                    <p className="text-gray-600 mb-4">
                        Comprendre les enjeux et objectifs.
                    </p>
                </div>
                </Link>
                <Link to='/logique'>
                <div className="feature-card text-center">
<div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl shadow-md" style={{ backgroundColor: '#F8F8F8' }}>
                            🧠
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Moteur logique</h3>
                    <p className="text-gray-600 mb-4">
                        Règles et logique du jeu.
                    </p>
                </div>
                </Link>
                <Link to='/algor/minmax'>
                <div className="feature-card text-center">
<div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl shadow-md" style={{ backgroundColor: '#F8F8F8' }}>
                            🤖
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Algorithme MiniMax</h3>
                    <p className="text-gray-600 mb-4">
                        Intelligence artificielle.
                    </p>
                </div>
                </Link>
                
                <Link to="/flux">
            <div className="feature-card text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl shadow-md" style={{ backgroundColor: '#F8F8F8' }}>
                            <SiInfluxdb />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Flux de Données et Interactions</h3>
                    <p className="text-gray-600 mb-4">
                        Processus d'échange et de traitement.
                    </p>
                </div>
                </Link>
                <Link to='/jeu'>
                <div className="feature-card text-center">
<div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl shadow-md" style={{ backgroundColor: '#F8F8F8' }}>
                            🕹️
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Plateau du jeu</h3>
                    <p className="text-gray-600 mb-4">
                        Jouer contre l'IA.
                    </p>
                </div>
                </Link>
                


            </div>
        </div>
    </section>
        </>
    )
}