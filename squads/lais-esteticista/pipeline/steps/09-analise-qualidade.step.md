# Step: Análise de Qualidade Final

**Agente**: analista
**Step ID**: analise-qualidade

---

## Objetivo

A Analista de Qualidade Final avalia a rodada completa — copy, revisão e visual — como um conjunto integrado. Identifica pontos fortes, gaps e gera recomendações específicas para a próxima rodada.

---

## Contexto Disponível

O runner deve garantir que a Analista tem acesso a:

1. **Briefing estratégico** — `output/{run_id}/v1/briefing-estrategia.md`
2. **Conteúdo final** — `output/{run_id}/v1/conteudo-final.md`
3. **Relatório de revisão** — `output/{run_id}/v1/revisao-qualidade.md`
4. **Brief visual** — `output/{run_id}/v1/visual-brief.md`
5. **Tone of Voice** — `pipeline/data/tone-of-voice.md`
6. **Quality Criteria** — `pipeline/data/quality-criteria.md`
7. **Anti-Patterns** — `pipeline/data/anti-patterns.md`
8. **Memórias do squad** — `_memory/memories.md`

---

## Instruções para o Runner

1. Ative a persona da **Analista de Qualidade Final** (`agents/analista-qualidade.agent.md`)
2. Forneça todos os artefatos da rodada listados acima
3. Solicite o relatório de qualidade integrada completo no formato definido no agent
4. Salve o output em `output/{run_id}/v1/analise-qualidade-final.md`

---

## Entrega Esperada

- Score integrado (copy + visual) por peça
- Verificação de `@lais_esteticista` em todas as peças visuais
- Avaliação de coerência copy ↔ visual
- Score geral da rodada
- 3-5 recomendações acionáveis para a próxima rodada
- 2-3 pontos fortes a repetir

---

## Critério de Conclusão

O step está concluído quando o relatório de qualidade integrada está salvo e o runner atualiza `_memory/memories.md` com os principais aprendizados.

O output segue para o checkpoint final de qualidade.
