# Memórias do Squad — Laís Esteticista

> Aprendizados acumulados das rodadas de produção. Atualizado automaticamente pelo runner após cada execução.

---

## Configuração Inicial

**Criado**: 2026-03-31
**Investigação**: 3 perfis analisados — @lais_esteticista, @esteticaflaviamedeiros, @bettinaesteticista
**Modo**: Alta Performance
**Handle obrigatório em todas as peças**: @lais_esteticista
**Paletas**: KB Beauty Essence (tons neutros — educativo) + KB Beauty Essence Rosê (tons rosados — emocional)

---

## Aprendizados de Rodadas

### Rodada 1 — 2026-03-31 | Depilação a Laser | Tom Mix

- Usuário aprovou estratégia completa (3 ângulos) sem ajustes
- Usuário aprovou rascunhos diretamente para revisão
- Score copy: 9,8/10 (5/5 peças aprovadas)
- Score visual: 4,8/5 (HTMLs gerados, PNGs pendentes por browser bloqueado)
- Score integrado: 14,6/15

**Observações da Analista:**
- Narrativa em 3ª pessoa (Reel 1) = padrão mais eficaz — repetir
- Reel 2 usou paleta neutra para conteúdo emocional — corrigido na Rodada 2
- Progressão de paleta nos Stories (Rosê→Branco→Dourado) = aprovada como padrão

---

### Rodada 2 — 2026-04-03 | Laser LaVieen | Tom Mix

- Usuário ajustou hook do Carrossel: solicitou algo "mais adequado ao tema LaVieen" — aprovado novo hook com nome do tratamento + 3 dores específicas
- Usuário aprovou estratégia e conteúdo diretamente, com apenas 1 ajuste pontual (hook carrossel)
- Score copy: 10/10 (5/5 peças com score máximo)
- Score visual: 5/5 (HTMLs gerados, PNGs pendentes — Playwright MCP não carregado)
- Score integrado: 15/15

**Observações da Analista:**
- Hook de carrossel com "3 dores + nome do tratamento" = estrutura exportável para outros tratamentos
- Variante A/B disponível para teste real de performance (hooks do Carrossel)
- PNGs bloqueados pela 2ª rodada consecutiva — verificar Playwright antes de iniciar próximas rodadas
- Paleta corrigida: Reels emocionais com KB Beauty Essence Rosê (corrigido erro da Rodada 1)

**Regra de paleta confirmada (2ª confirmação):**
- Conteúdo educativo/técnico → paleta KB Beauty Essence (neutros)
- Conteúdo emocional/empoderador → paleta KB Beauty Essence Rosê

---

## Preferências do Usuário Identificadas

- Aprova estratégias completas quando bem fundamentadas
- Faz ajustes pontuais de copy diretamente (não pede reescritas completas)
- Avança rapidamente nos checkpoints — não demora em aprovações
- Prefere rodadas completas (todos os formatos)
- Aceita continuar pipeline mesmo sem PNGs renderizados

---

## Temas Já Produzidos

| Data | Tema | Formatos | Score Copy | Score Integrado |
|------|------|----------|------------|-----------------|
| 2026-03-31 | Depilação a laser | Carrossel + Reel×2 + Imagem + Stories | 9,8/10 | 14,6/15 |
| 2026-04-03 | Laser LaVieen | Carrossel + Reel×2 + Imagem + Stories | 10/10 | 15/15 |
| 2026-04-06 | Lipedema + Drenagem Linfática | Carrossel + Reel×2 + Imagem + Stories | — | — |

---

## Hooks Candidatos a Teste Real

- "Manchas. Poros. Textura irregular. 3 problemas que o skincare sozinho nunca vai resolver. O laser LaVieen resolve os 3." (carrossel)
- "Ela evitava fotos desde os 32 anos. Não era vaidade. Era vergonha da própria pele." (reel transformação)
- "Depois dos 30, sua pele começa a pedir algo que creme nenhum entrega." (reel empoderamento)
- "Você já adiou cuidar da sua pele por medo do laser?" (stories enquete)
- **A/B para teste**: "Tudo que te contaram sobre laser de pele provavelmente está errado." (hook alternativo carrossel)

---

## Padrões a Repetir

- Carrossel mito-verdade com badges ❌/✅ — alto save rate previsto
- Narrativa em 3ª pessoa de paciente com pergunta final — maior engajamento (validado 2 rodadas)
- Progressão de paleta em stories (Rosê→Neutro→Rosê escuro→Rosê claro)
- Hook do carrossel: "[N] dores + nome do tratamento resolve os [N]"
- Badge de dado numérico (idade, dias de recuperação) como âncora visual no Reel

## Padrões a Evitar

- Reel emocional com paleta neutra (corrigido na Rodada 2)
- Reel sem gatilho de comentário — sempre adicionar pergunta
- Hook genérico de laser sem nomear o tratamento específico
- Fórmula "X não é Y, é Z" usada repetidamente na mesma rodada e entre rodadas — limitar a 1 uso por peça
- CTA idêntico "Me chama no direct. Faço avaliação personalizada." em todas as peças da rodada — variar por peça
- Fechamento "Você merece [X]" — padrão identificado em Rodada 2 e 3, evitar repetição
- Story no template fixo: enquete → checklist → citação emocional → CTA — variar estrutura da sequência

## Estruturas Alternativas Validadas (Rodada 3)

- **Carrossel**: âncora de dado clínico no Slide 1 (percentual/tempo) como hook — gera identificação imediata
- **Reel 1**: voz da profissional narrando fala da paciente — mais autoridade, menos genérico
- **Reel 2**: abordagem de provocação/diagnóstico ("Existe uma pergunta que eu faço...") — gera curiosidade diferente
- **Feed**: frase de contraste emocional específico ("não aparece na balança, aparece na dor")
- **Stories**: sequência mito → revelação → dado numérico → CTA específico

## Nota Técnica — Recorrente

- Browser Playwright bloqueado — 2ª rodada consecutiva sem PNGs
- **Ação obrigatória**: verificar `browser_take_screenshot` disponível ANTES de iniciar o pipeline
- HTMLs são auto-suficientes e ficam salvos — renderizar PNGs em sessão com Playwright ativo
