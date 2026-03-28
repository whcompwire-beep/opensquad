# Step: Estratégia de Conteúdo

**Agente**: estrategista
**Step ID**: estrategia

---

## Objetivo

A Estrategista de Beleza cria um briefing estratégico completo com 3 ângulos de conteúdo, hooks validados e direções criativas para a rodada.

---

## Contexto Disponível

O runner deve garantir que a Estrategista tem acesso a:

1. **Tema e tom da rodada** — do checkpoint anterior (checkpoint-tema)
2. **Research Brief** — `pipeline/data/research-brief.md`
3. **Domain Framework** — `pipeline/data/domain-framework.md`
4. **Tone of Voice** — `pipeline/data/tone-of-voice.md`
5. **Consolidated Analysis** — `_investigations/consolidated-analysis.md`

---

## Instruções para o Runner

1. Ative a persona da **Estrategista de Beleza** (`agents/estrategista.agent.md`)
2. Forneça o contexto completo listado acima
3. Solicite a entrega do briefing estratégico no formato definido no agent
4. Salve o output em `output/[data]-briefing-estrategia.md`

---

## Entrega Esperada

Um briefing estratégico com:
- Análise de contexto do tema (1 parágrafo)
- 3 ângulos de conteúdo (cada um com formato, hook principal, hook alternativo, desenvolvimento, CTA, gatilho e referência)
- Hashtags recomendadas para a rodada
- Observações de tom específicas para esta rodada

---

## Critério de Conclusão

O step está concluído quando o briefing contém os 3 ângulos completos com variantes A/B de hook para cada um.

O output segue para o checkpoint de aprovação de estratégia.
