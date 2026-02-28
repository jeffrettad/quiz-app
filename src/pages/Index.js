import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Trophy, Zap } from "lucide-react";
import { CATEGORIES, getQuizHistory, getStats } from "@/lib/quiz-api";
import { useNavigate } from "react-router-dom";
const Index = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const history = getQuizHistory();
    const stats = getStats();
    const filtered = CATEGORIES.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
    return (_jsxs("div", { className: "min-h-screen bg-background pb-8", children: [_jsxs("header", { className: "flex items-center justify-between px-5 pt-6 pb-4", children: [_jsx("h1", { className: "text-xl font-display font-bold text-foreground", children: "Dex Quiz" }), _jsxs("div", { className: "quiz-card px-3 py-1.5 flex items-center gap-1.5", children: [_jsx(Trophy, { className: "w-4 h-4 text-primary" }), _jsx("span", { className: "text-sm font-semibold text-foreground", children: stats.totalPoints })] })] }), _jsx("div", { className: "px-5 mb-6", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" }), _jsx("input", { type: "text", placeholder: "Search quizzes, topics...", value: search, onChange: (e) => setSearch(e.target.value), className: "w-full bg-card border border-border rounded-xl py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all" })] }) }), _jsx("div", { className: "px-5 mb-8", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "gradient-hero rounded-2xl p-6 relative overflow-hidden", children: [_jsx("div", { className: "absolute top-3 left-4", children: _jsx("span", { className: "bg-success text-success-foreground text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider", children: "Live Now" }) }), _jsxs("div", { className: "mt-8", children: [_jsx("h2", { className: "text-2xl font-display font-bold text-primary-foreground mb-1", children: "Daily Challenge" }), _jsx("p", { className: "text-primary-foreground/80 text-sm mb-1", children: "Test your knowledge today!" }), _jsxs("div", { className: "flex items-center gap-1.5 mb-4", children: [_jsx(Zap, { className: "w-4 h-4 text-warning" }), _jsx("span", { className: "text-warning text-sm font-medium", children: "Win 50 bonus points" })] }), _jsx("button", { onClick: () => navigate("/quiz-setup?category=9&difficulty=medium&amount=10"), className: "bg-blue/95 text-background font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-black transition-colors", children: "Start Now" })] })] }) })] }));
};
export default Index;
