# Checkpoint: Aprovar Rascunhos de Conteúdo

**Tipo**: checkpoint
**Step ID**: checkpoint-conteudo

---

## Objetivo

Apresentar os rascunhos de conteúdo ao usuário antes da revisão final, permitindo ajustes humanos antes do score de qualidade.

---

## Instruções para o Runner

1. Apresente o conteúdo produzido pela Redatora em formato legível
2. Destaque as variantes A/B de hook para cada peça
3. Pergunte ao usuário o que fazer

---

## Apresentação ao Usuário

Para cada peça produzida, exiba:
- Tipo e formato
- Hook principal vs. Hook alternativo (A/B)
- Conteúdo completo (roteiro, slides ou frase)
- Caption

---

## Pergunta ao Usuário

**Mensagem**: "O que fazer com estes rascunhos?"

**Opções**:
- Enviar para revisão de qualidade — está bom para avaliar
- Ajustar uma peça específica antes da revisão
- Reescrever uma peça completamente
- Cancelar esta rodada

---

## Se "Ajustar uma peça específica":

Perguntar qual peça e o que ajustar (input livre).
Retornar para a Redatora com instrução de ajuste pontual.
Voltar ao checkpoint com o conteúdo revisado.

---

## Se "Reescrever completamente":

Capturar o motivo ou nova direção.
Retornar ao step de conteúdo com as novas instruções.

---

## Saída Esperada deste Checkpoint

```
STATUS: aprovado para revisão
PEÇAS APROVADAS: [lista]
AJUSTES SOLICITADOS: [se houver]
HOOK PREFERIDO (A ou B): [se o usuário indicar preferência]
```

Este bloco é passado para a Revisora no step de revisão.
