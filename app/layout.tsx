import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Visual Query Assistant",
    "one_liner": "Ask questions about your screenshots, and get answers instantly!",
    "why_now": "The increased demand for remote collaboration tools due to hybrid work environments.",
    "novel_mechanism": "Combining OCR with a context-aware AI to answer queries about the screenshot content.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Vision",
      "Agents"
    ],
    "edge_use_cases": [
      "Interactive notes from lectures",
      "Quick report generation from visual data"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "OCR engine integration",
        "Query answer generation",
        "User interface for question input"
      ],
      "tools": [
        "React",
        "Firebase",
        "OpenAI API"
      ],
      "data_bootstrap": [
        "use generated queries",
        "public dataset of Q&A",
        "survey results for understanding needs"
      ],
      "risk": [
        "complexity of user queries",
        "accuracy of responses"
      ],
      "mitigation": [
        "train on common queries",
        "use user feedback for improvements"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Show before/after using traditional methods vs. our tool"
      ],
      "channels": [
        "YouTube",
        "Twitter",
        "Online communities for educators"
      ],
      "pricing": {
        "free": "Basic query and response for 10 screenshots",
        "pro": "$5/month for extended features",
        "business": "$20/month for team usage"
      }
    },
    "moat": [
      "Network effect through user-generated Q&A",
      "Integrations with popular productivity tools"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "It leverages real-time interaction and user needs, unlike traditional OCR tools that only extract text."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}