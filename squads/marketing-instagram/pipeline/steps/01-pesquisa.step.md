---
id: 01-pesquisa
agent: pesquisador
execution: subagent
model_tier: powerful
outputFile: squads/marketing-instagram/output/pesquisa.md
---

# Step 01 — Pesquisa de Tendências e Ângulos

## Objetivo

Pesquisar o tema definido no briefing, identificar tendências relevantes, mapear o vocabulário do público e recomendar os melhores ângulos de conteúdo para o Instagram do cliente.

---

## Input

Ler o briefing salvo em `squads/marketing-instagram/output/{run_id}/briefing.md`.
Ler também o contexto da empresa em `_opensquad/_memory/company.md`.

---

## Processo de Execução

### 1. Analisar o briefing
Extrair:
- Cliente e segmento
- Tema exato definido
- Público-alvo
- Tom de voz solicitado
- Restrições ou instruções específicas

### 2. Pesquisa de tendências (usar WebSearch)
Realizar pelo menos 4 buscas com variações:
- `"{tema}" Instagram tendência [ano atual]`
- `"{tema}" conteúdo viral Brasil Instagram`
- `"{tema}" dúvidas mais comuns`
- `"{tema}" mitos verdades`
- Complementar com buscas específicas ao segmento do cliente

Para cada resultado relevante, extrair:
- O ângulo principal abordado
- O formato que performa melhor
- O vocabulário que o público usa

### 3. Identificar 3 ângulos distintos
Para o tema pesquisado, estruturar:

**Ângulo Educativo:**
- Conceito, dado ou ensinamento que o público não sabe
- Hook sugerido
- Formato ideal (carrossel mito vs. realidade / tutorial / lista)

**Ângulo Emocional:**
- Dor, medo ou aspiração que ressoa com o público
- Hook sugerido
- Formato ideal (storytelling / imagem única / quotes)

**Ângulo Prático:**
- Problema concreto que o conteúdo resolve
- Hook sugerido
- Formato ideal (passo-a-passo / checklist / lista de dicas)

### 4. Mapear vocabulário do público
- Termos que usam ao buscar o tema
- Como descrevem suas dores
- Como descrevem o resultado desejado

### 5. Identificar gap competitivo
- O que já está saturado neste tema no Instagram
- O que ainda não está sendo feito (oportunidade)

### 6. Recomendar o ângulo principal
Indicar qual dos 3 ângulos tem maior potencial e por quê.

---

## Template de Output

```
🔍 BRIEF DE PESQUISA — [TEMA]
Cliente: [nome]
Data: [data]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TENDÊNCIAS IDENTIFICADAS

1. [Nome da tendência] — Ciclo: [emergindo/crescendo/saturando]
   Evidência: [dado, fonte ou observação]
   Relevância: [por que importa para este cliente/tema]

2. [...]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ÂNGULOS RECOMENDADOS

🎓 EDUCATIVO — [título]
Conceito: [o que ensinar]
Hook sugerido: "[frase de abertura]"
Formato ideal: [carrossel tipo X]
Potencial: Alto/Médio/Baixo
Confiança: Alta/Média/Baixa

💙 EMOCIONAL — [título]
Dor que endereça: [descrição]
Hook sugerido: "[frase]"
Formato ideal: [tipo de post]
Potencial: Alto/Médio/Baixo
Confiança: Alta/Média/Baixa

🛠️ PRÁTICO — [título]
O que resolve: [problema]
Hook sugerido: "[frase]"
Formato ideal: [tipo de post]
Potencial: Alto/Médio/Baixo
Confiança: Alta/Média/Baixa

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VOCABULÁRIO DO PÚBLICO

Termos que usam: [lista]
Como descrevem a dor: [exemplos]
Como descrevem o desejo: [exemplos]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GAP COMPETITIVO

Saturado (evitar): [o que todo mundo já faz]
Oportunidade: [o que ainda não está sendo feito]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RECOMENDAÇÃO PRINCIPAL

Ângulo prioritário: [nome]
Justificativa: [argumentação]
```

---

## Critérios de Qualidade

- [ ] Briefing lido e contexto do cliente incorporado
- [ ] Mínimo 2 buscas realizadas (WebSearch)
- [ ] 3 ângulos distintos entregues com hooks sugeridos
- [ ] Vocabulário do público documentado
- [ ] Gap competitivo identificado
- [ ] Recomendação principal com justificativa clara

---

## Entrega

Output salvo em: `squads/marketing-instagram/output/{run_id}/v1/pesquisa.md`
Entregar para: **Estrategista** (próximo step: 02-estrategia)

## Veto Conditions

- Menos de 2 ângulos distintos entregues
- Nenhum hook sugerido para os ângulos
- Sem recomendação principal
