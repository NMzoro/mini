export default function BeforeAfter({handlePrev,currentIndex,handleNext,pages}){
    return(
        <>
        <div className="flex justify-between mt-6">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-6 py-2 bg-white rounded-lg font-medium transition-colors shadow-md ${
                currentIndex === 0 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-blue-600 hover:bg-gray-100'
              }`}
            >
              ← Retour
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex === pages.length - 1}
              className={`px-6 py-2 bg-white rounded-lg font-medium transition-colors shadow-md ${
                currentIndex === pages.length - 1
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-emerald-600 hover:bg-gray-100'
              }`}
            >
              Suivant →
            </button>
          </div>
        </>
    )
}