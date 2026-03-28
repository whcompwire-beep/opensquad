# Checkpoint: Aprovar Estratégia de Conteúdo

**Tipo**: checkpoint
**Step ID**: checkpoint-estrategia

---

## Objetivo

Apresentar o briefing estratégico ao usuário e obter aprovação antes de acionar a produção de conteúdo.

---

## Instruções para o Runner

1. Apresente o briefing completo gerado pela Estrategista
2. Resuma os 3 ângulos em formato escaneável (nome, formato, hook principal)
3. Pergunte ao usuário o que fazer

---

## Apresentação ao Usuário

Exiba primeiro o resumo dos ângulos:

```
📋 BRIEFING ESTRATÉGICO — [Tema]

Ângulo 1: [Nome] → [Formato]
Hook: "[hook principal]"

Ângulo 2: [Nome] → [Formato]
Hook: "[hook principal]"

Ângulo 3: [Nome] → [Formato]
Hook: "[hook principal]"
```

---

## Pergunta ao Usuário

**Mensagem**: "O que fazer com esta estratégia?"

**Opções**:
- Aprovar e produzir todos os 3 ângulos
- Aprovar apenas alguns ângulos — vou indicar quais
- Ajustar um dos ângulos antes de produzir
- Refazer a estratégia com outra direção

---

## Se "Aprovar apenas alguns ângulos":

Perguntar: "Quais ângulos produzir?"
Opções: Ângulo 1, Ângulo 2, Ângulo 3 (múltipla seleção)

---

## Se "Ajustar um dos ângulos":

Perguntar: "Qual ângulo ajustar e o que mudar?"
Capturar o feedback e retornar para a Estrategista fazer o ajuste pontual.
Depois retornar ao checkpoint com o ângulo revisado.

---

## Se "Refazer a estratégia":

Capturar a nova direção do usuário e retornar ao step de estratégia com as novas instruções.

---

## Saída Esperada deste Checkpoint

```
ÂNGULOS APROVADOS: [lista]
OBSERVAÇÕES DO USUÁRIO: [qualquer ajuste ou preferência]
```

Este bloco é passado para a Redatora no step de conteúdo.
