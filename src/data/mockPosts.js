const categories = [
  { id: 'ai-intro', name: 'AI 진로 소개' },
  { id: 'recommended-jobs', name: '추천 직무' },
  { id: 'roadmaps', name: '학습 로드맵' },
  { id: 'projects', name: '프로젝트 제작기' },
  { id: 'future-trends', name: '미래 직업 트렌드' }
];

export const mockPosts = Array.from({ length: 50 }).map((_, i) => {
  const cat = categories[i % categories.length];
  return {
    id: `post-${i + 1}`,
    title: `[${cat.name}] CareerNavi 실전 가이드 ${i + 1}편`,
    categoryId: cat.id,
    categoryName: cat.name,
    summary: `이 포스트는 ${cat.name} 분야에 대한 유용한 인사이트와 실습 내용을 담고 있습니다. AI 시대에 대비하세요.`,
    content: `
# ${cat.name} 핵심 전략 ${i + 1}편

현대 사회에서 AI의 발달은 우리의 직업과 학습 방법에 큰 영향을 미치고 있습니다. 
특히 대학생들에게 진로 탐색의 패러다임이 완전히 바뀌고 있습니다.

## 주요 내용
1. **데이터 기반 의사결정**: 더 이상 감이 아닌 데이터로 커리어를 설계해야 합니다.
2. **AI 활용 능력**: 생산성을 높여주는 도구로서의 AI 활용은 필수입니다.
3. **지속 가능한 자기 주도 학습**: 트렌드가 빠르게 바뀌는 만큼 스스로 학습하는 역량이 가장 중요합니다.

> "미래는 AI를 잘 다루는 사람의 것입니다."

CareerNavi와 함께 당신만의 특별한 커리어 로드맵을 그려보세요.
    `,
    date: `2024-${String((i % 12) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}`,
    author: 'CareerNavi Editor'
  };
});
