# Step 02 — Estratégia de Conteúdo

## Metadata
- **Agent:** Estrategista
- **Input:** Relatório de produtos do Garimpeiro + contexto da empresa
- **Output:** Mapa de conteúdo completo com ângulos, keywords, formatos e briefing para o Copywriter
- **Tempo esperado:** 5-10 minutos

---

## Objetivo

O Estrategista seleciona os melhores produtos do relatório do Garimpeiro, define o ângulo de conteúdo ideal para cada um, atribui keyword-CTAs e cria um mapa de publicação por plataforma com horários.

---

## Instruções de Execução

### 1. Ler o Relatório do Garimpeiro
Analisar cada produto e responder:
1. Qual é o ângulo mais forte para este produto específico?
   - `curiosidade` — produto surpreende, tem "antes e depois", algo escondido
   - `urgência` — flash deal, estoque limitado, prazo real
   - `review` — produto com prova social forte (4.8+ stars, 1000+ avaliações)
   - `comparação` — preço absurdamente menor que a concorrência
   - `presente` — item perfeito para presente em data especial
   - `rotina` — produto que resolve problema do cotidiano
2. Qual plataforma vai gerar mais resultado para este produto?
3. Qual keyword temática vamos usar no CTA? (1 palavra, maiúscula, temática)
4. O produto tem apelo visual para Reel ou é mais adequado para carrossel?

### 2. Selecionar e Priorizar
Selecionar **máximo 3 produtos** por rodada de produção:
- 1 produto 🔥 **URGENTE** (se existir) → publicação imediata
- 1-2 produtos ✅ **RECOMENDADOS** → publicação programada

### 3. Criar o Mapa de Conteúdo
Para cada produto selecionado, definir:
- Ângulo principal e por quê
- Keyword-CTA (palavra que o usuário vai comentar)
- Tom de voz para esta peça (baseado em `pipeline/data/tone-of-voice.md`)
- Quais plataformas e formatos
- Ordem de publicação com horários específicos
- Chamadas especiais (evento cultural, flash deal com prazo, etc.)

### 4. Criar Variantes A/B para o Produto Principal
Para o produto #1 da rodada, criar 2 versões de hook:
- **Hook A:** Curiosidade/subversão
- **Hook B:** Urgência/preço direto

### 5. Redigir Briefing para o Copywriter
O briefing deve ser claro e completo — o Copywriter não deve precisar tomar nenhuma decisão estratégica.

---

## Template de Output

```
🎯 MAPA DE CONTEÚDO — [DATA]
Selecionei [N] produtos para esta rodada.

═══════════════════════════════════════
PRODUTO #[N]: [nome] ([URGENTE 🔥 / RECOMENDADO ✅])
═══════════════════════════════════════
ÂNGULO PRINCIPAL: [tipo] — [justificativa em 1 linha]
KEYWORD-CTA: [PALAVRA]
TONE: [entusiasta / direto / íntimo / empolgado]

PLATAFORMAS E FORMATOS:
├── Instagram Reels: [Sim/Não] — Ângulo: [X] — Hook de abertura: "[sugestão]"
├── Instagram Feed: [Sim/Não] — Formato: [carrossel / imagem única] — [N] slides
├── Instagram Stories: [Sim/Não] — Tipo: [urgência / swipe-up]
└── WhatsApp Broadcast: [Sim/Não] — Tipo: [flash deal / achado do dia]

ORDEM DE PUBLICAÇÃO:
1. [plataforma] às [horário] — [motivo]
2. [plataforma] às [horário] — [motivo]
3. [plataforma] às [horário] — [motivo]

CHAMADA ESPECIAL: [evento, prazo, contexto sazonal — ou "Nenhuma"]

VARIANTES A/B (produto principal apenas):
- Hook A: "[hook curiosidade/subversão]"
- Hook B: "[hook urgência/preço direto]"

INSTRUÇÕES ESPECIAIS PARA O COPYWRITER:
- [instrução específica, se houver]
═══════════════════════════════════════

───────────────────────────────────────
BRIEFING PARA O COPYWRITER
───────────────────────────────────────
Tom desta rodada: [entusiasta / urgente / misto]
Referências: pipeline/data/tone-of-voice.md + pipeline/data/output-examples.md

PRODUTOS A COBRIR:
1. [Produto] → Ângulo: [X] → Keyword: [Y] → Plataformas: [lista]
2. [Produto] → Ângulo: [X] → Keyword: [Y] → Plataformas: [lista]
```

---

## Horários Recomendados por Plataforma

| Plataforma | Horário ideal | Justificativa |
|---|---|---|
| Stories | 11h-12h | Antes do almoço — flash deals urgentes |
| WhatsApp | 12h, 20h | Pico de abertura de mensagens |
| Reels | 19h-21h | Pico de audiência no Instagram |
| Feed | 12h-14h | Horário de almoço — mais saves |

---

## Critérios de Qualidade (Checklist de Saída)

Antes de entregar o mapa:
- [ ] Máximo 3 produtos selecionados?
- [ ] Keyword-CTA definida para 100% dos produtos que vão para Feed/Reels?
- [ ] Mínimo 2 plataformas por produto?
- [ ] Horários específicos de publicação definidos?
- [ ] Variantes A/B para o produto principal?
- [ ] Justificativa do ângulo baseada em dados?
- [ ] Produtos urgentes com publicação programada para hoje?

---

## Entrega

Entregar para: **Copywriter** (próximo passo: 03-copy)

O mapa deve ser salvo em:
`squads/achados-ofertas/output/[DATA]-estrategia.md`
