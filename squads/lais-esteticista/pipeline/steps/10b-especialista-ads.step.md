# Step: Análise de Tráfego Pago

**Agente**: especialista-ads
**Step ID**: especialista-ads

---

## Objetivo

A Especialista em Tráfego Pago avalia o potencial de impulsionamento de cada peça da rodada no Meta Ads, identifica alertas de conformidade e entrega um plano de impulsionamento priorizado.

---

## Contexto Disponível

O runner deve garantir que a Especialista tem acesso a:

1. **Conteúdo final aprovado** — `output/{run_id}/v1/conteudo-final.md`
2. **Brief visual** — `output/{run_id}/v1/visual-brief.md`
3. **Análise de qualidade final** — `output/{run_id}/v1/analise-qualidade-final.md`
4. **Critérios de Ads** — `pipeline/data/ads-criteria.md`

---

## Instruções para o Runner

1. Ative a persona da **Especialista em Tráfego Pago** (`agents/especialista-ads.agent.md`)
2. Forneça todos os artefatos listados acima
3. Solicite o relatório completo no formato definido no agent
4. Salve o output em `output/{run_id}/v1/relatorio-ads.md`

---

## Entrega Esperada

- Score de Ads (0-10) para cada peça da rodada
- Alertas de conformidade Meta Ads (se houver)
- Plano de impulsionamento para peças com score 7+
- Ranking de prioridade das peças para ads
- 2-3 recomendações para próximas rodadas

---

## Critério de Conclusão

O step está concluído quando `output/{run_id}/v1/relatorio-ads.md` está salvo e contém o score de todas as peças, sem exceção.

O output segue para o checkpoint final de ads.
