import { Link } from "react-router-dom";
export default function HeroSection(){
    return(
        <>
    <section id="hero" className="gradient-bg min-h-screen flex items-center justify-center p-6 relative">
        <div className="floating-elements">
            <div className="floating-x">X</div>
            <div className="floating-x">X</div>
            <div className="floating-o">O</div>
            <div className="floating-o">O</div>
        </div>
        
        <div className="container mx-auto max-w-7xl">
            <div className="glass-card p-8 md:p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start mb-6">
                            <div className="tic-tac-toe-grid">
                                <div className="cell">X</div>
                                <div className="cell">O</div>
                                <div className="cell">X</div>
                                <div className="cell">O</div>
                                <div className="cell">X</div>
                                <div className="cell">O</div>
                                <div className="cell">X</div>
                                <div className="cell">O</div>
                                <div className="cell">X</div>
                            </div>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-glow leading-tight">
                            Jeu de Morpion avec IA 
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent pl-2">
                                 Min Max
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                            Une exploration interactive de l'intelligence artificielle appliquée aux jeux. 
                            Découvrez comment l'algorithme MiniMax permet de créer une IA imbattable.
                        </p>
                        
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <a download="rapport_tarhri_bouhaddou" target="_blank" href="./Rapport Mini Project.pdf" className="btn-primary px-8 py-4 rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                Télécharger le rapport
                            </a>
                            
                            <Link to="https://github.dev/NMzoro/mini"  className="btn-secondary px-8 py-4 rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                                Voir le code
                            </Link>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center">
                        <div className="glass-card p-8 mb-6 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Algorithme MiniMax</h3>
                            <div className="minimax-visual">
                                <div className="node"></div>
                                <div className="node"></div>
                                <div className="node"></div>
                                <div className="node"></div>
                                <div className="node"></div>
                                <div className="node"></div>
                                <div className="node"></div>
                                <div className="line line1"></div>
                                <div className="line line2"></div>
                                <div className="line line3"></div>
                                <div className="line line4"></div>
                            </div>
                            <p className="text-white/80 text-sm mt-4">
                                Arbre de décision pour une IA imbattable
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                            <div className="glass-card p-4 text-center">
                                <div className="text-2xl font-bold text-yellow-400 mb-2">∞</div>
                                <div className="text-white/80 text-sm">Intelligence</div>
                            </div>
                            <div className="glass-card p-4 text-center">
                                <div className="text-2xl font-bold text-green-400 mb-2">100%</div>
                                <div className="text-white/80 text-sm">Précision</div>
                            </div>
                            <div className="glass-card p-4 text-center">
                                <div className="text-2xl font-bold text-blue-400 mb-2">0</div>
                                <div className="text-white/80 text-sm">Défaites</div>
                            </div>
                            <div className="glass-card p-4 text-center">
                                <div className="text-2xl font-bold text-purple-400 mb-2">AI</div>
                                <div className="text-white/80 text-sm">Powered</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="scroll-indicator">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    </section>
    <style>
        {`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            scroll-behavior: smooth;
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            position: relative;
            overflow: hidden;
        }
        
        .gradient-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
                radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .navbar {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
        }
        
        .dark-glass-card {
            background: rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
        }
        
        .tic-tac-toe-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 4px;
            background: rgba(255, 255, 255, 0.1);
            padding: 8px;
            border-radius: 12px;
            backdrop-filter: blur(10px);
        }
        
        .cell {
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: bold;
            color: #4338ca;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(79, 70, 229, 0.6);
        }
        
        .btn-secondary {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }
        
        .text-glow {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }
        
        .feature-card {
            background: white;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .tech-badge {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            font-size: 0.875rem;
            font-weight: 600;
            display: inline-block;
            margin: 0.25rem;
        }
        
        .floating-elements {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        
        .floating-x, .floating-o {
            position: absolute;
            font-size: 2rem;
            font-weight: bold;
            color: rgba(255, 255, 255, 0.1);
            animation: float-diagonal 8s ease-in-out infinite;
        }
        
        .floating-x:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
        .floating-x:nth-child(2) { top: 70%; left: 80%; animation-delay: 2s; }
        .floating-o:nth-child(3) { top: 30%; left: 85%; animation-delay: 4s; }
        .floating-o:nth-child(4) { top: 80%; left: 15%; animation-delay: 6s; }
        
        @keyframes float-diagonal {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(30px, -30px) rotate(90deg); }
            50% { transform: translate(0, -60px) rotate(180deg); }
            75% { transform: translate(-30px, -30px) rotate(270deg); }
        }
        
        .minimax-visual {
            position: relative;
            width: 120px;
            height: 120px;
            margin: 0 auto;
        }
        
        .node {
            position: absolute;
            width: 12px;
            height: 12px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            animation: node-pulse 2s infinite;
        }
        
        .node:nth-child(1) { top: 0; left: 50%; animation-delay: 0s; }
        .node:nth-child(2) { top: 30%; left: 25%; animation-delay: 0.3s; }
        .node:nth-child(3) { top: 30%; left: 75%; animation-delay: 0.6s; }
        .node:nth-child(4) { top: 60%; left: 10%; animation-delay: 0.9s; }
        .node:nth-child(5) { top: 60%; left: 40%; animation-delay: 1.2s; }
        .node:nth-child(6) { top: 60%; left: 60%; animation-delay: 1.5s; }
        .node:nth-child(7) { top: 60%; left: 90%; animation-delay: 1.8s; }
        
        @keyframes node-pulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.5); opacity: 1; }
        }
        
        .line {
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            height: 2px;
            transform-origin: left center;
        }
        
        .line1 { top: 15%; left: 50%; width: 30px; transform: rotate(45deg); }
        .line2 { top: 15%; left: 50%; width: 30px; transform: rotate(-45deg); }
        .line3 { top: 45%; left: 25%; width: 25px; transform: rotate(60deg); }
        .line4 { top: 45%; left: 75%; width: 25px; transform: rotate(-60deg); }
        
        .scroll-indicator {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
            40% { transform: translateX(-50%) translateY(-10px); }
            60% { transform: translateX(-50%) translateY(-5px); }
        }
        
        .section-padding {
            padding: 5rem 0;
        }
        
        .game-demo {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            border-radius: 20px;
            padding: 2rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            max-width: 300px;
            margin: 0 auto;
        }
        
        .demo-cell {
            aspect-ratio: 1;
            background: white;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            font-weight: bold;
            color: #4338ca;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .demo-cell:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .timeline {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .timeline::after {
            content: '';
            position: absolute;
            width: 6px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -3px;
            border-radius: 3px;
        }
        
        .timeline-item {
            padding: 10px 40px;
            position: relative;
            background: inherit;
            width: 50%;
        }
        
        .timeline-item::after {
            content: '';
            position: absolute;
            width: 25px;
            height: 25px;
            right: -17px;
            background: white;
            border: 4px solid #667eea;
            top: 15px;
            border-radius: 50%;
            z-index: 1;
        }
        
        .timeline-item:nth-child(even) {
            left: 50%;
        }
        
        .timeline-item:nth-child(even)::after {
            left: -16px;
        }
        
        .timeline-content {
            padding: 20px 30px;
            background: white;
            position: relative;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        @media (max-width: 768px) {
            .timeline::after {
                left: 31px;
            }
            
            .timeline-item {
                width: 100%;
                padding-left: 70px;
                padding-right: 25px;
            }
            
            .timeline-item::after {
                left: 15px;
            }
            
            .timeline-item:nth-child(even) {
                left: 0%;
            }
        }
        
`}
    </style>
        </>
    )
}