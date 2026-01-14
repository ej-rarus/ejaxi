import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>EJAXI</h1>
        <p>
          AI Transformation 가이드. AI 도구 활용법부터 업무 자동화까지,
          실전에서 바로 적용할 수 있는 AX 노하우를 공유합니다.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <Link href="/about" className="btn btn-primary">
            <i className="fas fa-rocket"></i>
            시작하기
          </Link>
          <Link href="/tools/claude-code" className="btn btn-ghost">
            <i className="fas fa-book"></i>
            가이드 보기
          </Link>
        </div>
      </section>

      <section className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-robot"></i>
          </div>
          <h3>AI 도구 가이드</h3>
          <p>
            Claude Code, Cursor, ChatGPT 등 주요 AI 도구의 설치부터
            고급 활용법까지 단계별로 안내합니다.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-project-diagram"></i>
          </div>
          <h3>워크플로우 자동화</h3>
          <p>
            문서 작업, 데이터 분석, 개발 업무 등 반복 작업을
            AI로 자동화하는 방법을 알려드립니다.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <h3>실전 적용 사례</h3>
          <p>
            실제 업무에 AI를 적용한 사례와 그 과정에서 얻은
            인사이트를 공유합니다.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <h3>학습 경로</h3>
          <p>
            입문자부터 고급 사용자까지, 수준별 맞춤 학습 경로를
            제공합니다.
          </p>
        </div>
      </section>

      <section style={{ marginTop: '60px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>
          AX(AI Transformation)란?
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          AI Transformation은 AI 기술을 활용하여 업무 방식을 혁신하고,
          생산성을 극대화하는 것을 의미합니다. 단순히 AI 도구를 사용하는 것을 넘어,
          업무 프로세스 전반에 AI를 통합하여 새로운 가치를 창출합니다.
        </p>
      </section>
    </>
  );
}
