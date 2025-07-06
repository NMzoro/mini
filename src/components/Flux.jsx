import { Code, Database, Target, Zap } from 'lucide-react';
import BeforeAfter from './BeforeAfter';
import { useLocation, useNavigate } from 'react-router-dom';
import { SiInfluxdb } from 'react-icons/si';

export default function Flux() {
  const navigate = useNavigate();
  const location = useLocation();
  const pages = ['/', '/objectif', '/logique', '/algor/minmax','/flux','/jeu'];
  const currentIndex = pages.indexOf(location.pathname);

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
  
  const features = [
    {
      id: 1,
      title: "Action Utilisateur",
      description: "Clic sur une case du plateau React",
      icon: Code,
      textColor: "text-[#5C9BEF]",
      borderColor: "border-blue-600"
    },
    {
      id: 2,
      title: "Validation Prolog",
      description: "Vérification des règles par le moteur logique",
      icon: Database,
      textColor: "text-[#FB923C]",
      borderColor: "border-orange-600"
    },
    {
      id: 3,
      title: "Calcul MiniMax",
      description: "L'IA détermine le meilleur coup",
      icon: Target,
      textColor: "text-[#C084FC]",
      borderColor: "border-purple-600"
    },
    {
      id: 4,
      title: "Mise à Jour UI",
      description: "Rendu des changements en temps réel",
      icon: Zap,
      textColor: "text-[#4ADE80]",
      borderColor: "border-green-600"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div>
        <div className="text-center pb-8 pt-12 px-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl shadow-md" style={{ backgroundColor: 'black' }}>
            <SiInfluxdb className='text-white' />
          </div>
          <h1 className="text-3xl font-bold text-[#001f3f] mb-4">
            Flux de Données et Interactions
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Transmission d’informations.
          </p>
        </div>
        <div className="space-y-8 px-6 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.id}
                  className={`bg-white border-none rounded-lg p-6 ${feature.textColor} hover:transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-md`}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <IconComponent size={32} className={feature.textColor} />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">
                        {feature.id}. {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <BeforeAfter handlePrev={handlePrev} currentIndex={currentIndex} handleNext={handleNext} pages={pages}/>
        </div>
      </div>
    </div>
  );
}