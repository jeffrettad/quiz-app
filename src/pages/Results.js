import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { X, Trophy, CheckCircle2, XCircle, Clock, RotateCcw, Eye } from "lucide-react";
import { getQuizHistory } from "@/lib/quiz-api";
const Results = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const resultId = searchParams.get("id");
    const [showReview, setShowReview] = useState(false);
    const result = useMemo(() => {
        return getQuizHistory().find((r) => r.id === resultId);
    }, [resultId]);
    if (!result) {
        return (_jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: _jsxs("div", { className: "quiz-card p-8 text-center", children: [_jsx("p", { className: "text-muted-foreground mb-4", children: "Result not found" }), _jsx("button", { onClick: () => navigate("/home"), className: "gradient-primary text-primary-foreground px-6 py-2.5 rounded-xl font-semibold text-sm", children: "Go Home" })] }) }));
    }
    const scorePercent = Math.round((result.correctAnswers / result.totalQuestions) * 100);
    const mins = Math.floor(result.timeTaken / 60).toString().padStart(2, "0");
    const secs = (result.timeTaken % 60).toString().padStart(2, "0");
    const wrong = result.totalQuestions - result.correctAnswers;
    const getMessage = () => {
        if (scorePercent >= 90)
            return "Outstanding!";
        if (scorePercent >= 70)
            return "Great Job!";
        if (scorePercent >= 50)
            return "Good Effort!";
        return "Keep Practicing!";
    };
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (scorePercent / 100) * circumference;
    return (_jsxs("div", { className: "min-h-screen bg-background pb-8", children: [_jsxs("header", { className: "flex items-center justify-between px-5 pt-5 pb-3", children: [_jsx("button", { onClick: () => navigate("/home"), className: "text-muted-foreground hover:text-foreground transition-colors", children: _jsx(X, { className: "w-6 h-6" }) }), _jsx("h1", { className: "font-display font-bold text-foreground", children: "Quiz Results" }), _jsx("div", { className: "w-6" })] }), !showReview ? (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "px-5", children: [_jsx("div", { className: "flex justify-center mb-4 mt-4", children: _jsx("div", { className: "w-16 h-16 rounded-full bg-secondary flex items-center justify-center", children: _jsx(Trophy, { className: "w-8 h-8 text-primary" }) }) }), _jsx("h2", { className: "text-2xl font-display font-bold text-foreground text-center mb-1", children: getMessage() }), _jsxs("p", { className: "text-sm text-muted-foreground text-center mb-8", children: ["You've completed the \"", result.category, "\" Quiz"] }), _jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "relative score-circle", children: [_jsxs("svg", { width: "200", height: "200", viewBox: "0 0 200 200", children: [_jsx("circle", { cx: "100", cy: "100", r: radius, fill: "none", stroke: "hsl(var(--secondary))", strokeWidth: "10" }), _jsx(motion.circle, { cx: "100", cy: "100", r: radius, fill: "none", stroke: "hsl(var(--primary))", strokeWidth: "10", strokeLinecap: "round", strokeDasharray: circumference, initial: { strokeDashoffset: circumference }, animate: { strokeDashoffset }, transition: { duration: 1.5, ease: "easeOut" }, transform: "rotate(-90 100 100)" })] }), _jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [_jsxs(motion.span, { className: "text-4xl font-display font-bold text-foreground", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.8 }, children: [scorePercent, "%"] }), _jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-widest", children: "Final Score" })] })] }) }), _jsxs("div", { className: "grid grid-cols-3 gap-3 mb-8", children: [_jsxs("div", { className: "quiz-card p-4 text-center", children: [_jsx(CheckCircle2, { className: "w-5 h-5 text-success mx-auto mb-2" }), _jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-widest mb-1", children: "Correct" }), _jsx("p", { className: "text-xl font-bold text-foreground", children: result.correctAnswers })] }), _jsxs("div", { className: "quiz-card p-4 text-center", children: [_jsx(XCircle, { className: "w-5 h-5 text-destructive mx-auto mb-2" }), _jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-widest mb-1", children: "Wrong" }), _jsx("p", { className: "text-xl font-bold text-foreground", children: wrong })] }), _jsxs("div", { className: "quiz-card p-4 text-center", children: [_jsx(Clock, { className: "w-5 h-5 text-primary mx-auto mb-2" }), _jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-widest mb-1", children: "Time" }), _jsxs("p", { className: "text-xl font-bold text-foreground", children: [mins, ":", secs] })] })] }), _jsxs("button", { onClick: () => setShowReview(true), className: "w-full gradient-primary text-primary-foreground py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 mb-3", children: [_jsx(Eye, { className: "w-4 h-4" }), " Review Answers"] }), _jsxs("div", { className: "flex gap-3", children: [_jsxs("button", { onClick: () => navigate(-1), className: "flex-1 quiz-card py-3.5 text-center font-semibold text-sm text-primary flex items-center justify-center gap-2", children: [_jsx(RotateCcw, { className: "w-4 h-4" }), " Try Again"] }), _jsx("button", { onClick: () => navigate("/home"), className: "flex-1 quiz-card py-3.5 text-center font-semibold text-sm text-foreground", children: "Home" })] })] })) : (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "px-5", children: [_jsx("button", { onClick: () => setShowReview(false), className: "text-primary text-sm font-semibold mb-4 flex items-center gap-1", children: "\u2190 Back to Summary" }), _jsx("div", { className: "space-y-3", children: result.answers.map((a, i) => (_jsxs("div", { className: `quiz-card p-4 border-l-4 ${a.isCorrect ? "border-l-success" : "border-l-destructive"}`, children: [_jsxs("p", { className: "text-sm font-semibold text-foreground mb-2", children: [i + 1, ". ", a.question] }), !a.isCorrect && _jsxs("p", { className: "text-xs text-destructive mb-1", children: ["Your answer: ", a.selected] }), _jsxs("p", { className: "text-xs text-success", children: ["Correct: ", a.correct] })] }, i))) })] }))] }));
};
export default Results;
