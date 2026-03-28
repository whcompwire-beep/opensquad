---
id: 04-design
agent: designer
execution: inline
format: image-design
outputFile: squads/marketing-instagram/output/design-system.md
---

# Step 04 — Design Visual e Renderização

## Objetivo

Criar o HTML/CSS de todos os posts (carrossel, imagem única e Stories), renderizar as imagens via Playwright e entregar os arquivos prontos para publicação.

---

## Input

- Copy completo: `squads/marketing-instagram/output/{run_id}/v1/copy.md`
- Plano de conteúdo (direção visual): `squads/marketing-instagram/output/{run_id}/v1/estrategia.md`
- Contexto da empresa: `_opensquad/_memory/company.md`

---

## Processo de Execução

### 1. Definir e documentar o Design System
Antes de criar qualquer HTML, documentar:
- Paleta de cores (extrair da direção visual do Estrategista)
- Tipografia (família, tamanhos hero/heading/body/caption)
- Espaçamento (base unit, margens, gaps)
- Elementos visuais (border radius, estilo de CTA)

Salvar em: `squads/marketing-instagram/output/{run_id}/v1/design-system.md`

### 2. Criar HTML dos slides do carrossel
Para cada slide do carrossel no copy:

**Especificações técnicas:**
- Viewport: `width: 1080px; height: 1440px`
- CSS inline, sem dependências externas (exceto Google Fonts @import)
- Layout com CSS Flexbox ou Grid
- Hierarquia: headline (≥43px, 700 weight) + supporting text (≥34px, 500 weight)
- Accent keywords em cor de acento
- Background conforme instrução do copy (light/dark/accent)
- SEM numeração de slides

Salvar em: `squads/marketing-instagram/output/{run_id}/slides/slide-01.html`, `slide-02.html`, etc.

### 3. Criar HTML da imagem única
- Viewport: `width: 1080px; height: 1080px` (square 1:1)
- Mesmo Design System
- Texto principal em destaque central
- Salvar em: `squads/marketing-instagram/output/{run_id}/slides/imagem-unica.html`

### 4. Criar HTML dos frames dos Stories
Para cada frame da sequência:
- Viewport: `width: 1080px; height: 1920px`
- Texto overlay máx. 3 linhas (≥32px, 500 weight)
- Frame interativo: representar visualmente o elemento (poll/quiz/caixa)
- Salvar em: `squads/marketing-instagram/output/{run_id}/slides/story-01.html`, etc.

### 5. Renderizar com Playwright

**Iniciar servidor HTTP:**
```bash
npx http-server squads/marketing-instagram/output/{run_id}/slides -p 8080 -c-1 &
```
Aguardar 3 segundos para o servidor subir.

**Verificar slide-01 primeiro:**
1. Navegar para `http://localhost:8080/slide-01.html`
2. Redimensionar viewport: 1080 x 1440
3. Capturar screenshot
4. Verificar visualmente: texto legível, layout equilibrado, nada cortado
5. Se houver problema: corrigir HTML e re-renderizar antes de continuar

**Renderizar todos os arquivos em lote:**
Para cada HTML:
- Navegar para a URL correspondente
- Configurar viewport correto (1440 para carrossel, 1920 para stories, 1080 para imagem única)
- Capturar screenshot
- Salvar em `squads/marketing-instagram/output/{run_id}/renders/{subpasta}/{nome}.png`

Estrutura de renders:
```
renders/
  carrossel/
    slide-01.png
    slide-02.png
    ...
  feed/
    imagem-unica.png
  stories/
    story-01.png
    story-02.png
    ...
```

**Encerrar servidor:**
```bash
kill $(lsof -t -i:8080) 2>/dev/null || true
```

### 6. Entregar brief visual
Listar todos os arquivos renderizados com seus caminhos e confirmar que o Design System está salvo para reutilização.

---

## Tratamento de Erros

- **Servidor não sobe:** Tentar porta alternativa (8081, 8082)
- **Fonts não carregam:** Adicionar fallback `sans-serif` — prosseguir sem bloquear
- **Texto cortado:** Reduzir font-size em 2-4px ou aumentar padding. Re-renderizar o slide afetado
- **Contraste insuficiente:** Escurecer o background ou clarear o texto até 4.5:1 mínimo

---

## Critérios de Qualidade

- [ ] Design System documentado antes do primeiro slide
- [ ] Todos os HTMLs são self-contained
- [ ] Nenhum texto abaixo de 34px (carrossel) ou 32px (stories)
- [ ] Slide-01 verificado visualmente antes do lote
- [ ] Todos os slides/frames renderizados e screenshots salvos
- [ ] Imagem única em 1080x1080
- [ ] Stories em 1080x1920
- [ ] Carrossel em 1080x1440
- [ ] Sem numeração de slides nas imagens
- [ ] Servidor HTTP encerrado após renderização

---

## Entrega

HTMLs em: `squads/marketing-instagram/output/{run_id}/slides/`
Renders em: `squads/marketing-instagram/output/{run_id}/renders/`
Design System: `squads/marketing-instagram/output/{run_id}/v1/design-system.md`

Entregar para: **Revisor de Qualidade** (próximo step: 05-revisao)

## Veto Conditions

- Qualquer texto abaixo do mínimo de plataforma (34px carrossel, 32px stories)
- Dimensões incorretas em qualquer arquivo
- Screenshots não gerados (arquivos não renderizados)
