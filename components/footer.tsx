"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Heart } from "lucide-react"

const footerLinks = {
  product: [
    { name: "AX 소개", href: "#what-is-ax" },
    { name: "AI 도구", href: "#ai-tools" },
    { name: "아티클", href: "#articles" },
    { name: "커뮤니티", href: "#community" },
  ],
  resources: [
    { name: "블로그", href: "#" },
    { name: "가이드", href: "#" },
    { name: "뉴스레터", href: "#newsletter" },
    { name: "FAQ", href: "#" },
  ],
  company: [
    { name: "소개", href: "#" },
    { name: "연락처", href: "#" },
    { name: "개인정보처리방침", href: "#" },
    { name: "이용약관", href: "#" },
  ],
}

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <motion.a href="#" className="inline-block mb-4" whileHover={{ scale: 1.02 }}>
              <span className="text-2xl font-bold gradient-text">EJAXI</span>
            </motion.a>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              AI로 일하는 방식을 바꾸다. AI Transformation Guide for Everyone.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">제품</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">리소스</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">회사</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 EJAXI. All rights reserved.</p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by EJ Lee
          </p>
        </div>
      </div>
    </footer>
  )
}
