# Checkpoint: Aprovar Imagens

**Tipo**: checkpoint
**Step ID**: checkpoint-visual

---

## Objetivo

Apresentar as imagens geradas ao usuário para aprovação final antes da entrega.

---

## Instruções para o Runner

1. Leia o brief visual gerado (`output/{run_id}/v1/visual-brief.md`)
2. Liste todos os arquivos PNG gerados com caminhos clicáveis
3. Pergunte ao usuário o que fazer

---

## Apresentação ao Usuário

```
🎨 IMAGENS GERADAS — [Tema]

📂 squads/estetica-criativa/output/{run_id}/images/

Carrossel:  images/carrossel/slide-01.png ... slide-N.png
Reel 1:     images/reels/reel1-capa.png
Reel 2:     images/reels/reel2-capa.png
Feed:       images/feed/quote.png
Stories:    images/stories/story-01.png ... story-03.png
```

---

## Pergunta ao Usuário

**Mensagem**: "Como ficaram as imagens?"

**Opções**:
- Aprovado — entrega completa
- Ajustar paleta ou estilo visual
- Refazer uma imagem específica
- Gerar variante A/B de uma peça

---

## Se "Ajustar paleta ou estilo":

Capturar o que mudar (cor, fonte, espaçamento, etc.) e retornar ao Designer com as instruções.

---

## Se "Refazer uma imagem":

Indicar qual arquivo e o que mudar. Designer refaz apenas essa peça.

---

## Entrega Final

Após aprovação:
- Confirmar que todos os PNGs estão no diretório de output
- Atualizar memories.md com observações sobre o estilo visual aprovado
- Apresentar resumo final da rodada completa (copy + imagens)
