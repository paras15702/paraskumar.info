import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {

    return (

        <section id="home" className="min-h-screen flex items-center justify-center relative">

            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <img
                        src="/ME.jpg"
                        alt="Paras Panchal"
                        className="mx-auto mb-6 h-32 w-32 md:h-55 md:w-55 rounded-full object-cover ring-2 ring-white/10 shadow-lg"
                        loading="eager"
                    />
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                        Hi, I'm Paraskumar Panchal
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                        A results-oriented Software Engineer and Master's student in Computer Science at USC,
                        specializing in AI with experience building multi-agent systems (CrewAI) for workflow automation
                        and full-stack LLM/RAG applications. Proficient in scalable backend development and CI/CD pipelines on AWS.
                    </p>

                    <div className="flex justify-center space-x-4">

                        <a href="#projects" className="bg-blue-500 text-white py-3 px-6  rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,13,246,0.4)]">

                            View Projects
                        </a>

                        <a href="#contact" className=" border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                    
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,13,246,0.2)] hover:bg-blue-500/10">

                            Contact Me
                        </a>

                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
}