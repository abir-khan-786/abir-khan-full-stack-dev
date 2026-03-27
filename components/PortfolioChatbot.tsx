"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X } from "lucide-react";

type Message = {
    role: "user" | "bot";
    content: string;
};

const suggestedQuestions = [
    "Who are you?",
    "What services do you offer?",
    "Show me your projects",
    "How can I contact you?",
];

const getBotReply = (input: string) => {
    const text = input.toLowerCase();

    if (text.includes("who are you") || text.includes("about")) {
        return "I’m Abir Khan, a Full-Stack Developer focused on building modern web applications, AI-integrated products, and scalable digital experiences.";
    }

    if (text.includes("service")) {
        return "I offer Full-Stack Web Development, AI Chatbot Integration, Ecommerce Development, Responsive UI Design, Backend/API Development, and custom business solutions.";
    }

    if (text.includes("project")) {
        return "Some of my featured projects are AI Chatbot Web App, Doctor Hunt, Leatheria Shop, Cleaning Service, and Luxelane Shop.";
    }

    if (text.includes("contact") || text.includes("hire")) {
        return "You can contact Abir via email, WhatsApp, GitHub, or LinkedIn from the Contact section of this portfolio.";
    }

    if (text.includes("skill") || text.includes("stack")) {
        return "Abir works with Next.js, TypeScript, Node.js, MongoDB, PostgreSQL, Tailwind CSS, Framer Motion, and AI tools like Gemini API.";
    }

    return "I can help you learn about Abir’s skills, services, projects, and contact details. Try asking about projects, services, or skills.";
};

const PortfolioChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "bot",
            content:
                "Hi 👋 I’m Abir’s portfolio assistant. Ask me about skills, services, projects, or contact info.",
        },
    ]);

    const sendMessage = (customText?: string) => {
        const text = (customText ?? input).trim();
        if (!text) return;

        const userMessage: Message = {
            role: "user",
            content: text,
        };

        const botMessage: Message = {
            role: "bot",
            content: getBotReply(text),
        };

        setMessages((prev) => [...prev, userMessage, botMessage]);
        setInput("");
    };

    return (
        <>
            {/* Floating button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-cyan-500 text-white shadow-2xl"
            >
                <Bot className="h-6 w-6" />
            </motion.button>

            {/* Chat window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.96 }}
                        transition={{ duration: 0.25 }}
                        className="fixed bottom-24 right-4 z-50 w-[calc(100%-2rem)] max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1728]/95 shadow-2xl backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500/20 to-cyan-500/20 text-orange-400">
                                    <Bot className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white">
                                        Portfolio Assistant
                                    </h3>
                                    <p className="text-xs text-slate-400">Ask about Abir</p>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-xl p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="max-h-[380px] space-y-3 overflow-y-auto px-4 py-4">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${msg.role === "user"
                                            ? "bg-orange-500 text-white"
                                            : "border border-white/10 bg-white/5 text-slate-200"
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}

                            {/* Suggestions */}
                            <div className="pt-2">
                                <p className="mb-2 text-xs text-slate-500">Try asking:</p>
                                <div className="flex flex-wrap gap-2">
                                    {suggestedQuestions.map((question) => (
                                        <button
                                            key={question}
                                            onClick={() => sendMessage(question)}
                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition hover:bg-white/10"
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="border-t border-white/10 p-4">
                            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                                <input
                                    type="text"
                                    placeholder="Ask something..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") sendMessage();
                                    }}
                                    className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                                />
                                <button
                                    onClick={() => sendMessage()}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white transition hover:scale-105"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default PortfolioChatbot;