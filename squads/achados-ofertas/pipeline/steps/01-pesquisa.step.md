# Step 01 — Pesquisa de Produtos

## Metadata
- **Agent:** Garimpeiro
- **Input:** Solicitação do usuário (categoria, tendência, budget, prazo) + contexto da empresa
- **Output:** Relatório de produtos com mínimo 3 e máximo 8 produtos validados via browser
- **Tempo esperado:** 15–25 minutos
- **Execução:** inline (usa browser Playwright para navegação real nos marketplaces)

---

## Objetivo

O Garimpeiro pesquisa produtos com alto potencial de conversão nos marketplaces brasileiros via browser, valida dados em tempo real, gera links de afiliado reais, e entrega um relatório estruturado para o Estrategista. Produtos Reserva são salvos automaticamente no banco de ideias.

---

## Instruções de Execução

### 1. Analisar o input do usuário
- Qual categoria ou nicho foi solicitado? (ou garimpar livremente)
- Há tendência sazonal ativa? (datas comemorativas, eventos, viral nas redes)
- Restrições de preço, marketplace ou categoria?
- Lembrete: foco no sweet spot classe média R$15–R$250

### 2. Navegar nos marketplaces via browser (navegação real)

**Mercado Livre:**
1. Navegar para `https://www.mercadolivre.com.br/ofertas`
2. Identificar produtos nas seções "Oferta do Dia" e "Mais Vendidos"
3. Navegar para categorias relevantes: Casa, Beleza, Pets, Tecnologia
4. Anotar nome, preço e URL de cada candidato

**Shopee:**
1. Navegar para `https://shopee.com.br/flash_sale`
2. Verificar Flash Sale ativa — produtos com desconto real e muitas vendas
3. Navegar para `https://shopee.com.br/search?sortBy=sales` por categoria se necessário

**Amazon BR:**
1. Navegar para `https://www.amazon.com.br/gp/bestsellers/`
2. Verificar categorias relevantes: Casa, Beleza, Pets, Eletrônicos

**Complementar com WebSearch:**
- Buscar: "[categoria] em alta [mês atual] shopee brasil"
- Buscar: "produto viral tiktok brasil [semana atual]"
- Buscar: "mais vendidos mercado livre [categoria] [mês atual]"

### 3. Validar cada candidato (via browser — navegar até a página do produto)

Para cada candidato, navegar até a página e verificar:

| Critério | Mínimo | Como verificar |
|---|---|---|
| Avaliação | 4.0 ⭐ | Visível na página do produto |
| Avaliações | 100+ | Visível na página |
| Desconto real | Verificar | Comparar com concorrência se necessário |
| Faixa de preço | R$15–R$250 | Verificar preço atual |
| Frete | Grátis (preferencial) | Verificar na página |
| Estoque | Disponível | Verificar na página |
| Programa afiliado | Ativo | Verificar no painel do marketplace |

**Copiar a URL completa da página** — campo obrigatório no output.

### 4. Gerar links de afiliado reais

Para cada produto aprovado na validação:

**Mercado Livre:**
1. Navegar para `https://www.mercadolivre.com.br/afiliados`
2. Usar o "Gerador de Links" para criar o link rastreável
3. Gerar código: `RIOMAFRA-[CATEGORIA]-[NÚMERO]`

**Shopee:**
1. Navegar para `https://affiliate.shopee.com.br/`
2. Buscar o produto e gerar link de afiliado
3. Se não acessível: marcar como `⚠️ PENDENTE — gerar no app Shopee Afiliados`

**Amazon:**
1. Navegar para `https://afiliados.amazon.com.br/`
2. Usar SiteStripe ou o gerador de links

> Se o painel de afiliados exigir login não disponível: marcar o campo como `⚠️ PENDENTE — gerar no painel antes de publicar`. Nunca deixar em branco.

### 5. Classificar por urgência

- 🔥 **Urgente** — Flash deal com prazo real, ou estoque limitado → publicar hoje
- ✅ **Recomendado** — Boa oferta, tendência crescente → publicar esta semana
- 📌 **Reserva** — Interessante, sem urgência → salvar no banco de ideias

### 6. Salvar produtos Reserva no banco de ideias

Para cada produto classificado como 📌 Reserva:
1. Abrir `squads/achados-ofertas/_memory/banco-de-ideias.md`
2. Adicionar uma entrada no formato:

```
### [DATA] — [Nome do Produto]
- **Marketplace:** [ML/Shopee/Amazon]
- **URL:** [URL real da página]
- **Preço:** R$[X] (de R$[Y]) — [Z]% OFF
- **Avaliação:** [X.X] ⭐ ([N] avaliações)
- **Link de afiliado:** [URL ou ⚠️ PENDENTE]
- **Por que guardar:** [razão em 1 linha]
- **Ângulo sugerido:** [curiosidade / urgência / review / comparação]
- **Validade:** [data — hoje + 30 dias; flash deals: hoje + 7 dias]
- **Status:** 🟢 Ativo
```

---

## Template de Output

```
📦 RELATÓRIO DE PRODUTOS — [DATA]
Garimpei [N] produtos com alto potencial de conversão.

---
[🔥 / ✅ / 📌] PRODUTO #[N] — [URGENTE / RECOMENDADO / RESERVA]

Nome: [nome completo]
Marketplace: [ML / Shopee / Amazon]
Categoria: [categoria]
URL do produto: [URL real da página — OBRIGATÓRIO]
Preço atual: R$[X]
Preço original / concorrência: R$[Y]
Desconto real: [Z]%
Comissão estimada: [%]
Avaliação: [X.X] ⭐ ([N] avaliações)
Vendas: [N] vendas
Frete: [Grátis / R$X]
Prazo: [X dias úteis]
Link de afiliado: [URL gerada no painel OU ⚠️ PENDENTE — gerar antes de publicar]
Código de busca ML: [RIOMAFRA-XXX-000 / N/A]
Faixa de preço: [Impulso R$15-80 / Considerado R$80-250 / Planejado R$250-500]
Potencial local: [por que faz sentido para Mafra/Rio Negro — 1 linha]
Por que vai performar:
  1. [razão baseada em dados]
  2. [razão baseada em tendência]
  3. [razão baseada em apelo visual/emocional]
Ângulo de conteúdo sugerido: [curiosidade / urgência / review / comparação / presente]
Plataforma ideal: [Instagram Reels / Stories / Feed / WhatsApp / Facebook / TikTok]
---

[Se houver produtos Reserva:]
📌 PRODUTOS RESERVA — Salvos em banco-de-ideias.md
- [Nome produto] — válido até [data]
```

---

## Critérios de Qualidade (Checklist de Saída)

Antes de entregar o relatório, verificar:
- [ ] Mínimo 3 produtos entregues?
- [ ] URL do produto preenchida para 100% dos produtos?
- [ ] Link de afiliado gerado (ou marcado como ⚠️ PENDENTE) para todos?
- [ ] Todos os campos preenchidos (sem "N/A" sem justificativa)?
- [ ] Desconto verificado como real?
- [ ] Avaliação mínima 4.0 ⭐ com 100+ avaliações?
- [ ] Pelo menos 1 produto urgente (🔥) e 1 recomendado (✅)?
- [ ] Código RIOMAFRA gerado para produtos do ML?
- [ ] Produtos Reserva salvos no banco de ideias?
- [ ] Faixa de preço verificada (foco em R$15–R$250)?
- [ ] Campo "Potencial local" preenchido para cada produto?

---

## Entrega

Entregar para: **Estrategista** (próximo passo: 03-estrategia)

O relatório deve ser salvo em:
`squads/achados-ofertas/output/{run_id}/v1/pesquisa.md`
