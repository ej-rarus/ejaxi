"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Zap, Target } from "lucide-react"

const benefits = [
  {
    icon: Sparkles,
    title: "혁신적인 업무 방식",
    description: "AI를 활용하여 반복적인 작업을 자동화하고 창의적인 업무에 집중하세요.",
  },
  {
    icon: Zap,
    title: "생산성 극대화",
    description: "AI 도구들을 효과적으로 활용하여 업무 효율을 획기적으로 향상시킵니다.",
  },
  {
    icon: Target,
    title: "맞춤형 AI 전략",
    description: "당신의 업무 환경에 최적화된 AI 활용 전략을 제시합니다.",
  },
]

export function WhatIsAxSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="what-is-ax" ref={ref} className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            What is AX?
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">AI Transformation</span>이란?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AX(AI Transformation)는 인공지능을 활용하여 개인과 조직의 업무 방식을 혁신적으로 변화시키는 것을 의미합니다.
            단순한 도구 사용을 넘어, AI와 함께 성장하는 새로운 패러다임입니다.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <div className="group relative h-full p-8 rounded-2xl bg-card border border-border hover:border-cyan-500/50 transition-all duration-300">
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <benefit.icon className="h-7 w-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
