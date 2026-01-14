"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const articles = [
  {
    title: "2024년 AI 트렌드: 업무 혁신을 이끄는 5가지 기술",
    excerpt: "올해 가장 주목받는 AI 기술들과 이를 업무에 적용하는 실질적인 방법을 알아봅니다.",
    category: "트렌드",
    readTime: "8분",
    date: "2024.01.15",
    featured: true,
    image: "/ai-technology-abstract-visualization.jpg",
  },
  {
    title: "Claude vs ChatGPT: 어떤 AI를 선택해야 할까?",
    excerpt: "두 대표 AI 챗봇의 장단점을 비교 분석합니다.",
    category: "비교분석",
    readTime: "6분",
    date: "2024.01.12",
    image: "/ai-chatbot-comparison.jpg",
  },
  {
    title: "AI로 이메일 작성 시간 50% 줄이는 방법",
    excerpt: "실무에서 바로 적용할 수 있는 AI 이메일 작성 팁.",
    category: "실무가이드",
    readTime: "5분",
    date: "2024.01.10",
    image: "/email-productivity-ai.jpg",
  },
  {
    title: "개발자를 위한 AI 코딩 도구 완벽 가이드",
    excerpt: "Copilot, Cursor, Claude Code를 활용한 개발 워크플로우.",
    category: "개발",
    readTime: "10분",
    date: "2024.01.08",
    image: "/coding-ai-developer-tools.jpg",
  },
]

export function ArticlesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featuredArticle = articles.find((a) => a.featured)
  const otherArticles = articles.filter((a) => !a.featured)

  return (
    <section id="articles" ref={ref} className="py-24 sm:py-32 relative overflow-hidden bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 }}
            >
              Latest Articles
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              최신 <span className="gradient-text">아티클</span>
            </h2>
          </div>
          <motion.a
            href="#"
            className="mt-4 sm:mt-0 inline-flex items-center text-cyan-500 hover:text-cyan-400 font-medium transition-colors"
            whileHover={{ x: 5 }}
          >
            모든 아티클 보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Featured Article */}
          {featuredArticle && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="group lg:row-span-2"
            >
              <a href="#" className="block h-full">
                <div className="relative h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-cyan-500/50 transition-all duration-300">
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-64 overflow-hidden">
                    <img
                      src={featuredArticle.image || "/placeholder.svg"}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20">
                        {featuredArticle.category}
                      </Badge>
                      <span className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        {featuredArticle.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-cyan-500 transition-colors">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{featuredArticle.excerpt}</p>
                    <span className="text-sm text-muted-foreground">{featuredArticle.date}</span>
                  </div>
                </div>
              </a>
            </motion.article>
          )}

          {/* Other Articles */}
          <div className="space-y-6">
            {otherArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <a
                  href="#"
                  className="group flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-cyan-500 transition-colors line-clamp-2 mb-1">
                      {article.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
