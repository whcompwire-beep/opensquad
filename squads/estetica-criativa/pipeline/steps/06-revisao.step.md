# Step: Revisão de Qualidade

**Agente**: revisora
**Step ID**: revisao

---

## Objetivo

A Revisora de Qualidade avalia cada peça de conteúdo com o sistema de score em 10 pontos, identifica violações de anti-padrões e emite decisão de aprovação ou ajuste.

---

## Contexto Disponível

O runner deve garantir que a Revisora tem acesso a:

1. **Conteúdo aprovado no checkpoint** — output do step de conteúdo
2. **Quality Criteria** — `pipeline/data/quality-criteria.md`
3. **Anti-Patterns** — `pipeline/data/anti-patterns.md`
4. **Output Examples** — `pipeline/data/output-examples.md` (benchmark)

---

## Instruções para o Runner

1. Ative a persona da **Revisora de Qualidade** (`agents/revisora.agent.md`)
2. Forneça o conteúdo completo e todos os critérios listados acima
3. Solicite o relatório de revisão completo no formato definido no agent
4. Salve o output em `output/[data]-revisao-qualidade.md`

---

## Entrega Esperada

Para cada peça de conteúdo:
- Score breakdown (5 dimensões × 2 pontos = 10 pontos)
- Checklist de 7 anti-padrões
- Decisão: ✅ Aprovado / ⚠️ Requer Ajuste / ❌ Reprovado
- Feedback específico se não aprovado

Ao final:
- Feedback geral da rodada (padrões positivos + a melhorar)

---

## Fluxo de Ajuste (se necessário)

Se alguma peça receber ⚠️ ou ❌:

1. A Revisora lista os ajustes específicos necessários
2. O runner retorna para a Redatora com os ajustes solicitados
3. A Redatora corrige apenas os pontos indicados
4. A Revisora reavalia apenas as peças ajustadas
5. Máximo de 2 ciclos de revisão por peça

---

## Entrega Final

Após aprovação de todas as peças (ou após 2 ciclos de revisão), o runner:

1. Salva o conteúdo final aprovado em `output/[data]-conteudo-final.md`
2. Atualiza `_memory/memories.md` com aprendizados da rodada
3. Apresenta ao usuário o resumo da rodada com links para os outputs

---

## Critério de Conclusão

O step está concluído quando todas as peças têm status ✅ (ou foram marcadas como "melhor possível" após 2 ciclos de revisão).

---

## Resumo Final para o Usuário

Ao concluir, apresente:

```
✅ RODADA CONCLUÍDA — [Tema]

Conteúdo produzido:
- [X] Reels aprovados (score médio: X/10)
- [X] Carrosseis aprovados (score médio: X/10)
- [X] Imagens únicas aprovadas (score médio: X/10)
- [X] Sequências de Stories aprovadas (score médio: X/10)

Arquivos salvos em: squads/estetica-criativa/output/

Próximo passo: publicar ou agendar o conteúdo.
```
