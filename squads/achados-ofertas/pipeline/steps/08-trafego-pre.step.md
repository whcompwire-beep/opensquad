---
id: 08-trafego-pre
agent: analista-trafego
execution: inline
description: "Analisa viabilidade de impulsionar conteúdo antes da publicação — entrega scorecard, break-even e brief Meta Ads"
outputFile: squads/achados-ofertas/output/{run_id}/v1/trafego-pre.md
---

# Step 08-trafego-pre — Análise de Tráfego Pago (Pré-Posting)

## Objetivo

Após a revisão e aprovação do conteúdo, analisar se vale investir em tráfego pago antes de publicar. Entregar:
1. Scorecard de viabilidade (0–100)
2. Cálculo de break-even (Fases 2 e 3)
3. Brief completo de Meta Ads (se viável)
4. Atualização do controle de budget mensal

## Inputs necessários

Ler de `output/{run_id}/v1/`:
- `pesquisa.md` — preço, comissão, urgência de cada produto aprovado
- `revisao.md` — score do Revisor para cada produto
- `visual-brief.md` — arquivo do criativo para anúncio (`{produto}-ad-criativo.png`)

Ler de `_memory/`:
- `budget-trafego.md` — saldo disponível no mês

Ler de `pipeline/data/`:
- `benchmarks-trafego.md` — benchmarks de mercado e histórico real

**Input do usuário obrigatório:**
- Número atual de seguidores (necessário para determinar a Fase)

## Processo de Execução

### Passo 1: Coletar número de seguidores

Perguntar ao usuário: "Quantos seguidores tem a conta no Instagram atualmente?"

Determinar a fase:
- 0–500 seguidores → **Fase 1** (audiência)
- 500–2.000 seguidores → **Fase 2** (híbrido)
- 2.000+ seguidores → **Fase 3** (ROAS)

**Transição de fase:** Se o número cruzou 500 ou 2.000 pela primeira vez, sinalizar: "Você entrou na Fase [X] — a estratégia de tráfego muda a partir de agora."

### Passo 2: Verificar pré-requisito eliminatório

Para cada produto aprovado:
- Ler o score do Revisor em `revisao.md`
- Se score < 70: marcar com ❌ e não analisar mais — "Score do Revisor insuficiente ([X]/100)"
- Se score ≥ 70: prosseguir para o scorecard

### Passo 3: Calcular scorecard por fase

**FASE 1 — Scorecard de potencial de crescimento:**

| Critério | Peso | Como pontuar |
|---|---|---|
| Hook score do Revisor | 50% | Score ÷ 100 × 50 |
| Apelo visual do criativo | 30% | Lifestyle fundo limpo = 30 / Fundo branco = 22 / Marca d'água = 10 |
| Broad appeal local | 20% | Produto universal para Mafra/Rio Negro = 20 / Nicho específico = 8 |

Thresholds:
- ≥ 70: ✅ Impulsionar — R$15–20, objetivo Alcance
- 50–69: ⚠️ R$10 máximo, objetivo Alcance
- < 50: ❌ Orgânico apenas

Para determinar "Apelo visual": verificar no `visual-brief.md` se o criativo é lifestyle/fundo limpo, fundo branco simples, ou tem marca d'água.
Para determinar "Broad appeal": produto de uso geral (limpeza, beleza básica, utilidades domésticas, pet) = universal; produto de nicho (esportes específicos, eletrônicos técnicos) = nicho.

**FASE 2 — Scorecard híbrido:**

| Critério | Peso | Como pontuar |
|---|---|---|
| Potencial de comissão | 35% | comissão R$ ≥ R$15 = 35 / R$8–14 = 20 / < R$8 = 5 |
| Score do Revisor | 25% | Score ÷ 100 × 25 |
| Urgência | 20% | 🔥 Urgente = 20 / ✅ Recomendado = 12 / 📌 Reserva = 0 |
| Faixa de preço | 20% | R$50–R$200 = 20 / R$20–R$49 = 12 / outros = 5 |

Thresholds:
- ≥ 70: ✅ Impulsionar (ROAS mínimo: 1.2×, objetivo Engajamento ou Tráfego)
- 50–69: ⚠️ R$10–15 máximo
- < 50: ❌ Orgânico apenas

Para calcular comissão R$: `preço × comissão% ÷ 100` — valores de `pesquisa.md`.

**FASE 3 — Scorecard de ROAS:**

| Critério | Peso | Como pontuar |
|---|---|---|
| Potencial de comissão | 35% | comissão R$ ≥ R$15 = 35 / R$8–14 = 20 / < R$8 = 5 |
| Score do Revisor | 25% | Score ÷ 100 × 25 |
| Urgência | 20% | 🔥 Urgente = 20 / ✅ Recomendado = 12 / 📌 Reserva = 0 |
| Faixa de preço | 20% | R$50–R$200 = 20 / R$20–R$49 = 12 / outros = 5 |

Thresholds:
- 80–100: ✅ Impulsionar
- 60–79: ⚠️ Budget conservador
- < 60: ❌ Orgânico apenas

### Passo 4: Calcular break-even (Fases 2 e 3 apenas)

Usar valores de `pipeline/data/benchmarks-trafego.md`:
- Se houver `meu_historico` com ≥ 3 campanhas: usar esses valores
- Caso contrário: usar `benchmark_mercado`

```
Budget sugerido: R$[X]/dia × [N] dias = R$[total]
CPC estimado: R$[Y]
Cliques estimados: [total ÷ CPC]
Taxa de conversão: [Z]%
Vendas estimadas: [cliques × taxa]
Receita estimada: [vendas × comissão R$]
ROAS estimado: [receita ÷ budget]
Break-even: [budget ÷ comissão R$] vendas necessárias
```

Só avançar para o brief se:
- Fase 2: ROAS estimado ≥ 1.2×
- Fase 3: ROAS estimado ≥ 1.5×

Se ROAS insuficiente: ⚠️ "ROAS estimado abaixo do mínimo — não recomendado impulsionar este produto agora."

### Passo 5: Verificar saldo disponível

Ler `_memory/budget-trafego.md`:
- Se budget sugerido > saldo disponível: reduzir para o saldo ou recomendar ❌
- Sempre informar: "Saldo disponível este mês: R$[Y]"

### Passo 6: Montar o Meta Ads Brief

Para cada produto com veredicto ✅ ou ⚠️:

```
🎯 META ADS BRIEF — [PRODUTO] — [DATA]

FASE: [1 / 2 / 3] ([N] seguidores)
VEREDICTO: [✅ Impulsionar / ⚠️ Com cautela / ❌ Não impulsionar]
SCORE: [X]/100

[Se viável:]
CAMPANHA:
- Objetivo: [Alcance / Engajamento / Tráfego / Conversões]
- Budget: R$[X]/dia × [N] dias = R$[total]
- Saldo após este boost: R$[Y] disponíveis no mês

PÚBLICO:
- Localização: Mafra, SC + Rio Negro, PR + raio 30 km
- Faixa etária: [casa/beleza: 25–45 / tech: 22–40 / pets: 25–50 / geral: 22–55]
- Interesses: [lista baseada na categoria — ver abaixo]
- Dispositivos: Mobile (prioridade)

PLACEMENTS:
- Feed: [Sim/Não] — [justificativa]
- Stories: [Sim/Não] — [justificativa]
- Reels: [Sim/Não] — [justificativa]

COPY DO ANÚNCIO:
- Headline (máx 40 chars): "[texto]"
- Texto principal (máx 125 chars): "[texto]"
- CTA: [Saiba Mais / Comprar / Ver Oferta]

CRIATIVO:
- Arquivo: images/{produto}/{produto}-ad-criativo.png
- Formato para Feed Ad: recortar para 1:1 (1080×1080)
- Formato para Stories/Reels Ad: recortar para 9:16 (1080×1920)
- [⚠️ Alerta se tiver texto sobreposto ou marca d'água]

[Fases 2 e 3:]
BREAK-EVEN:
- Budget total: R$[X]
- Vendas necessárias: [N]
- ROAS estimado: [X]×
```

**Interesses por categoria:**
- Casa/Organização: decoração, organização doméstica, limpeza, reforma
- Beleza/Cuidado pessoal: skincare, maquiagem, cabelo, bem-estar
- Pet: animais de estimação, ração, acessórios pet
- Tech/Gadgets: tecnologia, smartphone, eletrônicos, gadgets
- Moda/Acessórios: moda feminina, roupas, acessórios
- Bebê/Criança: maternidade, bebê, brinquedos, escola

## Atualizar budget após recomendação aceita

Se o usuário aceitar a recomendação de impulsionar, atualizar `_memory/budget-trafego.md`:
- Incrementar "Usado" pelo valor do boost
- Recalcular "Disponível"
- Adicionar linha na tabela de histórico

## Output

Salvar em: `output/{run_id}/v1/trafego-pre.md`

```
# Análise de Tráfego Pago — Pré-Posting
Run: {run_id}
Data: [data]
Fase atual: [1/2/3] ([N] seguidores)

---

## [PRODUTO 1]
Score: [X]/100
Veredicto: [✅/⚠️/❌]
[Brief completo se viável]

---

## [PRODUTO 2]
...
```

Entregar para: **Usuário** (aprovação) → se aceito, atualizar `_memory/budget-trafego.md`

## Checklist de Saída

- [ ] Número de seguidores coletado e fase determinada?
- [ ] Transição de fase sinalizada se aplicável?
- [ ] Score do Revisor verificado para todos os produtos?
- [ ] Scorecard calculado para todos os produtos com score ≥ 70?
- [ ] Break-even calculado para Fases 2 e 3?
- [ ] Saldo de budget verificado e respeitado?
- [ ] Brief Meta Ads completo para todos os produtos viáveis?
- [ ] Arquivo salvo em `output/{run_id}/v1/trafego-pre.md`?
