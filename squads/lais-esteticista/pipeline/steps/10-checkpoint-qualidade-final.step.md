# Checkpoint: Relatório de Qualidade Final

**Tipo**: checkpoint
**Step ID**: checkpoint-qualidade-final

---

## Objetivo

Apresentar o relatório de qualidade integrada ao usuário e encerrar a rodada com aprendizados documentados.

---

## Instruções para o Runner

1. Leia o relatório de qualidade final (`output/{run_id}/v1/analise-qualidade-final.md`)
2. Apresente um resumo executivo ao usuário
3. Atualize `_memory/memories.md` com os aprendizados desta rodada
4. Pergunte ao usuário como prosseguir

---

## Apresentação ao Usuário

```
📊 ANÁLISE DE QUALIDADE FINAL — [Tema]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Score médio de copy: X/10
Score médio visual:  X/5
Score integrado:     X/15

Peça destaque:        [nome] — [score]
Maior oportunidade:   [nome] — [score]

✅ @lais_esteticista presente em: [N]/[total] peças

Top recomendação para a próxima rodada:
→ [recomendação mais importante]

📁 Todos os arquivos em:
squads/lais-esteticista/output/{run_id}/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Pergunta ao Usuário

**Mensagem**: "Rodada concluída! O que quer fazer agora?"

**Opções**:
- Nova rodada de conteúdo
- Ver o relatório de qualidade completo
- Ajustar algum agente com base nas recomendações
- Voltar ao menu principal

---

## Atualização de Memória

Antes de encerrar, o runner deve atualizar `_memory/memories.md` com:
- Data e tema da rodada
- Score médio geral
- Principais aprendizados (do relatório da Analista)
- Hooks candidatos a teste real
- Padrões a repetir ou evitar
