import { Link } from 'react-router-dom';
import { Sparkles, Compass, TrendingUp, Layers, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-16 space-y-24 font-sans">
      {/* Hero Section */}
      <section className="w-full max-w-5xl text-center space-y-8 animate-fade-in-up mt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide">
          <Sparkles size={16} />
          <span>AI-Powered Career Navigator</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
          <span className="gradient-text">AI와 함께</span> 나의 <br className="hidden md:block" /> 미래를 설계하다
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          전공, 관심사, 역량을 분석해 사용자에게 맞는 직무와 학습 로드맵을 제안하는 
          <br className="hidden md:block"/> 최첨단 AI 기반 진로 탐색 블로그입니다.
        </p>
        <div className="pt-8">
          <Link
            to="/category/ai-intro"
            className="px-8 py-4 rounded-full bg-primary hover:bg-primary-light text-white font-bold text-lg shadow-xl shadow-primary/30 transition-all flex items-center justify-center gap-2 mx-auto w-fit hover:-translate-y-1"
          >
            진로 탐색 시작하기 <Compass className="ml-2" />
          </Link>
        </div>
      </section>

      {/* 1. AI 진로 탐색이란? */}
      <section className="w-full max-w-5xl text-left bg-white rounded-3xl p-10 md:p-14 border border-slate-100 shadow-xl shadow-slate-200/50">
        <h2 className="text-3xl font-bold mb-8 text-slate-800">AI 진로 탐색이란?</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">1</span>
              기존 진로검사와의 차이점
            </h3>
            <p className="text-slate-600 leading-relaxed">단순한 성향 분석을 넘어, 실시간 산업 데이터와 사용자의 전공, 기술 스택을 종합적으로 분석해 가장 현실적이고 유망한 직무를 추천합니다.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
              대학생에게 필요한 이유
            </h3>
            <p className="text-slate-600 leading-relaxed">빠르게 변화하는 IT 시대에 맞춰 어떤 기술을 언제까지 배워야 하는지 맞춤형 로드맵을 제공하여 시행착오를 최소화합니다.</p>
          </div>
        </div>
      </section>

      {/* 2. 추천 직무 예시 */}
      <section className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">추천 직무 예시</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { major: '컴퓨터공학', job: '백엔드 개발자', desc: '대규모 서버 및 API 아키텍처 설계' },
            { major: '간호학', job: '의료 AI 데이터 분석가', desc: '의료 데이터 기반의 헬스케어 AI 모델링' },
            { major: '자율전공', job: 'UX 기획자', desc: '사용자 중심의 프로덕트 경험 설계' },
            { major: '디자인', job: 'AI 서비스 디자이너', desc: '생성형 AI를 활용한 UI/UX 디자인' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all">
              <div className="inline-block px-3 py-1 bg-slate-100 text-sm font-bold text-slate-500 rounded-full mb-4">{item.major}</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">{item.job}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. AI 학습 로드맵 & 4. 미래 유망 직업 */}
      <section className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-10 shadow-xl hover:shadow-primary/20 transition-all">
          <Layers size={40} className="mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-8">AI 학습 로드맵</h2>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <CheckCircle size={22} className="text-primary-light shrink-0 mt-0.5" />
              <div>
                <strong className="block mb-1">기초 역량</strong>
                <span className="text-primary-light/90 text-sm">파이썬 및 수학적 컴퓨팅 사고력</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle size={22} className="text-primary-light shrink-0 mt-0.5" />
              <div>
                <strong className="block mb-1">추천 공부 순서</strong>
                <span className="text-primary-light/90 text-sm">알고리즘 → ML/DL → MLOps</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle size={22} className="text-primary-light shrink-0 mt-0.5" />
              <div>
                <strong className="block mb-1">필요한 기술 스택</strong>
                <span className="text-primary-light/90 text-sm">TensorFlow, PyTorch, SQL</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle size={22} className="text-primary-light shrink-0 mt-0.5" />
              <div>
                <strong className="block mb-1">포트폴리오 준비법</strong>
                <span className="text-primary-light/90 text-sm">캐글(Kaggle) 경진대회 및 실무 클론 프로젝트</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-slate-900 text-white rounded-3xl p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-primary opacity-20 rounded-full blur-3xl"></div>
          <TrendingUp size={40} className="mb-6 text-primary" />
          <h2 className="text-3xl font-bold mb-8">미래 유망 직업 TOP 5</h2>
          <ol className="space-y-5 text-lg font-medium text-slate-300">
            {['AI 엔지니어', '데이터 분석가', '보안 전문가', 'UX 기획자', '프롬프트 엔지니어'].map((job, idx) => (
              <li key={idx} className="flex items-center gap-4 hover:text-white hover:translate-x-2 transition-all">
                <span className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center text-sm">{idx + 1}</span>
                {job}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. 프로젝트 제작 과정 */}
      <section className="w-full max-w-4xl pt-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">프로젝트 제작 과정</h2>
        <div className="relative before:content-[''] before:absolute before:left-4 md:before:left-1/2 before:-translate-x-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-slate-100">
          {[
            { step: '1', title: '아이디어 선정', desc: '진로 고민이 많은 대학생을 위한 AI 솔루션 구상' },
            { step: '2', title: '페르소나 작성', desc: '다양한 전공의 대학생 타겟층 뎁스 인터뷰 및 분석' },
            { step: '3', title: '기능 기획', desc: '로드맵, 직무 추천 등 필수 기능 정의' },
            { step: '4', title: 'UI/UX 설계', desc: '미래지향적인 흰색/파란색 테마 및 직관적 카드형 스케치' },
            { step: '5', title: '개발 및 배포', desc: 'React, Tailwind CSS를 활용한 반응형 웹 프론트엔드 구축' },
            { step: '6', title: '느낀점', desc: 'AI 기술을 활용해 실질적인 사용자 가치를 제공하는 경험의 중요성' }
          ].map((item, idx) => (
            <div key={idx} className={`relative flex items-center mb-12 flex-row md:justify-between group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block md:w-5/12"></div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-primary rounded-full flex items-center justify-center text-xs font-bold text-primary group-hover:scale-125 transition-transform z-10 shadow-md">
                {item.step}
              </div>
              <div className="pl-12 md:pl-0 w-full md:w-5/12">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-50 group-hover:shadow-lg group-hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
