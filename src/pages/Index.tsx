import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Trophy, TrendingUp, Zap } from "lucide-react";
import { CATEGORIES, getQuizHistory, getStats } from "@/lib/quiz-api";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const history = getQuizHistory();
  const stats = getStats();

  const filtered = CATEGORIES.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <header className="flex items-center justify-between px-5 pt-6 pb-4">
        <h1 className="text-xl font-display font-bold text-foreground">
          Dex Quiz
        </h1>

        <div className="quiz-card px-3 py-1.5 flex items-center gap-1.5">
          <Trophy className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">
            {stats.totalPoints}
          </span>
        </div>
      </header>

      {/* Search */}
      <div className="px-5 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search quizzes, topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-card border border-border rounded-xl py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
          />
        </div>
      </div>

      {/* Daily Challenge Banner */}
      <div className="px-5 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="gradient-hero rounded-2xl p-6 relative overflow-hidden"
        >
          <div className="absolute top-3 left-4">
            <span className="bg-success text-success-foreground text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Live Now
            </span>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-display font-bold text-primary-foreground mb-1">
              Daily Challenge
            </h2>

            <p className="text-primary-foreground/80 text-sm mb-1">
              Test your knowledge today!
            </p>

            <div className="flex items-center gap-1.5 mb-4">
              <Zap className="w-4 h-4 text-warning" />
              <span className="text-warning text-sm font-medium">
                Win 50 bonus points
              </span>
            </div>

            <button
              onClick={() =>
                navigate("/quiz-setup?category=9&difficulty=medium&amount=10")
              }
              className="bg-white/95 text-background font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-white transition-colors"
            >
              Start Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* The rest of your component remains unchanged */}
    </div>
  );
};

export default Index;