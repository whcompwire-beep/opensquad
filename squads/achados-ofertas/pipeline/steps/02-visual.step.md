---
id: 02-visual
agent: visual
execution: inline
description: "Navega até a página de cada produto aprovado, captura as melhores imagens e seleciona o melhor criativo para anúncio pago"
outputFile: squads/achados-ofertas/output/visual-brief.md
---

# Step 02-visual — Captura de Imagens e Seleção de Ad Creative

## Objetivo

Para cada produto aprovado pelo usuário no checkpoint-produtos:
1. Navegar até a página do produto no marketplace
2. Capturar imagens: principal (fundo branco), lifestyle (produto em uso) e detalhe quando relevante
3. **Selecionar o melhor criativo para anúncio pago** — imagem que atende os critérios do Meta Ads
4. Documentar tudo no brief visual para uso do Copywriter e do Analista de Tráfego

## Processo de Execução

### 1. Ler os produtos aprovados
Consultar `output/{run_id}/v1/pesquisa.md` e obter para cada produto:
- Nome
- Marketplace (Shopee / ML / Amazon)
- URL do produto (obrigatória — fornecida pelo Garimpeiro)

### 2. Para cada produto — navegação
Usar a URL fornecida pelo Garimpeiro para navegar diretamente ao produto.

**Se por algum motivo a URL não funcionar:**
- Shopee: `https://shopee.com.br/search?keyword={nome do produto}`
- ML: `https://lista.mercadolivre.com.br/{nome do produto}`
- Amazon: `https://www.amazon.com.br/s?k={nome do produto}`

### 3. Na página do produto

1. Fechar qualquer pop-up ou overlay (pressionar Escape ou clicar no X)
2. Identificar a galeria de imagens completa
3. Avaliar TODAS as imagens disponíveis antes de capturar
4. Para cada imagem selecionada: clicar para ampliar, tirar screenshot

### 4. Selecionar as imagens por tipo

**Imagem Principal:**
- Fundo branco ou neutro, produto centralizado, alta resolução
- Salvar como: `images/{produto}/{produto}-principal.png`

**Imagem Lifestyle (se disponível):**
- Produto em uso no contexto real (pessoa usando, ambiente doméstico)
- Salvar como: `images/{produto}/{produto}-lifestyle.png`

**Imagem de Detalhe (se relevante):**
- Close-up de características importantes
- Salvar como: `images/{produto}/{produto}-detalhe.png`

### 5. Selecionar o Melhor Criativo para Anúncio Pago

Esta é a seleção mais importante para o Analista de Tráfego. Avaliar todas as imagens capturadas e escolher a melhor para Meta Ads com base nos critérios:

| Critério | O que verificar |
|---|---|
| Fundo limpo | Branco, neutro ou desfocado — sem elementos visuais competindo |
| Sem texto sobreposto | Imagem sem banners, badges de desconto ou texto da loja |
| Sem marca d'água | Sem logo Shopee/ML/Amazon visível sobre o produto |
| Produto bem enquadrado | Centralizado, boa iluminação, alta resolução |
| Apelo emocional | Lifestyle de qualidade pode superar fundo branco |

**Hierarquia:**
1. Lifestyle com fundo limpo (maior desempenho em Reels/Stories Ads)
2. Fundo branco com produto centralizado (melhor para Feed Ads)
3. Melhor disponível se nenhuma das anteriores for ideal

Salvar como: `images/{produto}/{produto}-ad-criativo.png`

Nota no brief: indicar se o criativo tem texto sobreposto ou marca d'água visível, pois isso afeta a aprovação pelo Meta Ads.

### 6. Verificar vídeo do vendedor
- Verificar se há seção de vídeo na página do produto
- Documentar a URL do vídeo se existir — útil para Reels e anúncios em vídeo

### 7. Montar o brief visual

Para cada produto, preencher:

```
PRODUTO: [nome]
MARKETPLACE: [ML/Shopee/Amazon]
URL: [URL acessada]

IMAGEM PRINCIPAL:
- Arquivo: images/{produto}/{produto}-principal.png
- Descrição: [o que mostra]
- Formato ideal: Feed 1:1
- Observação: [qualidade, pontos fortes]

IMAGEM LIFESTYLE (se encontrada):
- Arquivo: images/{produto}/{produto}-lifestyle.png
- Descrição: [contexto de uso]
- Formato ideal: Reels/Stories 9:16
- Observação: [por que performa bem]

VÍDEO DISPONÍVEL: [Sim — URL / Não]

MELHOR CRIATIVO PARA ANÚNCIO PAGO:
- Arquivo: images/{produto}/{produto}-ad-criativo.png
- Tipo: [fundo branco / lifestyle / detalhe]
- Por que é o melhor: [1–2 razões baseadas nos critérios Meta Ads]
- Tem texto sobreposto: [Sim/Não]
- Tem marca d'água visível: [Sim/Não]
- Placement recomendado: [Feed Ad 1:1 / Stories Ad 9:16 / ambos]

RECOMENDAÇÃO DE USO:
- Feed (orgânico): [qual imagem]
- Reels/TikTok: [qual imagem ou vídeo]
- Stories (orgânico): [qual imagem]
- WhatsApp: [qual imagem]
- Facebook (orgânico): [qual imagem]
- Meta Ads (pago): images/{produto}/{produto}-ad-criativo.png
```

## Checklist de Saída

- [ ] Todos os produtos aprovados foram visitados?
- [ ] Pelo menos 1 screenshot capturado por produto?
- [ ] `{produto}-ad-criativo.png` salvo para cada produto?
- [ ] Campo "MELHOR CRIATIVO PARA ANÚNCIO PAGO" preenchido para todos?
- [ ] Pop-ups fechados antes de capturar?
- [ ] Brief visual preenchido com todas as plataformas (incluindo Meta Ads)?
- [ ] Vídeo documentado quando disponível?

## Tratamento de Erros

- **URL não funciona:** Buscar pelo nome no marketplace, identificar o produto correto
- **Produto não encontrado:** Informar ao usuário e pular para o próximo
- **Imagens não carregam:** Tirar screenshot do disponível e documentar limitação
- **Pop-up bloqueia galeria:** Pressionar Escape, scroll para baixo, ou clicar fora
- **Página em captcha:** Informar ao usuário — não tentar contornar
- **Nenhuma imagem sem marca d'água:** Usar a melhor disponível e sinalizar no brief: "⚠️ todas as imagens têm marca d'água — verificar se Meta Ads aprova"

## Entrega

Output salvo em: `squads/achados-ofertas/output/{run_id}/v1/visual-brief.md`
Imagens salvas em: `squads/achados-ofertas/output/{run_id}/images/`

Entregar para: **Estrategista** (step 03) + **Analista de Tráfego** (step 08)
