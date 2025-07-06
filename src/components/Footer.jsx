import { FaHospitalUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white overflow-hidden">
            {/* Fond avec pattern géométrique */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                                     radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Éléments flottants animés */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
                <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Contenu principal */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                {/* En-tête avec logo du projet */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300">
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-white">AI</span>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                            Morpion IA
                        </span>
                        <span className="text-white"> MiniMax</span>
                    </h2>
                    <p className="text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
                        Une démonstration interactive de l'algorithme MiniMax appliqué au jeu de Morpion. 
                        Explorez les concepts fondamentaux de l'IA dans les jeux de stratégie.
                    </p>
                </div>

                {/* Grille principale */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    
                    {/* Section Auteurs - Design premium */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Réaliser Par </h3>
                        </div>
                        
                        {/* Carte Tarhri Youssef */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative">
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                                            TY
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white">Tarhri Youssef</h4>
                                        <p className="text-purple-200 text-sm">Data scientist & Odoo developer</p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-3">
                                    <a href="https://www.linkedin.com/in/yousseftarhri/" className="group/social relative flex-1">
                                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-3 flex items-center justify-center gap-2 transition-all duration-300 group-hover/social:scale-105 group-hover/social:shadow-lg group-hover/social:shadow-blue-500/25">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                            <span className="text-white font-medium text-sm">LinkedIn</span>
                                        </div>
                                    </a>
                                    <a href="https://github.com/yousseftarhri" className="group/social relative flex-1">
                                        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-3 flex items-center justify-center gap-2 transition-all duration-300 group-hover/social:scale-105 group-hover/social:shadow-lg group-hover/social:shadow-gray-500/25">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                            <span className="text-white font-medium text-sm">GitHub</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Carte Bouhaddou Mohammed */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative">
                                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                                            BM
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white">Bouhaddou Mohammed</h4>
                                        <p className="text-purple-200 text-sm">Développeur Full Stack & IA</p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-3">
                                    <Link to="https://www.linkedin.com/in/mohammed-bouhaddou-93a91b218/"  className="group/social relative flex-1">
                                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-3 flex items-center justify-center gap-2 transition-all duration-300 group-hover/social:scale-105 group-hover/social:shadow-lg group-hover/social:shadow-blue-500/25">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                            <span className="text-white font-medium text-sm">LinkedIn</span>
                                        </div>
                                    </Link>
                                    <Link to="https://github.com/NMzoro" href="#" className="group/social relative flex-1">
                                        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-3 flex items-center justify-center gap-2 transition-all duration-300 group-hover/social:scale-105 group-hover/social:shadow-lg group-hover/social:shadow-gray-500/25">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                            <span className="text-white font-medium text-sm">GitHub</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Section Formation & Technologie */}
                    <div className="space-y-6">
                        {/* Formation */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                                <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Formation</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl p-4 border border-purple-500/20">
                                        <h4 className="text-lg font-semibold text-white mb-1">Master</h4>
                                        <p className="text-purple-200 font-medium">Ingénierie des Systèmes Intelligents</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                {/* Ligne de séparation stylée */}
                <div className="relative mb-12">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full p-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                
                {/* Footer bottom premium */}
                <div className="text-center">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <div className="text-white font-semibold">© {new Date().getFullYear()} Mini-projet : Tic-Tac-Toe (XO)</div>
                                    <div className="text-purple-300 text-sm">Tous droits réservés</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}