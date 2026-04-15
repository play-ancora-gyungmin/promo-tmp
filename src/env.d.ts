/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_NAVER_MAPS_CLIENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
