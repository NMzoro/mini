import React from 'react';
import { useNavigate } from 'react-router-dom';
import BeforeAfter from '../components/BeforeAfter';

const Objectif = () => {
  const navigate = useNavigate();
  const pages = ['/', '/objectif', '/logique', '/algor/minmax','/flux','/jeu'];
  const currentPath = window.location.pathname;
  const currentIndex = pages.indexOf(currentPath);

  const objectifsTechniques = [
    "Moteur Logique Prolog",
    "Implémenter l'algorithme MiniMax",
    "Interface utilisateur intuitive",
    "Analyser les stratégies optimales"
  ];

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
    <div className="max-w-4xl mx-auto">
      <div>
        <div className="text-center pb-8 pt-12 px-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center text-3xl">
            🎯
          </div>
          <h1 className="text-3xl font-bold text-[#001f3f] mb-4">
            Objectif du mini-projet
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Créer un jeu de Tic-Tac-Toe intelligent où un moteur logique Prolog contrôle les règles du jeu et l'algorithme MiniMax.
          </p>
        </div>
        <div className="space-y-8 px-6 pb-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-500 flex items-center gap-2">
                  <div className="w-2 h-8 bg-blue-500 rounded"></div>
                  Qu'est-ce que le Morpion ?
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Le jeu de morpion (Tic-Tac-Toe) est un jeu à somme nulle pour deux joueurs. 
                  L'objectif est d'aligner trois symboles identiques (X ou O) horizontalement, 
                  verticalement ou en diagonale sur une grille 3×3.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-xl border border-gray-200">
                <h4 className="font-semibold mb-3 text-[#001f3f]">Caractéristiques du jeu</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Jeu à information parfaite</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Maximum 9 coups par partie</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Stratégie déterministe</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-500 flex items-center gap-2">
                  <div className="w-2 h-8 bg-emerald-500 rounded"></div>
                  Objectifs techniques
                </h3>
                <div className="grid gap-3">
                  {objectifsTechniques.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
            <BeforeAfter handlePrev={handlePrev} currentIndex={currentIndex} handleNext={handleNext} pages={pages}/>

        </div>
      </div>
    </div>
  );
};

export default Objectif;