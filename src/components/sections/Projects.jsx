import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">

            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-4">

                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">CrewAI Job Insights Platform</h3>
                            <p className="text-gray-400 mb-4">Multi-agent AI system using CrewAI and GPT-4 that automates market research through task planning and execution orchestration, reducing manual analysis by 90%.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["CrewAI", "GPT-4", "FastAPI", "Next.js", "Python"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/paras15702/CrewAI-Job-Insights-Platform" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">AI Ticket Assistant</h3>
                            <p className="text-gray-400 mb-4">Full-stack support ticketing system integrating Google's Gemini LLM for AI-powered ticket triage using zero-shot classification, achieving 95% accuracy.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Gemini LLM", "Node.js", "Express", "React", "Inngest", "JWT"].map((tech, key) => (
                                    <span key={key} className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20
                                    hover:shadow-[0_2px_8px_rgba(6,182,212,0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/paras15702/AI_Assistant" target="_blank" className="text-cyan-400 hover:text-cyan-300 transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Conversational AI with RAG</h3>
                            <p className="text-gray-400 mb-4">Integrated Large Language Models with custom data sources using LangChain and Python to build interactive chatbots with Retrieval-Augmented Generation capabilities.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["LangChain", "OpenAI", "FastAPI", "Python", "RAG"].map((tech, key) => (
                                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                    hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/paras15702/pdfChat" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Text-to-SQL Agent</h3>
                            <p className="text-gray-400 mb-4">Python agent that translates natural language questions into precise SQL queries using LangChain and OpenAI GPT-4 to interact with Supabase database.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["LangChain", "OpenAI", "Python", "Supabase", "PostgreSQL"].map((tech, key) => (
                                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                    hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/paras15702/askSupabase" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Drivido: Blockchain Vehicle Network</h3>
                            <p className="text-gray-400 mb-4">Permissioned blockchain network using Hyperledger Fabric to create a tamper-proof distributed ledger for vehicle registration and violation records.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Hyperledger Fabric", "Node.js", "Chaincode", "REST API", "Blockchain"].map((tech, key) => (
                                    <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                    hover:shadow-[0_2px_8px_rgba(147,51,234,0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/paras15702/fabcar" target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Artsy Explorer: Full-Stack & CI/CD</h3>
                            <p className="text-gray-400 mb-4">MERN stack application with complete CI/CD pipeline using GitHub Actions for testing, containerization with Docker, and deployment to AWS EC2.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "MongoDB", "Docker", "AWS", "GitHub Actions"].map((tech, key) => (
                                    <span key={key} className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20
                                    hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/paras15702/mernapp_backend" target="_blank" className="text-orange-400 hover:text-orange-300 transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}