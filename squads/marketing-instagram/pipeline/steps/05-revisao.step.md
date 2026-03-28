---
id: 05-revisao
agent: revisor
execution: inline
outputFile: squads/marketing-instagram/output/revisao.md
---

# Step 05 — Revisão Final de Qualidade

## Objetivo

Avaliar o pacote completo (copy + visuais + coerência estratégica), emitir um laudo de qualidade estruturado e entregar ao usuário o pacote aprovado com os próximos passos de publicação.

---

## Input

- Brief de pesquisa: `squads/marketing-instagram/output/{run_id}/v1/pesquisa.md`
- Estratégia: `squads/marketing-instagram/output/{run_id}/v1/estrategia.md`
- Copy completo: `squads/marketing-instagram/output/{run_id}/v1/copy.md`
- Design system: `squads/marketing-instagram/output/{run_id}/v1/design-system.md`
- Imagens renderizadas: `squads/marketing-instagram/output/{run_id}/renders/`
- Briefing do cliente: `squads/marketing-instagram/output/{run_id}/briefing.md`

---

## Processo de Execução

### 1. Ler todos os outputs do pipeline
Antes de avaliar, garantir que todos os arquivos foram lidos.

### 2. Revisar o copy
Verificar item a item:

**Carrossel:**
- Cada slide tem headline + supporting text
- Cada slide tem 40-80 palavras
- Slide cover tem hook impactante
- Slide CTA tem instrução específica
- Legenda: hook nos 125 chars, corpo com quebras de linha, pergunta final
- Hashtags: 5-15, mix adequado
- Nenhum link na legenda

**Imagem única:**
- Texto principal impactante
- Legenda com hook, corpo e pergunta
- Hashtags adequadas

**Stories:**
- Cada frame com texto overlay curto
- Elemento interativo com opções escritas
- Sequência com arco narrativo (opener → contexto → interativo → CTA)

### 3. Verificar os visuais
Abrir cada imagem renderizada e verificar:
- Dimensões corretas por tipo (1080x1440 / 1080x1080 / 1080x1920)
- Texto legível (visualmente verificar — não apenas assumir)
- Hierarquia visual clara (headline maior que body)
- Contraste adequado (texto visível sobre o fundo)
- Sem numeração de slides
- Design system consistente entre todos os slides
- Sem texto cortado

### 4. Verificar coerência estratégica
- O ângulo do copy bate com a escolha do usuário no checkpoint
- Tom de voz alinhado com o briefing
- Stories complementam (não repetem) o feed
- Vocabulário usa os termos nativos do público

### 5. Emitir o laudo
Para cada item: **✅ APROVADO** / **⚠️ AJUSTE MENOR** / **❌ REQUER CORREÇÃO**

### 6. Decisão final
- Todos os críticos APROVADOS ou AJUSTE MENOR → **APROVADO PARA PUBLICAÇÃO**
- Qualquer crítico REQUER CORREÇÃO → **PENDENTE — CORREÇÕES OBRIGATÓRIAS**

### 7. Listar os arquivos entregues e próximos passos
Informar ao usuário onde estão todos os arquivos e o que fazer a seguir.

---

## Template de Output

```
✅ LAUDO DE QUALIDADE — [TEMA] — [CLIENTE]
Data: [data]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DECISÃO FINAL: [APROVADO PARA PUBLICAÇÃO / PENDENTE — CORREÇÕES OBRIGATÓRIAS]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COPY — CARROSSEL
[item a item com status]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COPY — IMAGEM ÚNICA
[item a item]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COPY — STORIES
[item a item]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VISUAIS
[item a item, incluindo dimensões e legibilidade por arquivo]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COERÊNCIA ESTRATÉGICA
[item a item]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CORREÇÕES OBRIGATÓRIAS
❌ [item]: [instrução específica de correção]

AJUSTES OPCIONAIS
⚠️ [item]: [sugestão de melhoria]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARQUIVOS ENTREGUES

📁 Carrossel (slides): output/{run_id}/renders/carrossel/
📁 Imagem única: output/{run_id}/renders/feed/imagem-unica.png
📁 Stories: output/{run_id}/renders/stories/
📄 Copy completo: output/{run_id}/v1/copy.md
📄 Design System: output/{run_id}/v1/design-system.md
📄 Legendas e hashtags: incluídas no copy.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRÓXIMOS PASSOS

1. [instrução de publicação ou correção — dependendo da decisão final]
2. [sugestão de melhor horário de publicação se aplicável]
3. [lembrete de engajamento pós-publicação]
```

---

## Critérios de Qualidade

- [ ] Todos os posts avaliados
- [ ] Imagens abertas e verificadas visualmente
- [ ] Decisão final clara (sem ambiguidade)
- [ ] Correções obrigatórias vs. opcionais distinguidas
- [ ] Todos os arquivos listados com caminhos completos
- [ ] Próximos passos fornecidos ao usuário

---

## Entrega

Output salvo em: `squads/marketing-instagram/output/{run_id}/v1/revisao.md`
Entrega final para: **Usuário**

## Veto Conditions

- Decisão final ausente ou ambígua
- Imagens não verificadas visualmente (apenas assumidas como ok)
