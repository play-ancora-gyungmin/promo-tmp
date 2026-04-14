import type { LandingData, LandingSeoMeta } from '../../types/landing';

export function buildSeoMeta(data: LandingData): LandingSeoMeta {
  const brandName = data.brand?.brandName || 'Dococo Landing Template';
  const tagline = data.brand?.tagline || '강사 랜딩 템플릿 기본 페이지입니다.';

  return {
    title: data.seo?.title || brandName,
    description: data.seo?.description || tagline,
    ogImage: data.seo?.ogImage
  };
}
