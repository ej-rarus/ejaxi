"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"

const aiTools = [
  {
    name: "Claude Code",
    description: "AI 코딩 어시스턴트로 개발 생산성을 극대화하세요.",
    icon: "🤖",
    color: "from-orange-500 to-amber-500",
    href: "#",
  },
  {
    name: "Cursor",
    description: "AI 기반 코드 에디터로 스마트한 개발 경험을 제공합니다.",
    icon: "⚡",
    color: "from-cyan-500 to-blue-500",
    href: "#",
  },
  {
    name: "ChatGPT",
    description: "대화형 AI로 다양한 업무를 효율적으로 처리하세요.",
    icon: "💬",
    color: "from-green-500 to-emerald-500",
    href: "#",
  },
  {
    name: "Midjourney",
    description: "AI 이미지 생성으로 창의적인 비주얼을 만들어보세요.",
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
    href: "#",
  },
  {
    name: "Notion AI",
    description: "문서 작성과 정리를 AI와 함께 더 스마트하게.",
    icon: "📝",
    color: "from-gray-600 to-gray-800",
    href: "#",
  },
  {
    name: "GitHub Copilot",
    description: "코드 자동 완성으로 개발 속도를 높이세요.",
    icon: "🐙",
    color: "from-blue-600 to-indigo-600",
    href: "#",
  },
]

export function AiToolsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="ai-tools" ref={ref} className="py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            AI Tools
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            추천 <span className="gradient-text">AI 도구</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            업무 효율을 높여줄 검증된 AI 도구들을 소개합니다
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {aiTools.map((tool, index) => (
            <motion.a
              key={tool.name}
              href={tool.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-transparent transition-all duration-300 ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Gradient border on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}
              />
              <div className="absolute inset-[1px] rounded-2xl bg-card group-hover:bg-card/95 transition-colors duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${tool.color} bg-opacity-10`}>
                    {tool.icon}
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-semibold mb-2 text-foreground">{tool.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>

                <div className="mt-4 flex items-center text-sm font-medium text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  자세히 보기
                  <ExternalLink className="ml-1 h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
