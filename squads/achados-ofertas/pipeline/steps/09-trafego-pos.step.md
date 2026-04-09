---
id: 09-trafego-pos
agent: analista-trafego
execution: inline
trigger: manual
description: "Decisão de amplificação pós-orgânico — acionado manualmente 24h após publicação com métricas reais"
outputFile: squads/achados-ofertas/output/{run_id}/v1/trafego-pos.md
---

# Step 09-trafego-pos — Análise Pós-Orgânico (24h)

## Objetivo

Acionado manualmente pelo usuário ~24 horas após a publicação. Com as métricas orgânicas reais em mãos, decidir se vale amplificar o post com tráfego pago agora que há dados concretos de desempenho.

Este step é sempre **manual** — o usuário fornece as métricas; o agente analisa e dá o veredicto.

## Como acionar

O usuário aciona este step após 24h de publicação:
> "Step 09 — aqui estão as métricas do post [produto]: [métricas]"

Ou: informar as métricas quando solicitado pelo agente.

## Processo de Execução

### Passo 1: Identificar o post e o produto

Perguntar ao usuário (se não informado):
- Qual produto/post foi publicado?
- Em quais plataformas foi publicado?

Ler de `output/{run_id}/v1/`:
- `pesquisa.md` — preço, comissão, urgência do produto
- `trafego-pre.md` — fase atual e scorecard pré-posting (contexto)

Ler de `_memory/budget-trafego.md` — saldo disponível.

### Passo 2: Coletar métricas do usuário

Pedir ao usuário as métricas das últimas 24h:

**Instagram:**
- Visualizações / alcance
- Comentários (quantos são do tipo keyword-CTA, ex: "mandei", "quero", "link")
- Saves
- Compartilhamentos
- Seguidores ganhos desde a publicação

**Facebook (se publicado):**
- Alcance
- Reações
- Cliques no link (se compartilhou link nos comentários)

**TikTok (se publicado):**
- Visualizações
- Compartilhamentos

**Contexto:**
- O produto ainda está disponível com o mesmo preço? (Sim / Incerto)

### Passo 3: Determinar a fase atual

Confirmar número de seguidores atual (pode ter mudado desde o step 08).
Fase:
- 0–500 → Fase 1
- 500–2.000 → Fase 2
- 2.000+ → Fase 3

### Passo 4: Calcular score de amplificação

**FASE 1 — Amplificar se qualquer sinal positivo:**

Verificar se ANY das condições abaixo é verdadeira:
- Alcance > 2× a média dos posts recentes da conta
- Saves acima do normal para a conta
- Ganhou ≥ 3 seguidores a partir deste post

Se sim: ✅ Amplificar com R$10–15, objetivo Alcance
Se não: ❌ Orgânico apenas

**FASES 2 e 3 — Score de amplificação (0–100):**

| Sinal | Peso | Como pontuar |
|---|---|---|
| Comentários keyword | 30% | > 10 = 30 / 5–10 = 15 / < 5 = 0 |
| Saves + compartilhamentos | 25% | > 20 total = 25 / 10–20 = 15 / < 10 = 5 |
| Alcance vs. média | 25% | > 1.5× média = 25 / 1–1.5× = 12 / < média = 0 |
| Produto disponível (confirmado) | 20% | Confirmado = 20 / Incerto = 0 |

Thresholds:
- 70–100: ✅ Amplificar agora
- 40–69: ⚠️ R$10–15 máximo, monitorar mais 2 dias antes de decidir
- 0–39: ❌ Não amplificar

**Nota sobre "média":** se for a primeira semana da conta, usar alcance > 100 como referência para Fase 1.

### Passo 5: Verificar saldo e calcular break-even (Fases 2 e 3)

Ler saldo de `_memory/budget-trafego.md`.

Se score ≥ 40 (Fases 2/3), calcular break-even com benchmarks de `pipeline/data/benchmarks-trafego.md`:

```
Budget sugerido: R$[X] total ([N] dias)
CPC estimado: R$[Y]
Cliques estimados: [total ÷ CPC]
Taxa de conversão: [Z]%
Vendas estimadas: [cliques × taxa]
Receita estimada: [vendas × comissão R$]
ROAS estimado: [receita ÷ budget]
Break-even: [budget ÷ comissão R$] vendas necessárias
```

### Passo 6: Montar o brief de amplificação

Mesmo formato do brief pré-posting, com ajustes para o contexto pós-orgânico:

```
📈 BRIEF DE AMPLIFICAÇÃO — [PRODUTO] — [DATA]

FASE: [1 / 2 / 3] ([N] seguidores)
VEREDICTO: [✅ Amplificar / ⚠️ Com cautela / ❌ Não amplificar]
SCORE PÓS-ORGÂNICO: [X]/100

SINAIS OBSERVADOS:
- Comentários keyword: [N] ([acima/abaixo] do esperado)
- Saves + compartilhamentos: [N]
- Alcance: [N] ([X]× a média)
- Produto disponível: [Sim/Incerto]

[Se viável:]
CAMPANHA:
- Objetivo: [Alcance (F1) / Engajamento (F2) / Tráfego (F2–F3) / Conversões (F3)]
- Budget: R$[X] total
- Saldo após este boost: R$[Y] disponíveis no mês

PÚBLICO:
- Localização: Mafra, SC + Rio Negro, PR + raio 30 km
- Faixa etária: [por categoria]
- Interesses: [lista baseada na categoria]
- Dispositivos: Mobile (prioridade)

PLACEMENTS:
- [Feed / Stories / Reels] — [justificativa baseada no tipo de criativo]

CRIATIVO:
- Arquivo: images/{produto}/{produto}-ad-criativo.png
- Usar o post que já está publicado (impulsionar diretamente) ou criar novo anúncio

[Fases 2 e 3:]
BREAK-EVEN:
- Budget total: R$[X]
- Vendas necessárias: [N]
- ROAS estimado: [X]×
```

### Passo 7: Atualizar budget

Se o usuário aceitar a recomendação, atualizar `_memory/budget-trafego.md`:
- Incrementar "Usado" pelo valor do boost aceito
- Recalcular "Disponível"
- Adicionar linha na tabela de histórico com data, produto, budget e objetivo

## Output

Salvar em: `output/{run_id}/v1/trafego-pos.md`

```
# Análise Pós-Orgânico — 24h
Run: {run_id}
Data: [data]
Post: [produto] — publicado em [data publicação]
Fase: [1/2/3]

MÉTRICAS COLETADAS:
[tabela com métricas fornecidas pelo usuário]

SCORE DE AMPLIFICAÇÃO: [X]/100
VEREDICTO: [✅/⚠️/❌]

[Brief completo se viável]

AÇÃO TOMADA: [Boost aceito R$X / Não impulsionado]
```

## Checklist de Saída

- [ ] Produto e plataforma identificados?
- [ ] Métricas das 24h coletadas do usuário?
- [ ] Fase atual confirmada?
- [ ] Score de amplificação calculado?
- [ ] Break-even calculado (Fases 2 e 3)?
- [ ] Saldo de budget verificado?
- [ ] Brief completo entregue se viável?
- [ ] Budget-trafego.md atualizado se boost aceito?
- [ ] Output salvo em `output/{run_id}/v1/trafego-pos.md`?

## Nota sobre Frequência

Este step pode ser acionado uma vez por post publicado, sempre ~24h após a publicação. Não há limite de acionamentos por rodada — se 3 produtos foram publicados, pode ser acionado 3 vezes.
