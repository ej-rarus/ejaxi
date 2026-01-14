import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "EJAXI - AI Transformation Guide",
  description:
    "AI를 활용한 업무 혁신 가이드. AI 도구 사용법, 워크플로우 자동화, 실전 적용 사례를 한국어로 쉽게 알려드립니다.",
  keywords:
    "AI Transformation, AX, AI 도구, Claude Code, Cursor, ChatGPT, 업무 자동화, AI 활용, 생산성",
  authors: [{ name: "EJ Lee" }],
  openGraph: {
    type: "website",
    url: "https://ejaxi.vercel.app/",
    title: "EJAXI - AI Transformation Guide",
    description:
      "AI를 활용한 업무 혁신 가이드. AI 도구 사용법부터 실전 적용까지.",
    locale: "ko_KR",
    siteName: "EJAXI",
  },
  twitter: {
    card: "summary_large_image",
    title: "EJAXI - AI Transformation Guide",
    description:
      "AI를 활용한 업무 혁신 가이드. AI 도구 사용법부터 실전 적용까지.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>"
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "EJAXI",
              description: "AI Transformation Guide - AI를 활용한 업무 혁신 가이드",
              url: "https://ejaxi.vercel.app/",
            }),
          }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
