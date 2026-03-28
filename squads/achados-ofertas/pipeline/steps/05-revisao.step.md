# Step 04 — Revisão de Qualidade

## Metadata
- **Agent:** Revisor de Qualidade
- **Input:** Conteúdo completo do Copywriter (todas as plataformas de todos os produtos)
- **Output:** Relatório de revisão com veredicto por produto/plataforma + feedback acionável
- **Tempo esperado:** 5 minutos por peça de conteúdo

---

## Objetivo

O Revisor garante que cada peça de conteúdo atinge os padrões de qualidade necessários para competir com os maiores perfis de afiliados do Brasil antes de ser aprovada para publicação.

---

## Instruções de Execução

### Passo 1: Checklist de Conformidade Obrigatória
Executar para CADA peça. Item ❌ = rejeição automática, independente da pontuação.

**Feed e Reels:**
- [ ] Hook ≤ 125 caracteres?
- [ ] Hook NÃO começa com o nome do produto?
- [ ] Keyword-CTA presente? ("Comenta [PALAVRA] que mando!")
- [ ] Nenhuma URL na legenda?
- [ ] CTA de grupo WhatsApp incluso?
- [ ] Máximo 5 hashtags?

**WhatsApp:**
- [ ] Abaixo de 300 caracteres?
- [ ] Tom conversacional (não corporativo)?
- [ ] Instrução de compra clara em 1 linha?
- [ ] Sem URLs longas no corpo?

**Stories:**
- [ ] Máximo 3 linhas de texto?
- [ ] Ação imediata e clara?

### Passo 2: Pontuação de Qualidade (0-100)
Avaliar cada critério com pontuação detalhada:

#### A. HOOK (peso 30%)
| Pontuação | Critério |
|---|---|
| 25-30 | Para o scroll + gera curiosidade ou urgência imediata |
| 15-24 | Adequado mas sem destaque especial |
| 0-14 | Fraco, genérico ou começa com nome do produto |

#### B. OFERTA/COPY (peso 25%)
| Pontuação | Critério |
|---|---|
| 22-25 | Preço + prova social (avaliações) + validação pessoal |
| 14-21 | Dois dos três elementos |
| 0-13 | Um ou nenhum dos elementos |

#### C. CTA (peso 25%)
| Pontuação | Critério |
|---|---|
| 22-25 | Keyword-CTA temática + CTA de grupo WhatsApp |
| 12-21 | Apenas um dos dois CTAs |
| 0-11 | CTA genérico ou ausente |

#### D. TOM E VOZ (peso 20%)
| Pontuação | Critério |
|---|---|
| 17-20 | Garimpeiro/amigo, linguagem natural, validação pessoal |
| 10-16 | Adequado mas sem personalidade marcante |
| 0-9 | Corporativo, genérico ou de vendedor |

### Passo 3: Feedback Específico
Para cada critério com pontuação baixa (abaixo de 80% do máximo):
1. Identificar o problema objetivo
2. Sugerir correção com exemplo concreto

### Passo 4: Consolidar o Relatório

---

## Template de Output

```
═══════════════════════════════════════
RELATÓRIO DE REVISÃO — [DATA]
═══════════════════════════════════════

PRODUTO: [nome]
PLATAFORMAS REVISADAS: [lista]

───────────────────────────────────────
CHECKLIST DE CONFORMIDADE
───────────────────────────────────────
[Lista de itens com ✅ ou ❌]

RESULTADO DO CHECKLIST: ✅ APROVADO / ❌ REPROVADO
(Se reprovado, indicar qual(is) item(ns) falhou/falharam)

───────────────────────────────────────
PONTUAÇÃO DE QUALIDADE
───────────────────────────────────────
- Hook: [X]/30 — [comentário objetivo]
- Oferta/Copy: [X]/25 — [comentário objetivo]
- CTA: [X]/25 — [comentário objetivo]
- Tom e Voz: [X]/20 — [comentário objetivo]

TOTAL: [X]/100

───────────────────────────────────────
AJUSTES NECESSÁRIOS (se houver)
───────────────────────────────────────
1. [problema identificado] → [sugestão com exemplo]
2. [problema identificado] → [sugestão com exemplo]

───────────────────────────────────────
VEREDICTO FINAL
───────────────────────────────────────
✅ APROVADO (90-100) — Publicar imediatamente
✅ APROVADO COM OBSERVAÇÃO (70-89) — Publicar, ajustar no próximo ciclo
🔄 REQUER AJUSTES (50-69) — Devolver ao Copywriter com feedback acima
❌ REPROVADO (0-49) — Reescrever do zero

[VEREDICTO]: [veredicto em 1 frase clara e acionável]
═══════════════════════════════════════
```

---

## Critérios de Decisão

| Pontuação | Veredicto | Ação |
|---|---|---|
| 90-100 | ✅ APROVADO | Publicar imediatamente |
| 70-89 | ✅ APROVADO COM OBSERVAÇÃO | Publicar, ajustar no próximo ciclo |
| 50-69 | 🔄 REQUER AJUSTES | Devolver ao Copywriter com feedback específico |
| 0-49 | ❌ REPROVADO | Reescrever do zero com briefing revisado |

**Pontuação mínima para aprovação: 70/100**

---

## Regras de Ouro do Revisor

- Aprovar conteúdo abaixo de 70/100 é pior do que rejeitar e pedir refazer
- Feedback vago ("não ficou bom") não é aceitável — sempre com exemplo
- Checklist ANTES da pontuação — conformidade é eliminatória
- Nunca rejeitar sem apontar o que especificamente está errado

---

## Critérios de Qualidade da Revisão

- [ ] Checklist de conformidade 100% preenchida?
- [ ] Pontuação detalhada por critério (não apenas total)?
- [ ] Feedback acionável com exemplo para cada critério < 80% do máximo?
- [ ] Veredicto final em 1 frase clara?

---

## Entrega

Entregar para: **Usuário** — relatório completo de aprovação ou retorno para ajustes

O relatório deve ser salvo em:
`squads/achados-ofertas/output/[DATA]-revisao.md`

Se aprovado: conteúdo está pronto para publicação.
Se requer ajustes: retornar para o Copywriter com o feedback do relatório.
Se reprovado: retornar para o Estrategista com briefing revisado.
