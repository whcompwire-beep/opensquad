# Checkpoint: Definir Tema e Tom da Rodada

**Tipo**: checkpoint
**Step ID**: checkpoint-tema

---

## Objetivo

Alinhar com o usuário o tema central e o tom desta rodada de conteúdo antes de acionar a Estrategista.

---

## Instruções para o Runner

1. Apresente ao usuário as opções abaixo usando AskUserQuestion.
2. Capture e registre as respostas antes de prosseguir.
3. Passe os dados coletados como contexto para o próximo step (estrategia).

---

## Pergunta 1 — Tema da Rodada

Apresente a seguinte mensagem e opções:

**Mensagem**: "Qual será o tema desta rodada de conteúdo para a Estética Criativa?"

**Opções**:
- Tema livre — vou digitar o tema agora
- Drenagem linfática e corporal
- Cuidados faciais e limpeza de pele
- Autoestima e empoderamento feminino
- Mais opções de tema

Se o usuário escolher "Mais opções de tema", ofereça:
- Anti-envelhecimento e longevidade
- Skincare — o que funciona de verdade
- Sazonalidade / data comemorativa
- Novidade / tendência do mercado

Se o usuário escolher "Tema livre", peça que ele descreva o tema em uma frase.

---

## Pergunta 2 — Tom da Rodada

**Mensagem**: "Qual tom deve predominar nesta rodada?"

**Opções**:
- Educativo e desmistificador — ensinar algo que o público não sabe
- Emocional e empoderador — conectar com a dor e inspirar
- Mix dos dois — metade educativo, metade emocional

---

## Pergunta 3 — Formatos desta Rodada

**Mensagem**: "Quais formatos produzir nesta rodada?"

**Opções**:
- Todos os formatos (Reel + Carrossel + Imagem Única + Stories)
- Apenas Reels e Carrossel
- Apenas Reels
- Escolher manualmente

Se "Escolher manualmente", perguntar quais formatos incluir (múltipla seleção simulada via opções).

---

## Saída Esperada deste Checkpoint

Ao finalizar, registre e passe adiante:

```
TEMA: [tema escolhido]
TOM: [tom escolhido]
FORMATOS: [lista de formatos]
OBSERVAÇÕES ADICIONAIS: [qualquer input livre do usuário]
```

Este bloco será o ponto de partida para a Estrategista.
