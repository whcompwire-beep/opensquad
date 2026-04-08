# Step: Pesquisa de Tendências

**Agente**: pesquisadora
**Step ID**: pesquisa-tendencias

---

## Objetivo

A Pesquisadora de Tendências busca ativamente o que está em alta no nicho de beleza/estética feminina agora, entregando inteligência de contexto para a Estrategista usar na criação do briefing.

---

## Contexto Disponível

O runner deve garantir que a Pesquisadora tem acesso a:

1. **Tema e tom da rodada** — do checkpoint-tema (01)
2. **Research Brief** — `pipeline/data/research-brief.md` (calendário sazonal e contexto de nicho)
3. **Data atual** — informar explicitamente a data de hoje no prompt
4. **WebSearch** — ferramenta ativa para busca de tendências reais

---

## Instruções para o Runner

1. Ative a persona da **Pesquisadora de Tendências** (`agents/pesquisadora.agent.md`)
2. Forneça o tema da rodada, o Research Brief e a data atual
3. Solicite o briefing de tendências no formato definido no agent
4. Salve o output em `output/{run_id}/v1/briefing-tendencias.md`

---

## Entrega Esperada

- 2-3 trending topics com fonte identificada
- 1-2 oportunidades de newsjacking (ou declaração de ausência)
- Sazonalidade atual identificada
- Recomendação clara para a Estrategista

---

## Critério de Conclusão

O step está concluído quando o briefing de tendências está salvo e contém pelo menos 2 trending topics com fontes reais.

O output segue para o step de estratégia.
