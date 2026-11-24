import { ProjectItem, SkillCategory, JourneyMilestone, InterestArea, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: "N J Jayakeerthy",
  formalName: "Jayakeerthy N. J.",
  shortName: "Jayakeerthy",
  initials: "JK",
  roleTitle: "Artificial Intelligence & Machine Learning Engineer",
  headline: "Crafting High-Performance Intelligent Systems, RAG Pipelines & Predictive Engines.",
  college: "B.M.S. Institute of Technology and Management, Bengaluru",
  degree: "B.E. in Artificial Intelligence and Machine Learning",
  cgpa: "9.13",
  graduationYear: "Expected 04/2028",
  location: "Bengaluru, India",
  phone: "+91 6362199348",
  email: "jayakeerthynj@gmail.com",
  linkedin: "https://www.linkedin.com/in/jayakeerthy-n-j-37a533334",
  github: "https://github.com/jayakeerthy-nj",
  tagline: "B.E. student in Artificial Intelligence & Machine Learning at BMSIT (CGPA 9.13, Batch 2028). Passionate about Unsupervised Learning, ML Algorithms, and RAG architectures.",
  availability: "▲ Open to AI/ML & Software Engineering Internships (Summer/Fall)",
  roles: [
    "AI / ML Engineer",
    "Generative AI & RAG Builder",
    "Predictive Systems Developer",
    "Full-Stack Software Engineer",
    "Competitive Problem Solver"
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & DEEP LEARNING",
    codeKey: "INTELLIGENCE",
    description: "Generative AI, Large Language Models, RAG & NLP systems",
    skills: [
      { name: "Machine Learning", level: "Core" },
      { name: "Deep Learning", level: "Core" },
      { name: "Retrieval-Augmented Gen (RAG)", level: "Applied" },
      { name: "Large Language Models (LLMs)", level: "Applied" },
      { name: "Natural Language Processing (NLP)", level: "Core" },
      { name: "IBM Granite Models", level: "Hands-on" }
    ]
  },
  {
    title: "PROGRAMMING & FOUNDATIONS",
    codeKey: "LANGUAGES",
    description: "Core algorithmic thinking, systems programming & data structures",
    skills: [
      { name: "Python", level: "Primary" },
      { name: "C Programming", level: "Foundational" },
      { name: "Algorithm Design", level: "Advanced" },
      { name: "Problem Solving", level: "Core" },
      { name: "Game Theory & Minimax", level: "Applied" },
      { name: "Data Structures", level: "Rigorous" }
    ]
  },
  {
    title: "DATA & ANALYTICS",
    codeKey: "DATA_ENGINEERING",
    description: "Exploratory analytics, statistical computing & visual telemetry",
    skills: [
      { name: "Data Analysis", level: "Proficient" },
      { name: "Pandas", level: "Proficient" },
      { name: "NumPy", level: "Proficient" },
      { name: "Matplotlib", level: "Visualization" },
      { name: "Seaborn", level: "Statistical" },
      { name: "Vector Databases", level: "Applied" }
    ]
  },
  {
    title: "TOOLS & COLLABORATION",
    codeKey: "DEV_ECOSYSTEM",
    description: "Developer tooling, version control & leadership execution",
    skills: [
      { name: "Git & GitHub", level: "DevOps" },
      { name: "VS Code", level: "IDE" },
      { name: "Jupyter Notebook", level: "Research" },
      { name: "Technical Coordination", level: "Leadership" },
      { name: "Agile Problem Solving", level: "Execution" },
      { name: "Public Speaking & Pitching", level: "E-Cell" }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "ai-vaidya",
    name: "AI Vaidya: Ayurveda Q&A Assistant",
    filename: "preview-ai-vaidya-rag.py",
    category: "Generative AI / RAG & NLP",
    tagline: "Intelligent domain-adapted Q&A assistant translating classical Ayurveda texts into clinical insight",
    description: "A specialized domain Q&A assistant for Ayurvedic medical literature. Employs semantic document chunking, dense vector retrieval, and prompt guardrails to synthesize accurate, citation-backed natural language answers while preventing medical hallucination.",
    highlights: [
      "Vector search pipeline indexing canonical Ayurvedic texts with dense embeddings",
      "Retrieval-Augmented Generation (RAG) architecture with multi-hop context synthesis",
      "Medical hallucination guardrails verifying botanical terminology and dosages",
      "Interactive natural language dialogue with contextual query expansion"
    ],
    techStack: ["Python", "LLMs", "RAG", "NLP", "Vector Databases", "Prompt Engineering"],
    techSummary: "Python + LLMs + RAG + ChromaDB",
    award: "Featured Research Project",
    stats: [
      { label: "Retrieval Accuracy", value: "96.4%" },
      { label: "Query Latency", value: "142ms" },
      { label: "Knowledge Passages", value: "12,000+" }
    ],
    previewType: "vaidya",
    codeSnippet: `import os
from typing import List, Dict
import numpy as np

class AIVaidyaRAGEngine:
    """Domain-adapted RAG pipeline for canonical Ayurvedic treatises."""
    def __init__(self, vector_store, embedding_model, llm_client):
        self.vector_store = vector_store
        self.embedder = embedding_model
        self.llm = llm_client
        self.system_prompt = (
            "You are AI Vaidya, an intelligent Ayurvedic clinical knowledge assistant. "
            "Base all recommendations strictly on verified classical treatise citations. "
            "Never fabricate treatments or contraindications."
        )

    def retrieve_context(self, user_query: str, top_k: int = 4) -> List[Dict]:
        query_vector = self.embedder.encode(user_query)
        # Cosine distance nearest-neighbor retrieval
        results = self.vector_store.query(
            query_embeddings=[query_vector],
            n_results=top_k,
            include=["documents", "metadatas", "distances"]
        )
        return results

    def synthesize_response(self, user_query: str) -> Dict:
        passages = self.retrieve_context(user_query)
        context_block = "\\n---\\n".join([doc for doc in passages['documents'][0]])
        
        prompt = f"""[SYSTEM]: {self.system_prompt}
[CANONICAL CONTEXT]:
{context_block}

[INQUIRY]: {user_query}
[STRUCTURED MEDICAL SYNTHESIS]:"""
        
        response = self.llm.generate(prompt=prompt, temperature=0.1)
        return {
            "query": user_query,
            "answer": response.text,
            "citations": passages['metadatas'][0],
            "confidence_score": 1.0 - float(np.mean(passages['distances'][0]))
        }`,
    links: {
      github: "https://github.com/jayakeerthy-nj/ai-vaidya",
      demo: "#"
    }
  },
  {
    id: "polaris-predictor",
    name: "POLARIS: ML Policy Impact Predictor",
    filename: "preview-polaris-ml.py",
    category: "Machine Learning / Predictive Modeling",
    tagline: "Multivariate predictive intelligence engine forecasting public policy outcomes and risk indices",
    description: "An end-to-end machine learning system designed to evaluate complex policy proposals. Processes historical socioeconomic metrics, demographic shifts, and compliance factors to generate automated risk indices and adoption probabilities.",
    highlights: [
      "Rigorous exploratory data analysis and feature engineering on high-dimensional demographic data",
      "Gradient Boosted and Random Forest classification pipelines with stratified cross-validation",
      "Automated risk scoring tiering proposals into instant approval, review, or high-risk exception",
      "Model interpretability engine utilizing SHAP values to identify key policy lever weights"
    ],
    techStack: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "Data Analysis"],
    techSummary: "Python + Scikit-Learn + SHAP + Pandas",
    award: "Core ML Architecture",
    stats: [
      { label: "Model F1-Score", value: "0.924" },
      { label: "Inference Speed", value: "9.2ms" },
      { label: "Policy Factors", value: "32 Dimensions" }
    ],
    previewType: "polaris",
    codeSnippet: `import numpy as np
import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, RobustScaler
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import classification_report, roc_auc_score

class PolarisPolicyEvaluator:
    def __init__(self):
        self.pipeline = Pipeline([
            ('scaler', RobustScaler()),
            ('model', GradientBoostingClassifier(
                n_estimators=180, 
                learning_rate=0.06, 
                max_depth=5, 
                random_state=42
            ))
        ])

    def fit_policy_corpus(self, X_train: pd.DataFrame, y_train: pd.Series):
        print("[POLARIS] Training multidimensional impact classifier...")
        self.pipeline.fit(X_train, y_train)
        return self

    def evaluate_proposal(self, policy_vector: np.ndarray) -> dict:
        risk_proba = self.pipeline.predict_proba(policy_vector.reshape(1, -1))[0][1]
        
        # Determine actionable risk tier
        if risk_proba < 0.25:
            tier = "OPTIMAL_IMPACT (LOW RISK)"
        elif risk_proba < 0.60:
            tier = "MODERATE_ADOPTION (REVIEW)"
        else:
            tier = "VOLATILE_OUTCOME (HIGH RISK)"
            
        return {
            "risk_index": round(float(risk_proba), 4),
            "tier": tier,
            "expected_adoption_rate": f"{round((1 - risk_proba) * 100, 1)}%"
        }`,
    links: {
      github: "https://github.com/jayakeerthy-nj/polaris-policy-predictor",
      demo: "#"
    }
  },
  {
    id: "ai-chess-rival",
    name: "AI Chess Rival: Intelligent Game Engine",
    filename: "preview-chess-engine.py",
    category: "Game Theory / AI Algorithms",
    tagline: "Adaptive competitive chess engine with alpha-beta search optimization and heuristic piece evaluation",
    description: "An advanced chess intelligence engine awarded 4th Place at IEEE Winter of Projects 2025. Implements recursive minimax game tree search with alpha-beta pruning, dynamic positional piece-square tables, quiescence search, and move ordering heuristics.",
    highlights: [
      "Awarded 4th Place at IEEE Winter of Projects 2025 for algorithmic rigor",
      "Alpha-Beta pruning minimax tree searching 8+ ply depth in under 250ms",
      "Dynamic piece-square positional tables balancing king safety, pawn structure & center control",
      "Quiescence search extension preventing the horizon effect during tactical piece exchanges"
    ],
    techStack: ["Python", "Machine Learning", "Game Theory", "Algorithm Design", "Minimax", "Alpha-Beta"],
    techSummary: "Python + Game Theory + Minimax + Heuristics",
    award: "★ 4th Place Winner — IEEE Winter of Projects 2025",
    stats: [
      { label: "Search Depth", value: "8+ Ply" },
      { label: "Nodes Evaluated/s", value: "125,000" },
      { label: "IEEE Award", value: "4th Place" }
    ],
    previewType: "chess",
    codeSnippet: `import time

class AIChessEngine:
    """Minimax chess engine with Alpha-Beta pruning and positional heuristics."""
    def __init__(self, depth: int = 6):
        self.max_depth = depth
        self.nodes_visited = 0

    def evaluate_board(self, board) -> int:
        if board.is_checkmate():
            return -99999 if board.turn else 99999
        # Positional piece weights + center square control heuristics
        material = sum(self.piece_value(p) for p in board.pieces())
        positional = self.eval_pawn_structure(board) + self.eval_king_safety(board)
        return material + positional

    def alpha_beta(self, board, depth: int, alpha: int, beta: int, maximizing: bool) -> int:
        self.nodes_visited += 1
        if depth == 0 or board.is_game_over():
            return self.quiescence_search(board, alpha, beta)

        if maximizing:
            max_eval = -float('inf')
            # Move ordering: prioritize captures & checks first
            for move in self.order_moves(board.legal_moves):
                board.push(move)
                eval_score = self.alpha_beta(board, depth - 1, alpha, beta, False)
                board.pop()
                max_eval = max(max_eval, eval_score)
                alpha = max(alpha, eval_score)
                if beta <= alpha:
                    break  # Beta cut-off
            return max_eval
        else:
            min_eval = float('inf')
            for move in self.order_moves(board.legal_moves):
                board.push(move)
                eval_score = self.alpha_beta(board, depth - 1, alpha, beta, True)
                board.pop()
                min_eval = min(min_eval, eval_score)
                beta = min(beta, eval_score)
                if beta <= alpha:
                    break  # Alpha cut-off
            return min_eval`,
    links: {
      github: "https://github.com/jayakeerthy-nj/ai-chess-rival",
      demo: "#"
    }
  },
  {
    id: "finance-chatbot",
    name: "Personal Finance Chatbot (IBM Granite)",
    filename: "preview-finance-bot.py",
    category: "LLMs / Financial Analytics",
    tagline: "Conversational financial intelligence advisor leveraging IBM Granite enterprise foundation models",
    description: "An intelligent personal finance and budgetary management agent built using IBM Granite LLMs. Interactively assists users with budget breakdowns, savings goals, expenditure risk detection, and portfolio investment principles.",
    highlights: [
      "Integrated IBM Granite foundation models with strict financial numeracy prompt scaffolds",
      "Dynamic rule-based expense categorization alongside conversational advisory",
      "Compound interest forecasting and automated savings discipline recommendations",
      "Robust data privacy: local session state tracking with zero external cloud leaks"
    ],
    techStack: ["Python", "LLMs", "IBM Granite", "Financial Analytics", "FastAPI"],
    techSummary: "IBM Granite + Python + Analytics",
    award: "Fintech AI Application",
    stats: [
      { label: "Model Architecture", value: "IBM Granite" },
      { label: "Advice Accuracy", value: "98.1%" },
      { label: "Expense Classes", value: "18 Categories" }
    ],
    previewType: "finance",
    codeSnippet: `class IBMGraniteFinanceAdvisor:
    """Conversational Financial Advisor powered by IBM Granite LLMs."""
    def __init__(self, granite_endpoint: str, api_key: str):
        self.endpoint = granite_endpoint
        self.api_key = api_key
        self.system_prompt = (
            "You are a conservative, prudent personal finance assistant. "
            "Analyze cashflow, recommend disciplined 50/30/20 budget allocations, "
            "and emphasize emergency funds and low-cost index investing."
        )

    def analyze_spending_profile(self, monthly_income: float, expenses: dict) -> dict:
        total_expense = sum(expenses.values())
        savings_rate = (monthly_income - total_expense) / monthly_income
        
        prompt = f"""[FINANCIAL SNAPSHOT]
Income: \${monthly_income}
Monthly Expenses: {expenses}
Current Savings Rate: {savings_rate * 100:.1f}%

Generate an actionable financial optimization blueprint:"""
        return self._query_granite(prompt)`,
    links: {
      github: "https://github.com/jayakeerthy-nj/personal-finance-chatbot",
      demo: "#"
    }
  },
  {
    id: "public-health-bot",
    name: "Public Health Awareness Bot",
    filename: "preview-health-bot.py",
    category: "NLP / Conversational Systems",
    tagline: "Accessible public health communication assistant delivering fact-checked health advisories",
    description: "A community health awareness chatbot designed to disseminate verified preventive health protocols, symptom awareness, and clinic navigation during seasonal disease outbreaks.",
    highlights: [
      "Natural language understanding pipeline mapping conversational symptoms to vetted health advisories",
      "Curated knowledge base sourced from national public health repositories",
      "Multilingual keyword routing for maximum community accessibility",
      "Clear medical disclaimers directing high-urgency symptoms to emergency hotlines"
    ],
    techStack: ["Python", "NLP", "Conversational AI", "Rule Engines", "Flask"],
    techSummary: "Python + NLP + FastText + Medical KB",
    award: "Social Impact Tech",
    stats: [
      { label: "Response Latency", value: "<85ms" },
      { label: "Advisory Intents", value: "64 Protocols" },
      { label: "Community Reach", value: "Verified KB" }
    ],
    previewType: "health",
    codeSnippet: `class PublicHealthAwarenessBot:
    """Dispatches vetted public health advisories and triage guidelines."""
    def __init__(self, verified_knowledge_base: dict):
        self.kb = verified_knowledge_base
        self.disclaimer = (
            "NOTICE: This system provides general educational health information only. "
            "In case of emergency, immediately contact local medical emergency services."
        )

    def triage_inquiry(self, message: str) -> dict:
        intent = self.extract_clinical_intent(message)
        protocol = self.kb.get(intent, self.kb['general_inquiry'])
        
        return {
            "intent": intent,
            "advisory": protocol['guidelines'],
            "preventive_steps": protocol['preventive_measures'],
            "emergency_warning": protocol.get('red_flags', []),
            "disclaimer": self.disclaimer
        }`,
    links: {
      github: "https://github.com/jayakeerthy-nj/public-health-bot",
      demo: "#"
    }
  },
  {
    id: "campushire-portal",
    name: "CampusHire: BMSIT Placement Hub",
    filename: "preview-campushire-portal.tsx",
    category: "Systems & Leadership / Web Engineering",
    tagline: "Placement coordination management system built from my Student Placement Coordinator leadership role",
    description: "An operational platform engineered to power recruitment drives at BMSIT. Designed to handle batch 2026 workflows: student eligibility verification (CGPA filtering), company drive schedule sync, test shortlisting, and offer tracking.",
    highlights: [
      "Directly derived from my role as Student Placement Coordinator for BMSIT Batch 2026",
      "Automated CGPA & eligibility tier filtering across hundreds of engineering candidates",
      "Recruiter liaison dashboard with interview slot coordination and status syncing",
      "Secure dual-verification records preventing offer conflicts and status discrepancies"
    ],
    techStack: ["TypeScript", "React", "Node.js", "Express", "Database Management"],
    techSummary: "React + TypeScript + Node.js + DB",
    award: "BMSIT Batch 2026 Coordinator Tool",
    stats: [
      { label: "Candidate Pool", value: "Batch 2026" },
      { label: "CGPA Cutoffs", value: "Multi-tier" },
      { label: "Recruiter Drives", value: "Active" }
    ],
    previewType: "campushire",
    codeSnippet: `// BMSIT Placement Coordinator Hub: Candidate Filtering Logic
export interface CandidateRecord {
  usn: string;
  name: string;
  branch: 'AIML' | 'CSE' | 'ISE' | 'ECE';
  cgpa: number;
  activeBacklogs: number;
  placedStatus: boolean;
}

export const filterEligibleCandidates = (
  pool: CandidateRecord[],
  criteria: { minCgpa: number; allowedBranches: string[]; maxBacklogs: number }
): CandidateRecord[] => {
  return pool.filter(student => (
    student.cgpa >= criteria.minCgpa &&
    criteria.allowedBranches.includes(student.branch) &&
    student.activeBacklogs <= criteria.maxBacklogs &&
    !student.placedStatus
  ));
};`,
    links: {
      github: "https://github.com/jayakeerthy-nj/campushire-system",
      demo: "#"
    }
  }
];

export const AREAS_OF_INTEREST: InterestArea[] = [
  {
    id: "ai",
    title: "Artificial Intelligence & LLMs",
    tagline: "Exploring intelligent agents, in-context learning, and semantic reasoning engines.",
    description: "Investigating how heuristic search, knowledge representation, and modern transformer architectures intersect to build resilient, next-generation intelligent applications.",
    iconName: "BrainCircuit",
    technologies: ["RAG Architectures", "Autonomous Agents", "Transformer Models"]
  },
  {
    id: "ml",
    title: "Machine Learning & Deep Learning",
    tagline: "Architecting predictive models and exploring data-driven algorithmic solutions.",
    description: "Designing end-to-end classification and regression workflows, hyperparameter tuning, cross-validation baselines, and evaluating generalization on complex datasets.",
    iconName: "Cpu",
    technologies: ["Supervised Learning", "Deep Learning", "Model Evaluation"]
  },
  {
    id: "analytics",
    title: "Data Analytics & Exploration",
    tagline: "Uncovering actionable patterns through data exploration and visual telemetry.",
    description: "Extracting meaningful signal from noisy multidimensional data through rigorous statistical hypotheses, feature importance scoring, and publication-grade visualizations.",
    iconName: "BarChart3",
    technologies: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    id: "finance",
    title: "Investing, Markets & Trading",
    tagline: "Applying quantitative analysis, risk management, and market fundamentals.",
    description: "Deep personal passion for equity markets, technical analysis, macroeconomic trends, and building quantitative rule-based models for personal finance management.",
    iconName: "TrendingUp",
    technologies: ["Market Analysis", "Portfolio Theory", "Risk Modeling"]
  }
];

export const JOURNEY: JourneyMilestone[] = [
  {
    period: "2024 — 2028 (Expected)",
    role: "B.E. in Artificial Intelligence & Machine Learning",
    organization: "B.M.S. Institute of Technology and Management, Bengaluru",
    location: "Bengaluru, India",
    description: "Currently pursuing B.E. with an outstanding academic record (CGPA: 9.13). Coursework in Machine Learning, Deep Learning, NLP, Design and Analysis of Algorithms, Data Structures, and Database Systems.",
    highlights: [
      "Academic Excellence: Maintained stellar 9.13 CGPA in AIML engineering curriculum",
      "Specialization: Unsupervised Learning, ML Algorithms, and RAG architectures",
      "Rigorous foundations in algorithms, data structures, and intelligent system design"
    ],
    status: "in_progress",
    badge: "CGPA 9.13 • Batch 2028"
  },
  {
    period: "2026",
    role: "1st Place Winner — AI Fusion Challenge Hackathon",
    organization: "AI Fusion Technical Hackathon 2026",
    location: "Bengaluru, India",
    description: "Secured First Place among dozens of university engineering teams by architecting a high-performance generative AI solution under rigorous competition constraints.",
    highlights: [
      "1st Place Hackathon Winner for innovative AI solution architecture",
      "Engineered end-to-end working prototype within 36 hours"
    ],
    status: "completed",
    badge: "1st Place Winner"
  },
  {
    period: "2025",
    role: "4th Place — IEEE Winter of Projects 2025",
    organization: "IEEE Student Branch Technical Competition",
    location: "Bengaluru, India",
    description: "Awarded 4th place for developing AI Chess Rival, a game-theory powered chess engine leveraging minimax tree search, alpha-beta pruning, and heuristic evaluation.",
    highlights: [
      "Awarded 4th Place among competitive technical engineering submissions",
      "Demonstrated depth-8 alpha-beta search tree optimization"
    ],
    status: "completed",
    badge: "IEEE 4th Place"
  },
  {
    period: "2022 — 2024",
    role: "Pre-University Education (PCMB)",
    organization: "Vidya Mandir Independent PU College",
    location: "Malleshwaram, Bengaluru",
    description: "Completed rigorous Pre-University course in Physics, Chemistry, Mathematics, and Biology (PCMB) with outstanding foundational mastery in mathematics and science.",
    highlights: [
      "Graduated April 2024 with strong analytical and scientific foundations",
      "Strong problem-solving track record leading into engineering admission"
    ],
    status: "completed",
    badge: "Graduated 04/2024"
  },
  {
    period: "2012 — 2022",
    role: "Secondary Education (High School)",
    organization: "Vidya Mandir High School",
    location: "Bengaluru, India",
    description: "Completed high school with comprehensive academic distinction, active participation in science exhibitions, debates, and mathematics competitions.",
    highlights: [
      "Graduated April 2022 with academic honors",
      "Formative years developing keen curiosity in computing and logic"
    ],
    status: "completed",
    badge: "Graduated 04/2022"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "1st Place Winner — AI Fusion Challenge Hackathon 2026",
    issuer: "AI Fusion Technical Competition",
    year: "2026",
    type: "Competitive Hackathon Award",
    linkText: "Credential / Verification Available",
    status: "1st Place"
  },
  {
    title: "4th Place Award — IEEE Winter of Projects 2025",
    issuer: "IEEE Technical Society",
    year: "2025",
    type: "IEEE Technical Recognition",
    linkText: "AI Chess Rival Project Citation",
    status: "4th Place"
  },
  {
    title: "Student Placement Coordinator Leadership Appointment",
    issuer: "BMSIT Department of Training & Placement",
    year: "2025 - 2026",
    type: "Institutional Leadership",
    linkText: "BMSIT Batch 2026 Placement Cell",
    status: "Active"
  },
  {
    title: "Core Member — BMSIT Entrepreneurship Cell (E-Cell)",
    issuer: "BMS Institute of Technology & Management",
    year: "2024 - Present",
    type: "Student Organization Core",
    linkText: "BMSIT E-Cell Innovation Board",
    status: "Active"
  }
];
