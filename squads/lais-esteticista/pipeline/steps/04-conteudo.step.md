# Step: Produção de Conteúdo

**Agente**: redatora
**Step ID**: conteudo

---

## Objetivo

A Redatora Criativa produz o conteúdo completo para todos os formatos aprovados, executando os ângulos validados no checkpoint de estratégia.

---

## Contexto Disponível

O runner deve garantir que a Redatora tem acesso a:

1. **Briefing estratégico aprovado** — output do step de estratégia
2. **Ângulos aprovados** — do checkpoint-estrategia (quais ângulos produzir)
3. **Tone of Voice** — `pipeline/data/tone-of-voice.md`
4. **Anti-Patterns** — `pipeline/data/anti-patterns.md`
5. **Output Examples** — `pipeline/data/output-examples.md`
6. **Quality Criteria** — `pipeline/data/quality-criteria.md`

---

## Instruções para o Runner

1. Ative a persona da **Redatora Criativa** (`agents/redatora.agent.md`)
2. Forneça o briefing aprovado e o contexto completo listado acima
3. Especifique quais ângulos produzir (dos ângulos aprovados no checkpoint)
4. Solicite a produção completa no formato definido no agent
5. Salve o output em `output/{run_id}/v1/conteudo-rascunho.md`

---

## Entrega Esperada

Para cada ângulo aprovado e formato correspondente:

**Reel**: Roteiro linha a linha + caption (@lais_esteticista + hashtags) + variante A/B do hook
**Carrossel**: Todos os slides (mínimo 4) + caption (@lais_esteticista + hashtags) + variante A/B do slide 1
**Feed Imagem Única**: Frase para imagem + caption curta (@lais_esteticista + hashtags) + variante A/B
**Stories**: Sequência de 3-5 stories com descrição visual + copy + CTA final (@lais_esteticista)

---

## Modo Alta Performance

Este squad opera em **Alta Performance**. A Redatora deve:
- Produzir conteúdo para **todos os ângulos aprovados** (não apenas um)
- Incluir **variante A/B** para o hook/elemento principal de cada peça
- Não simplificar o output — entrega completa para todos os formatos solicitados
- Garantir que `@lais_esteticista` aparece em cada peça

---

## Critério de Conclusão

O step está concluído quando todas as peças aprovadas têm conteúdo completo com variantes A/B e `@lais_esteticista` em cada peça.

O output segue para o checkpoint de aprovação de conteúdo.
