# Step: Criação Visual

**Agente**: designer
**Step ID**: visual

---

## Objetivo

O Designer Visual renderiza todos os formatos aprovados em imagens PNG prontas para publicar no Instagram, usando HTML/CSS + Playwright (skill: image-creator).

---

## Contexto Disponível

O runner deve garantir que o Designer tem acesso a:

1. **Conteúdo final aprovado** — `output/{run_id}/v1/conteudo-final.md`
2. **Tom de voz** — `pipeline/data/tone-of-voice.md` (referência de identidade)
3. **Skill: image-creator** — fluxo de renderização HTML → PNG
4. **Skill: image-fetcher** — `skills/image-fetcher/SKILL.md` (busca de assets fotográficos para fundos)
5. **Inputs da marca** — `squads/lais-esteticista/inputs/` (fotos da Laís e pacientes disponíveis)

---

## Instruções para o Runner

1. Ative a persona do **Designer Visual** (`agents/designer.agent.md`)
2. Leia a skill `image-creator` (`skills/image-creator/SKILL.md`) e injete as instruções de renderização
3. Forneça o conteúdo final completo como input
4. O Designer cria e renderiza todos os formatos:
   - Carrossel: slides 1 a N em `output/{run_id}/images/carrossel/`
   - Reel 1 thumbnail: `output/{run_id}/images/reels/reel1-capa.png`
   - Reel 2 thumbnail: `output/{run_id}/images/reels/reel2-capa.png`
   - Feed imagem única: `output/{run_id}/images/feed/quote.png`
   - Stories: story-01, story-02, story-03 em `output/{run_id}/images/stories/`
5. Após renderização, salvar brief visual em `output/{run_id}/v1/visual-brief.md`

---

## Entrega Esperada

- Todos os PNGs gerados nos diretórios corretos
- `@lais_esteticista` visível em todos os formatos entregues
- Brief visual listando todos os arquivos com dimensões e observações
- Verificação visual do primeiro PNG de cada formato antes do batch

---

## Critério de Conclusão

O step está concluído quando todos os PNGs estão gerados, `@lais_esteticista` está presente em cada um, e o brief visual está salvo.

O output segue para o checkpoint de aprovação visual.
