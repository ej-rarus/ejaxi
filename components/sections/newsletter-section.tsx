"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="newsletter" ref={ref} className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            Newsletter
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            AI 트렌드를 <span className="gradient-text">가장 먼저</span> 만나보세요
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            매주 엄선된 AI 뉴스와 실용적인 팁을 이메일로 받아보세요. 1,000명 이상의 구독자와 함께하세요.
          </p>

          {/* Newsletter Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {!isSubmitted ? (
              <>
                <Input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 bg-card border-border focus:border-cyan-500"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-8 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                >
                  <Send className="mr-2 h-4 w-4" />
                  구독하기
                </Button>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg bg-green-500/10 text-green-500"
              >
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">구독해 주셔서 감사합니다!</span>
              </motion.div>
            )}
          </motion.form>

          {/* Social Proof */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-2 border-background"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">1,000+</span> 구독자와 함께하세요
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
