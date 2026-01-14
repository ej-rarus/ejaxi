# EJAXI 프로젝트 로드맵

## 현재 완료된 작업 (2026-01-14)

- [x] 프로젝트 생성 (Next.js 16 + Tailwind + Framer Motion)
- [x] v0로 디자인 생성 (Linear/Stripe 스타일)
- [x] GitHub 레포 연동 (https://github.com/ej-rarus/ejaxi)
- [x] Vercel 배포 (https://ejaxi.vercel.app)
- [x] v0 ↔ GitHub ↔ Vercel 자동 배포 파이프라인 구축

## 현재 상태

- **프론트엔드**: 완료 (정적 사이트)
- **백엔드/서버**: 없음
- **데이터베이스**: 없음
- **인증**: 없음

## 다음 작업 (우선순위별)

### 1. 뉴스레터 기능 (권장: 먼저 시작)

**필요한 것:**
- Supabase 프로젝트 생성
- `subscribers` 테이블 생성 (email, created_at)
- API Route 생성 (`app/api/subscribe/route.ts`)
- 프론트엔드 폼 연결

**예상 작업:**
```
app/
└── api/
    └── subscribe/
        └── route.ts    # POST: 이메일 저장
```

### 2. 블로그/아티클 기능

**옵션 A: MDX 파일 기반 (추천 - DB 불필요)**
- Contentlayer 또는 next-mdx-remote 사용
- `content/articles/` 폴더에 MDX 파일로 글 작성
- 빌드 시 정적 생성

**옵션 B: CMS 연동**
- Sanity, Strapi, Contentful 등
- 비개발자도 글 작성 가능한 UI 제공

**필요한 작업:**
```
content/
└── articles/
    ├── ai-tools-comparison.mdx
    └── getting-started-with-ax.mdx
```

### 3. 커뮤니티/댓글 기능 (복잡도 높음)

**필요한 것:**
- Supabase Auth (회원가입/로그인)
- `users`, `posts`, `comments` 테이블
- 실시간 구독 (Supabase Realtime)

**테이블 구조:**
```sql
-- users (Supabase Auth 자동 생성)

-- posts
create table posts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users,
  title text,
  content text,
  created_at timestamp default now()
);

-- comments
create table comments (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid references posts,
  user_id uuid references auth.users,
  content text,
  created_at timestamp default now()
);
```

## 기술 스택 추천

| 용도 | 추천 | 대안 |
|------|------|------|
| DB | Supabase (PostgreSQL) | Vercel Postgres, PlanetScale |
| Auth | Supabase Auth | NextAuth.js, Clerk |
| CMS | MDX 파일 기반 | Sanity, Strapi |
| 이메일 | Resend | SendGrid, Mailchimp |
| 분석 | Vercel Analytics (이미 설치됨) | - |

## 환경 변수 (나중에 필요)

```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## 참고 링크

- [Supabase 시작하기](https://supabase.com/docs/guides/getting-started)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Contentlayer (MDX)](https://contentlayer.dev/)
- [v0 프로젝트](https://v0.dev)

---

**마지막 업데이트:** 2026-01-14
