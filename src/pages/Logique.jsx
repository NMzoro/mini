import { useNavigate } from "react-router-dom";
import BeforeAfter from "../components/BeforeAfter";
import PrologExplanation from "../components/PrologExplanation";

const Logique = () => {
  const navigate = useNavigate();
  const pages = ['/', '/objectif', '/logique', '/algor/minmax','/flux','/jeu'];
  const currentPath = window.location.pathname;
  const currentIndex = pages.indexOf(currentPath);

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
    <div className="max-w-5xl mx-auto">
      <div className="">
        {/* Header */}
        <div className="text-center pb-8 pt-12 px-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center text-3xl">
            🧠
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Moteur logique du jeu
          </h1>
          <p className="text-lg text-gray-600">
            Comprendre les règles et la représentation interne
          </p>
        </div>

        {/* Cards Section */}
        <div className="space-y-8 px-6 pb-8">
          {/* Three Cards Row */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Victory Conditions Card */}
            <div className="border-2 border-green-100 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="text-center pt-6 px-6">
                <div className="w-12 h-12 mx-auto mb-3 bg-green-50 rounded-full flex items-center justify-center">
                  <span className="text-green-500 text-xl">✓</span>
                </div>
                <h2 className="text-lg text-green-600 font-semibold mb-4">Conditions de victoire</h2>
              </div>
              <div className="px-6 pb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">3 lignes horizontales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">3 lignes verticales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">2 diagonales</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Turn Management Card */}
            <div className="border-2 border-blue-100 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="text-center pt-6 px-6">
                <div className="w-12 h-12 mx-auto mb-3 bg-blue-50 rounded-full flex items-center justify-center">
                  <span className="text-blue-500 text-xl">⚡</span>
                </div>
                <h2 className="text-lg text-blue-600 font-semibold mb-4">Gestion des tours</h2>
              </div>
              <div className="px-6 pb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Joueur humain : X</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Intelligence artificielle : O</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Alternance automatique</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Game State Card */}
            <div className="border-2 border-indigo-100 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="text-center pt-6 px-6">
                <div className="w-12 h-12 mx-auto mb-3 bg-indigo-50 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 text-xl">📊</span>
                </div>
                <h2 className="text-lg text-indigo-600 font-semibold mb-4">État du jeu</h2>
              </div>
              <div className="px-6 pb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-sm">Victoire (X ou O)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-sm">Match nul</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-sm">Jeu en cours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Internal Representation Card */}
            <PrologExplanation/>
            <BeforeAfter handlePrev={handlePrev} currentIndex={currentIndex} handleNext={handleNext} pages={pages}/>
        </div>
      </div>
    </div>
  );
};

export default Logique;