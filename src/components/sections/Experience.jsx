import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {

    return (
        <section id="experience" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">

                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Experience
                    </h2>

                    <div className="space-y-6">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                                <div>
                                    <h3 className="text-xl font-bold">Research Assistant (Pupil Tracking for ADHD)</h3>
                                    <p className="text-gray-300">University of Southern California</p>
                                </div>
                                <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                                    <p>Sep 2025 – Present</p>
                                    <p>Los Angeles, CA</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                                <li>Developed preprocessing pipeline for eye-tracking data, including blink detection/removal and signal normalization, reducing data noise by 60% for machine learning models.</li>
                                <li>Implemented and evaluated CNN, LSTM, and Transformer architectures for ADHD classification, achieving an 18% F1-score improvement through data augmentation.</li>
                                <li>Collaborated with research team, sharing insights on model performance and preprocessing techniques, resulting in 10% faster model training.</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                                <div>
                                    <h3 className="text-xl font-bold">Student Software Developer</h3>
                                    <p className="text-gray-300">University of Southern California – Facilities Planning & Management</p>
                                </div>
                                <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                                    <p>Jun 2025 – Sep 2025</p>
                                    <p>Los Angeles, CA</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                                <li>Migrated Flask authentication system from OAuth to USC Single Sign-On (SSO), reducing support tickets by 30% and eliminating session timeout issues for 500+ campus users.</li>
                                <li>Redesigned React frontend with streamlined navigation and form validation, reducing average task completion time by 25% through better UX patterns and error handling.</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                                <div>
                                    <h3 className="text-xl font-bold">Full-Stack Developer Intern</h3>
                                    <p className="text-gray-300">Mira Advanced Engineering</p>
                                </div>
                                <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                                    <p>Jun 2023 – Sep 2023</p>
                                    <p>Remote</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                                <li>Created and deployed 10+ React features integrated with Node.js/Express REST APIs (JWT authentication, pagination, validation), automating workflows and reducing operational overhead by 20%.</li>
                                <li>Optimized MySQL database performance through query rewrites and strategic indexing; improved dashboard response times by 37%.</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
}


