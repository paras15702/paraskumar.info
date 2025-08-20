import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'
export const Contact = () => {

    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

    const handleSubmit = (e) => {


        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            alert("Message Sent!")
            setFormData({
                name: "",
                email: "",
                message: ""
            })
        }).catch(() => alert("Oops! Something went wrong, Please Try Again"));


    };

    return (

        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>

                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Get In Touch</h2>

                    <div className="text-center mb-8">
                        <p className="text-gray-300 mb-4">I'm currently seeking a Summer 2026 internship role in Software Engineering.</p>
                        <div className="space-y-2 text-gray-400">
                            <p>📍 Los Angeles, CA</p>
                            <p>📧 <a href="mailto:pnpancha@usc.edu" className="text-blue-400 hover:text-blue-300 transition-colors">pnpancha@usc.edu</a></p>
                            <p>📧 <a href="mailto:paraspanchal555@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">paraspanchal555@gmail.com</a></p>
                            <p>📱 +1 (213) 301-4705</p>
                            <p>🔗 <a href="https://www.linkedin.com/in/paraskumar-panchal/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">LinkedIn</a> | <a href="https://github.com/paras15702" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">GitHub</a></p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formdata.name}
                                required

                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name..."
                                onChange={(e) => setFormData({ ...formdata, name: e.target.value })}
                            />

                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formdata.email}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({ ...formdata, email: e.target.value })}
                            />

                        </div>

                        <div className="relative">
                            <textarea

                                id="message"
                                name="message"
                                rows={5}
                                value={formdata.message}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Message...."
                                onChange={(e) => setFormData({ ...formdata, message: e.target.value })}
                            />

                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,13,246,0.4)]">
                            Send Message
                        </button>

                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}