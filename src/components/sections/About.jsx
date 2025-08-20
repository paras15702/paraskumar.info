import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const frontEndSkills = ["React.js", "Next.js", "HTML/CSS", "JavaScript", "TypeScript"]

    const backEndSkills = ["Node.js", "Python", "FastAPI", "Flask", "Django", "Express.js"]

    const aiSkills = ["LLMs", "CrewAI", "LangChain", "OpenAI GPT-4", "Gemini", "PyTorch", "TensorFlow", "RAG"]

    const devOpsSkills = ["Docker", "Kubernetes", "AWS", "GCP", "GitHub Actions", "CI/CD", "Jenkins", "Terraform"]

    return (
        <section id="about" className="min-h-screen items-center
        justify-center py-28">

            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About ME</h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            I'm a Master's student in Computer Science at USC, specializing in AI and Machine Learning.
                            With a strong foundation in both frontend and backend development, I focus on building intelligent
                            systems that leverage Large Language Models and multi-agent architectures to solve complex problems.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        frontEndSkills.map((tech, key) => (
                                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                        ">
                                                {tech}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        backEndSkills.map((tech, key) => (
                                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                        ">
                                                {tech}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> AI & LLM Development</h3>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        aiSkills.map((tech, key) => (
                                            <span key={key} className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20
                                        hover:shadow-[0_2px_8px_rgba(6,182,212,0.2)] transition
                                        ">
                                                {tech}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> DevOps & Cloud</h3>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        devOpsSkills.map((tech, key) => (
                                            <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                        hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition
                                        ">
                                                {tech}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">

                            <h3 className="text-xl font-bold mb-4">
                                🎓Education
                            </h3>

                            <ul className="list-disc list-inside text-gray-300 space-y-2 ">
                                <li>
                                    <strong> Master of Science in Computer Science </strong> - University of Southern California (Jan 2025 - Dec 2026)
                                </li>
                                <li>
                                    <strong> GPA: 3.7/4.0 </strong>
                                </li>
                                <li>
                                    Relevant Coursework: Machine Learning, Natural Language Processing, Analysis of Algorithms
                                </li>
                                <li className="mt-3">
                                    <strong> Bachelor of Technology in Computer Engineering (Honors in AI and ML) </strong> - VESIT (Aug 2020 - Jun 2024)
                                </li>
                                <li>
                                    <strong> CGPA: 9.2/10 </strong>
                                </li>
                                <li>
                                    Relevant Coursework: Natural Language Processing, Data Structures & Algorithms
                                </li>
                            </ul>

                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">

                            <h3 className="text-xl font-bold mb-4">
                                🏆 Certifications
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold"> Winter School on Responsible AI</h4>
                                    <p>Department of Computer Science and Engineering, IIT Jodhpur (Dec 2022)</p>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-4 mt-6">
                                🎯 Current Focus
                            </h3>
                            <div className="space-y-2 text-gray-300">
                                <p>Seeking a <strong>Summer 2026 internship role in AI Software Engineering</strong></p>
                                <p>Specializing in multi-agent systems, LLM integration, and scalable AI applications</p>
                            </div>

                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    )
}