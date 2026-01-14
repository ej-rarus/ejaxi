"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, MessageSquare, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const trends = [
  { topic: "GPT-5 출시 소식", count: "2.3k", icon: "🚀" },
  { topic: "Sora 영상 생성 AI", count: "1.8k", icon: "🎬" },
  { topic: "AI 에이전트 트렌드", count: "1.5k", icon: "🤖" },
  { topic: "코딩 AI 비교", count: "1.2k", icon: "💻" },
]

const discussions = [
  {
    title: "AI를 활용한 사이드 프로젝트 아이디어 공유",
    replies: 47,
    author: "김개발",
  },
  {
    title: "Claude vs ChatGPT, 실제 업무에서의 차이점",
    replies: 32,
    author: "이AI",
  },
  {
    title: "프롬프트 엔지니어링 팁 모음",
    replies: 28,
    author: "박프롬프트",
  },
]

export function CommunitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="community" ref={ref} className="py-24 sm:py-32 relative overflow-hidden bg-secondary/30">
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
            Community
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">커뮤니티</span>와 함께하세요
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI에 관심 있는 사람들과 인사이트를 나누고 함께 성장하세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Trending Topics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-cyan-500" />
              <h3 className="text-xl font-semibold">트렌딩 토픽</h3>
            </div>

            <div className="space-y-4">
              {trends.map((trend, index) => (
                <motion.a
                  key={trend.topic}
                  href="#"
                  className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{trend.icon}</span>
                    <span className="font-medium text-foreground group-hover:text-cyan-500 transition-colors">
                      {trend.topic}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{trend.count} 관심</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Latest Discussions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="h-5 w-5 text-blue-500" />
              <h3 className="text-xl font-semibold">최신 토론</h3>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion, index) => (
                <motion.a
                  key={discussion.title}
                  href="#"
                  className="block p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <h4 className="font-medium text-foreground group-hover:text-cyan-500 transition-colors mb-2 line-clamp-1">
                    {discussion.title}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {discussion.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      {discussion.replies} 답변
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-6 border-border hover:bg-secondary bg-transparent" asChild>
              <a href="#">
                커뮤니티 참여하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
