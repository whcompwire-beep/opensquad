# Step 01 — Pesquisa de Produtos

## Metadata
- **Agent:** Garimpeiro
- **Input:** Solicitação do usuário (categoria, tendência, budget, prazo) + contexto da empresa
- **Output:** Relatório de produtos com mínimo 3 e máximo 8 produtos validados
- **Tempo esperado:** 10-15 minutos

---

## Objetivo

O Garimpeiro pesquisa produtos com alto potencial de conversão nos marketplaces brasileiros (Mercado Livre, Shopee, Amazon), valida dados e entrega um relatório estruturado para o Estrategista.

---

## Instruções de Execução

### 1. Analisar o input do usuário
- Qual categoria ou nicho foi solicitado? (ou deixar aberto para garimpar livremente)
- Há alguma tendência sazonal ativa? (datas comemorativas, eventos, viral nas redes)
- Há restrições de preço, marketplace ou categoria?

### 2. Pesquisar tendências atuais
Consultar (mentalmente, baseado no contexto):
- Rankings "Mais Vendidos" em cada marketplace
- Flash Sales ativas (Shopee Flash Sale, ML Oferta do Dia, Amazon Oferta Relâmpago)
- Tendências sazonais (clima, datas comemorativas, eventos culturais)
- Produtos viralizando no TikTok/Instagram como "achado"

### 3. Validar cada candidato (filtro de qualidade)
Para passar o filtro, o produto PRECISA ter:
- ⭐ Mínimo 4.0 estrelas
- 💬 Mínimo 100 avaliações
- 💰 Desconto real verificado (não "de por" inflado)
- 🔗 Programa de afiliado ativo no marketplace
- 📦 Estoque disponível

### 4. Gerar código RIOMAFRA (apenas ML)
Para cada produto do Mercado Livre aprovado:
- Formato: `RIOMAFRA-[CATEGORIA]-[NÚMERO]`
- Exemplos: RIOMAFRA-CASA-001, RIOMAFRA-TECH-001, RIOMAFRA-MODA-001
- Incrementar número sequencialmente se houver múltiplos da mesma categoria

### 5. Classificar por urgência
- 🔥 **Urgente** — Flash deal com prazo real, ou estoque limitado → publicar hoje
- ✅ **Recomendado** — Boa oferta, tendência crescente → publicar esta semana
- 📌 **Reserva** — Interessante, sem urgência → banco de ideias

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
Preço atual: R$[X]
Preço original / concorrência: R$[Y]
Desconto real: [Z]%
Comissão estimada: [%]
Avaliação: [X.X] ⭐ ([N] avaliações)
Vendas: [N] vendas (estimativa)
Frete: [Grátis / R$X]
Prazo: [X dias]
Link de afiliado: [URL ou "verificar no programa"]
Código de busca ML: [RIOMAFRA-XXX-000 / N/A]
Por que vai performar:
  1. [razão baseada em dados]
  2. [razão baseada em tendência]
  3. [razão baseada em apelo visual/emocional]
Ângulo de conteúdo sugerido: [curiosidade / urgência / review / comparação / presente]
Plataforma ideal: [Instagram Feed / Stories / WhatsApp / Reels]
---
```

---

## Critérios de Qualidade (Checklist de Saída)

Antes de entregar o relatório, verificar:
- [ ] Mínimo 3 produtos entregues?
- [ ] Todos os campos preenchidos (sem "N/A" sem justificativa)?
- [ ] Desconto verificado como real?
- [ ] Avaliação mínima 4.0 ⭐ com 100+ avaliações?
- [ ] Pelo menos 1 produto urgente (🔥) e 1 recomendado (✅)?
- [ ] Código RIOMAFRA gerado para produtos do ML?
- [ ] Cada produto tem "Por que vai performar" com argumentos baseados em dados?

---

## Entrega

Entregar para: **Estrategista** (próximo passo: 02-estrategia)

O relatório deve ser salvo em:
`squads/achados-ofertas/output/[DATA]-pesquisa.md`
