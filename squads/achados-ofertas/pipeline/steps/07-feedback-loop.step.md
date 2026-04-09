# Step 07 — Feedback Loop de Performance

## Metadata
- **Execução:** Manual (rodar 24–72h após a publicação, quando métricas estabilizaram)
- **Tipo:** Opcional — não faz parte do pipeline automático principal
- **Input:** Métricas reais das publicações (fornecidas pelo usuário)
- **Output:** Atualização do memories.md com aprendizados reais + revisão do banco de ideias

---

## Objetivo

Registrar as métricas reais de publicações anteriores para identificar o que funcionou, melhorar as próximas rodadas e manter o banco de ideias atualizado.

---

## Como Rodar

Diga ao sistema: **"Registrar métricas da rodada [DATA]"**

---

## Instruções de Execução

### 1. Coletar métricas do usuário

Pedir ao usuário que informe, para cada post publicado na rodada:

**Instagram (Reels e Feed):**
- Visualizações / Alcance
- Comentários recebidos (total + especificando a keyword-CTA)
- Saves
- Compartilhamentos

**Instagram Stories:**
- Visualizações
- Respostas / Cliques no link

**WhatsApp:**
- Respostas recebidas
- Membros no grupo (antes e depois, se disponível)

**Facebook:**
- Alcance do post
- Reações + Comentários + Compartilhamentos
- Cliques no link do comentário (se disponível no Meta Business)

**TikTok:**
- Visualizações
- Curtidas + Comentários + Compartilhamentos
- Seguidores ganhos

### 2. Calcular métricas derivadas

Para cada produto:
- **Plataforma vencedora:** qual canal gerou mais engajamento para este produto?
- **Hook vencedor (A/B):** se testou variantes, qual performou melhor?
- **Taxa de keyword:** comentários com a keyword ÷ visualizações (%)

### 3. Atualizar memories.md

Ler `squads/achados-ofertas/_memory/memories.md` e adicionar uma nova seção:

```markdown
## Rodada [DATA] — Métricas Reais

### Produtos e Performance

| Produto | Plataforma | Métrica principal | Resultado | Observação |
|---|---|---|---|---|
| [nome] | Reels | Comentários keyword | [N] | Hook A/B |
| [nome] | Facebook | Alcance | [N] | — |
| [nome] | TikTok | Visualizações | [N] | — |

### Aprendizados desta rodada

1. **O que funcionou bem:**
   - [plataforma X] superou expectativas para [tipo de produto]
   - [ângulo específico] ressoou para o público desta faixa de preço

2. **O que não funcionou:**
   - [plataforma Y] gerou pouco engajamento para [tipo de produto]
   - [ângulo] não funcionou para este nicho

3. **Ajustes para próximas rodadas:**
   - Priorizar [plataforma] para [categoria de produto]
   - Testar [nova abordagem] na próxima rodada
   - [observação específica sobre o público de Mafra/Rio Negro]
```

### 4. Registrar métricas de tráfego pago (se houve boosts nesta rodada)

Se algum post foi impulsionado com tráfego pago nesta rodada, registrar no memories.md:

```markdown
## Métricas de Tráfego Pago — [POST] — [DATA]

- **Budget gasto:** R$[X]
- **Fase:** [1 / 2 / 3]
- **Objetivo da campanha:** [Alcance / Engajamento / Tráfego / Conversões]
- **CPC real:** R$[Y]
- **Cliques:** [N]
- **Alcance pago:** [N] pessoas
- **Custo por seguidor (Fase 1):** R$[Z] (se objetivo foi Alcance/Curtidas)
- **Conversões estimadas:** [N] (comentários keyword recebidos + respostas no WhatsApp após o boost)
- **ROAS estimado:** [X]× (receita estimada ÷ budget)
- **Veredicto:** [valeu a pena / neutro / não valeu]
- **Aprendizado:** [1 linha sobre o que funcionou ou não]
```

Após registrar, atualizar `pipeline/data/benchmarks-trafego.md`:
- Adicionar linha na tabela "Histórico de Campanhas"
- Se já houver ≥ 3 campanhas, calcular médias e preencher coluna `meu_historico` nas métricas

### 5. Revisar o banco de ideias

Abrir `squads/achados-ofertas/_memory/banco-de-ideias.md` e:

1. **Verificar validade:** Marcar como `🔴 Expirado` produtos com data de validade ultrapassada
2. **Verificar disponibilidade:** Para produtos ainda válidos, verificar via browser se o preço e estoque ainda batem com o registrado
3. **Promover para Recomendado:** Se um produto Reserva tiver ganhado tração (viral, tendência cresceu), anotar como candidato para próxima rodada
4. **Registrar uso:** Atualizar o status para `✅ Usado em [data]` para produtos que foram publicados

---

---

## Template de Relatório de Feedback

```
📊 FEEDBACK LOOP — [DATA]
Rodada analisada: [DATA DA RODADA]

═══════════════════════════════════════
PRODUTO: [nome]
─────────────────────
Instagram Reels: [X] views | [Y] comentários keyword ([Z]%)
Instagram Feed: [X] saves | [Y] comentários
Instagram Stories: [X] views | [Y] cliques
WhatsApp: [X] respostas
Facebook: [X] alcance | [Y] reações | [Z] compartilhamentos
TikTok: [X] views | [Y] compartilhamentos
─────────────────────
Plataforma vencedora: [plataforma] — [razão em 1 linha]
Hook vencedor: [A/B] — [razão]
═══════════════════════════════════════

APRENDIZADOS:
✅ [o que funcionou]
❌ [o que não funcionou]
🔄 [ajuste para próxima rodada]

[Se houve tráfego pago:]
💰 TRÁFEGO PAGO:
- Budget usado: R$[X] | CPC real: R$[Y] | Alcance pago: [N]
- Conversões estimadas: [N] | ROAS: [X]× | Veredicto: [valeu/neutro/não valeu]
- Aprendizado: [1 linha]
- Benchmarks atualizados: [Sim/Não]

BANCO DE IDEIAS:
- [N] produtos verificados
- [N] expirados marcados
- [N] promovidos para Recomendado
- [N] marcados como usados
```
