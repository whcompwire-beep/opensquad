---
id: 03-copy
agent: copywriter
execution: inline
format: instagram-feed
outputFile: squads/marketing-instagram/output/copy.md
---

# Step 03 — Criação de Copy

## Objetivo

Escrever o copy completo de todos os posts definidos na estratégia: slides do carrossel, imagem única, frames dos Stories, legendas e hashtags. Tudo pronto para o Designer usar diretamente.

---

## Input

- Plano de conteúdo: `squads/marketing-instagram/output/{run_id}/v1/estrategia.md`
- Brief de pesquisa (vocabulário do público): `squads/marketing-instagram/output/{run_id}/v1/pesquisa.md`
- Briefing do cliente: `squads/marketing-instagram/output/{run_id}/briefing.md`
- Contexto da empresa: `_opensquad/_memory/company.md`

---

## Processo de Execução

### 1. Ler todos os inputs
Absorver: ângulo escolhido, estrutura de cada slide, CTA de cada post, tom de voz, vocabulário nativo do público.

### 2. Escrever cada slide do carrossel
Para CADA slide definido no plano do Estrategista:
- **Headline:** afirmação principal, bold, máx. 15 palavras
- **Supporting text:** aprofundamento, 2-4 frases (total slide: 40-80 palavras)
- **Accent keywords:** palavras a destacar em cor de acento
- **Background:** light / dark / accent (conforme instrução do Estrategista, alternando para criar ritmo)

### 3. Escrever a imagem única
- Texto principal que ocupa o visual (máx. 20 palavras)
- Subtexto de apoio (opcional, máx. 10 palavras)

### 4. Escrever os frames dos Stories
Para cada frame:
- Texto do overlay (máx. 2-3 linhas curtas, tom casual)
- Para o frame interativo: escrever o prompt exato + as opções (ex: Poll: "Você já tentou isso?" | "Sim, já!" vs "Ainda não")

### 5. Escrever as legendas completas
Para o carrossel e a imagem única:
- **Hook:** primeiros 125 chars que funcionam standalone para compelir o "ver mais"
- **Corpo:** expansão do argumento com quebras de linha generosas
- **Pergunta final:** pergunta aberta e específica que impulsiona comentários
- **Sem links** na legenda

### 6. Selecionar hashtags
Para cada post (5-15 hashtags):
- 3-5 hashtags nichadas (10K-100K posts)
- 3-5 hashtags médias (100K-500K posts)
- 2-3 hashtags amplas (500K+ posts)
- Em português quando o público é BR

---

## Template de Output

O output deve seguir exatamente este formato, sem placeholders:

```
✍️ COPY COMPLETO — [TEMA] — [CLIENTE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

════════════════════════════════
POST 1 — CARROSSEL: [formato/título]
════════════════════════════════

=== SLIDES ===

Slide 1 (Cover):
  Headline: [título bold — máx 20 palavras]
  Supporting text: [subtítulo ou contexto — opcional no cover]
  Accent keywords: [palavras a destacar]
  Background: dark (cover)

Slide 2 ([Papel]):
  Headline: [afirmação principal — máx 15 palavras]
  Supporting text: [contexto ou dado — 2-4 frases. Total 40-80 palavras.]
  Accent keywords: [palavras a destacar]
  Background: light

Slide 3 ([Papel]):
  Headline: [...]
  Supporting text: [...]
  Accent keywords: [...]
  Background: dark

[... todos os slides ...]

Slide N (CTA):
  Headline: [frase de encerramento]
  Supporting text: [instrução específica de ação]
  Accent keywords: [...]
  Background: accent

=== LEGENDA DO CARROSSEL ===
[Hook — exatamente os primeiros 125 chars standalone]

[Linha em branco]
[Corpo — expandir o argumento com quebras de linha a cada 2-3 frases]

[Linha em branco]
[Pergunta final aberta e específica]

=== HASHTAGS DO CARROSSEL ===
#hashtag1 #hashtag2 #hashtag3 [... 5-15 total]

════════════════════════════════
POST 2 — IMAGEM ÚNICA: [conceito]
════════════════════════════════

=== VISUAL ===
Texto principal: [frase/stat central — máx 20 palavras]
Subtexto: [apoio ou contexto — máx 10 palavras, opcional]

=== LEGENDA DA IMAGEM ÚNICA ===
[Hook 125 chars]

[Corpo]

[Pergunta final]

=== HASHTAGS DA IMAGEM ÚNICA ===
#hashtag1 #hashtag2 ...

════════════════════════════════
POST 3 — STORIES (sequência de [N] frames)
════════════════════════════════

Frame 1 (Opener):
  Texto overlay: [máx 2 linhas grandes e impactantes]

Frame 2 (Contexto):
  Texto overlay: [máx 3 linhas curtas]

Frame 3 (Contexto):
  Texto overlay: [máx 3 linhas]

Frame 4 (Interativo — [tipo]):
  Texto do prompt: [setup/pergunta que leva ao elemento interativo]
  [Poll: "Opção A" vs "Opção B"]
  [OU Quiz: "Pergunta?" — Correto: [X] / Errado: [Y] / Errado: [Z]]
  [OU Caixa de perguntas: "Me pergunta sobre [tema]"]

Frame 5 (Fechamento):
  Texto overlay: [conclusão ou CTA — máx 2 linhas]
  CTA: [ação específica — ex: "Vai no feed 👆 que tem o carrossel completo"]
```

---

## Critérios de Qualidade

- [ ] Todos os slides do carrossel escritos (headline + supporting text + accent + background)
- [ ] Cada slide com 40-80 palavras no total
- [ ] Imagem única com texto principal escrito
- [ ] Todos os frames dos Stories com texto overlay
- [ ] Frame interativo com opções exatas (não "adicionar poll aqui")
- [ ] Legendas completas para carrossel e imagem única
- [ ] Hook de cada legenda com máx. 125 chars
- [ ] Legendas terminam com pergunta aberta
- [ ] Hashtags entre 5-15 por post
- [ ] Zero placeholders — tudo preenchido

---

## Entrega

Output salvo em: `squads/marketing-instagram/output/{run_id}/v1/copy.md`
Entregar para: **Designer Visual** (próximo step: 04-design)

## Veto Conditions

- Qualquer slide com menos de 40 palavras (headline + supporting text)
- Legenda sem hook nos primeiros 125 chars
- Frame interativo sem opções escritas
- Presença de placeholders ou textos como "[inserir aqui]"
