# Sanches & Muniz — Site institucional

Site do escritório **Sanches & Muniz Advocacia e Consultoria** (React + Vite + TypeScript + Tailwind).

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build e preview

```bash
npm run build
npm run preview
```

## Variáveis de ambiente

Copie `.env.example` para `.env`:

| Variável | Descrição |
|----------|-----------|
| `VITE_SITE_URL` | URL canônica (ex.: `https://www.sanchesemuniz.com`) |
| `VITE_ANALYTICS_ENABLED` | `true` para exibir banner de cookies e carregar ferramentas após consentimento |
| `VITE_CLARITY_PROJECT_ID` | ID do projeto no [Microsoft Clarity](https://clarity.microsoft.com) (mapas de calor e gravações) |
| `VITE_PLAUSIBLE_DOMAIN` | Domínio no Plausible (opcional, estatísticas agregadas) |

## Imagens

Gere versões WebP (recomendado após alterar fotos em `public/`):

```bash
npm run optimize-images
```

**O que manter:** os `.jpeg` / `.png` originais **e** os `.webp` gerados. O componente `OptimizedImage` entrega WebP nos navegadores compatíveis e usa o JPEG/PNG como fallback.

Você pode apagar duplicatas de capitalização no macOS (ex.: `Time.webp` e `time.webp` se forem o mesmo arquivo) — mantenha um par por foto: `time.jpeg` + `time.webp`.

## Deploy

1. Defina `VITE_SITE_URL` no ambiente de build.
2. Publique a pasta `dist/`.
3. SPA: redirecione todas as rotas para `index.html` (já incluído em `public/_redirects` para Netlify).
4. `/about` redireciona para `/quem-somos` (301 no `_redirects`).
5. Envie o sitemap no [Google Search Console](https://search.google.com/search-console).

### SEO (pré-render)

O site é uma SPA; meta tags são atualizadas via JavaScript. Para indexação máxima, considere prerender das rotas no build (Netlify Prerendering, Cloudflare, ou plugin SSG).

## Personalização

- **Redes sociais:** `src/config/site.ts` (`SOCIAL`)
- **Depoimentos:** `src/data/testimonials.ts` (substitua por depoimentos reais autorizados)
- **FAQ:** `src/data/faq.ts`

## Rotas

| Rota | Página |
|------|--------|
| `/` | Início |
| `/quem-somos` | Equipe |
| `/servicos` | Áreas de atuação |
| `/servicos/:id` | Detalhe do serviço |
| `/contato` | Formulário + FAQ |
| `/privacidade` | LGPD |
