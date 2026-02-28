import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Gauge, Hash, Layers } from "lucide-react";
import { CATEGORIES } from "@/lib/quiz-api";
const difficulties = [
    { value: "easy", label: "Easy", color: "text-success" },
    { value: "medium", label: "Medium", color: "text-warning" },
    { value: "hard", label: "Hard", color: "text-destructive" },
];
const amounts = [5, 10, 15, 20];
const QuizSetup = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const preselectedCategory = Number(searchParams.get("category")) || CATEGORIES[0].id;
    const [categoryId, setCategoryId] = useState(preselectedCategory);
    const [difficulty, setDifficulty] = useState(searchParams.get("difficulty") || "medium");
    const [amount, setAmount] = useState(Number(searchParams.get("amount")) || 10);
    const category = CATEGORIES.find((c) => c.id === categoryId);
    const handleStart = () => {
        navigate(`/quiz?category=${categoryId}&difficulty=${difficulty}&amount=${amount}`);
    };
    return (_jsxs("div", { className: "min-h-screen bg-background px-5 pt-6 pb-8", children: [_jsxs("button", { onClick: () => navigate("/home"), className: "flex items-center gap-2 text-muted-foreground mb-6 hover:text-foreground transition-colors", children: [_jsx(ArrowLeft, { className: "w-5 h-5" }), _jsx("span", { className: "text-sm", children: "Back" })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, children: [_jsx("h1", { className: "text-2xl font-display font-bold text-foreground mb-2", children: "Quiz Setup" }), _jsx("p", { className: "text-muted-foreground text-sm mb-8", children: "Configure your quiz before starting" }), _jsxs("div", { className: "mb-6", children: [_jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx(Layers, { className: "w-4 h-4 text-primary" }), _jsx("label", { className: "text-sm font-semibold text-foreground", children: "Category" })] }), _jsx("div", { className: "grid grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1", children: CATEGORIES.map((cat) => (_jsxs("button", { onClick: () => setCategoryId(cat.id), className: `quiz-card p-3 text-left transition-all ${categoryId === cat.id ? "border-primary glow-border" : "hover:border-border/80"}`, children: [_jsx("span", { className: "text-lg mr-2", children: cat.icon }), _jsx("span", { className: "text-sm font-medium text-foreground", children: cat.name })] }, cat.id))) })] }), _jsxs("div", { className: "mb-6", children: [_jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx(Gauge, { className: "w-4 h-4 text-primary" }), _jsx("label", { className: "text-sm font-semibold text-foreground", children: "Difficulty" })] }), _jsx("div", { className: "flex gap-3", children: difficulties.map((d) => (_jsx("button", { onClick: () => setDifficulty(d.value), className: `quiz-card flex-1 py-3 text-center transition-all ${difficulty === d.value ? "border-primary glow-border" : ""}`, children: _jsx("span", { className: `text-sm font-semibold ${d.color}`, children: d.label }) }, d.value))) })] }), _jsxs("div", { className: "mb-10", children: [_jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx(Hash, { className: "w-4 h-4 text-primary" }), _jsx("label", { className: "text-sm font-semibold text-foreground", children: "Questions" })] }), _jsx("div", { className: "flex gap-3", children: amounts.map((n) => (_jsx("button", { onClick: () => setAmount(n), className: `quiz-card flex-1 py-3 text-center transition-all ${amount === n ? "border-primary glow-border" : ""}`, children: _jsx("span", { className: "text-sm font-bold text-foreground", children: n }) }, n))) })] }), _jsxs(motion.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: handleStart, className: "w-full gradient-primary text-primary-foreground font-bold py-4 rounded-2xl text-lg flex items-center justify-center gap-2 animate-pulse-glow", children: ["Start Quiz", _jsx(ChevronRight, { className: "w-5 h-5" })] })] })] }));
};
export default QuizSetup;
