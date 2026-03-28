---
id: 02-estrategia
agent: estrategista
execution: inline
format: instagram-feed
outputFile: squads/marketing-instagram/output/estrategia.md
---

# Step 02 — Estratégia de Conteúdo

## Objetivo

Transformar os insights do Pesquisador em um plano de conteúdo concreto: definir qual formato de carrossel usar, como estruturar cada post (slide a slide), qual CTA para cada formato e a direção visual para o Designer.

---

## Input

- Brief de pesquisa: `squads/marketing-instagram/output/{run_id}/v1/pesquisa.md`
- Escolha do usuário no checkpoint de pesquisa
- Briefing do cliente: `squads/marketing-instagram/output/{run_id}/briefing.md`
- Contexto da empresa: `_opensquad/_memory/company.md`

---

## Processo de Execução

### 1. Confirmar ângulo escolhido
Com base na resposta do usuário no checkpoint, confirmar o ângulo que guiará o conteúdo desta execução.

### 2. Definir o plano do carrossel (Feed)
Escolher o formato de carrossel mais adequado ao ângulo:
- Editorial/Tese | Listicle/Lista | Tutorial/Passo-a-passo | Mito vs Realidade | Antes e Depois | Storytelling | Problema → Solução

Definir:
- Número de slides (7-9 recomendado)
- Papel de cada slide (cover, contexto, item 1-N, síntese, CTA)
- Instrução de cada slide para o Copywriter
- CTA do slide final
- Objetivo do post: salvar / compartilhar / comentar

### 3. Definir a imagem única (Feed)
- Conceito: qual mensagem única vai ocupar o visual
- Tipo: quote / stat / declaração / pergunta
- Como complementa o carrossel (sem repetir)
- CTA da legenda
- Objetivo: engajamento rápido / posicionamento

### 4. Definir a sequência de Stories
- Número de frames (4-6)
- Papel de cada frame (opener, contexto 1-2, interativo, fechamento)
- Elemento interativo: Poll / Quiz / Caixa de perguntas
- Como a sequência se relaciona com os posts do feed

### 5. Definir direção visual
Com base no tom de voz do cliente:
- Mood visual (bold, clean, cálido, jovem, profissional)
- Paleta de 5 cores (primária, secundária, acento, fundo, texto) com hex
- Família tipográfica
- Estilo de referência em 1 linha

---

## Template de Output

```
🎯 PLANO DE CONTEÚDO — [TEMA] — [CLIENTE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTEXTO
Ângulo selecionado: [nome + justificativa]
Tom de voz: [tom]
Objetivo geral da execução: [o que se quer alcançar]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
POST 1 — FEED CARROSSEL

Formato: [tipo — ex: "Listicle — 7 erros que..."]
Objetivo: [salvar / compartilhar / comentar]
CTA do slide final: [instrução específica]
Número de slides: [N]

Estrutura slide a slide:
  Slide 1 (Cover): [instrução para o Copywriter]
  Slide 2 ([Papel]): [instrução]
  Slide 3 ([Papel]): [instrução]
  [...]
  Slide N (CTA): [instrução]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
POST 2 — FEED IMAGEM ÚNICA

Conceito: [descrição]
Mensagem central: [a frase ou stat que ocupa o visual]
Objetivo: [posicionamento / engajamento rápido]
CTA da legenda: [pergunta ou instrução]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
POST 3 — STORIES (sequência de [N] frames)

Relação com o feed: [como complementa]

Frame 1 (Opener): [conceito + instrução]
Frame 2 (Contexto): [instrução]
Frame 3 (Contexto): [instrução]
Frame 4 (Interativo): [Poll/Quiz/Pergunta — especificar tipo]
Frame 5 (Fechamento): [CTA + instrução]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DIREÇÃO VISUAL

Mood: [descrição]
Paleta:
  Primária:   [hex] — [uso]
  Secundária: [hex] — [uso]
  Acento:     [hex] — [uso]
  Fundo:      [hex]
  Texto:      [hex]
Fonte: '[família]', sans-serif
Estilo de referência: [1 linha]
```

---

## Critérios de Qualidade

- [ ] Ângulo confirmado e alinhado com a escolha do usuário
- [ ] Carrossel com formato escolhido e estrutura slide a slide
- [ ] Imagem única com conceito distinto do carrossel
- [ ] Stories com sequência de 4-6 frames e elemento interativo
- [ ] Direção visual com paleta de 5 cores e fonte
- [ ] Objetivo distinto para cada formato

---

## Entrega

Output salvo em: `squads/marketing-instagram/output/{run_id}/v1/estrategia.md`
Entregar para: **Copywriter** (próximo step: 03-copy)

## Veto Conditions

- Carrossel sem estrutura slide a slide
- Sem direção visual (paleta de cores)
- Stories sem elemento interativo definido
