---
id: 02-visual
agent: visual
execution: inline
description: "Navega até a página de cada produto aprovado e captura a melhor imagem para divulgação"
outputFile: squads/achados-ofertas/output/visual-brief.md
---

# Step 02-visual — Captura de Imagens

## Objetivo

Para cada produto aprovado pelo usuário no checkpoint-produtos, navegar até a página do produto no marketplace, avaliar a galeria de imagens e capturar:
1. A melhor imagem de produto (fundo branco/neutro) → uso no Feed
2. A melhor imagem lifestyle (produto em uso) → uso em Reels/Stories
3. Verificar se há vídeo do vendedor disponível → documentar para Reels

## Processo de Execução

### 1. Ler os produtos aprovados
Consultar o relatório do Garimpeiro (`output/{run_id}/v1/pesquisa.md`) e obter:
- Nome de cada produto aprovado
- Marketplace (Shopee / ML / Amazon)
- URL do produto (se preenchida) ou nome para buscar

### 2. Para cada produto — navegação

**Se tiver URL:**
- Navegar diretamente para a URL do produto

**Se não tiver URL:**
- Construir URL de busca:
  - Shopee: `https://shopee.com.br/search?keyword={nome do produto}`
  - ML: `https://lista.mercadolivre.com.br/{nome do produto}`
  - Amazon: `https://www.amazon.com.br/s?k={nome do produto}`
- Navegar para a busca
- Identificar e clicar no produto correto (verificar nome e preço)

### 3. Na página do produto

1. Fechar qualquer pop-up ou overlay que aparecer (pressionar Escape ou clicar no X)
2. Localizar a galeria de imagens do produto
3. Tirar snapshot da página para avaliar as imagens disponíveis
4. Para cada imagem relevante na galeria:
   - Clicar para ampliar
   - Tirar screenshot
5. Verificar se há seção de vídeo do vendedor — documentar a URL se existir

### 4. Salvar e organizar
- Criar pasta: `squads/achados-ofertas/output/{run_id}/images/{id-produto}/`
- Salvar screenshots com nomes descritivos

### 5. Montar o brief visual
Para cada produto, completar o template:

```
PRODUTO: [nome]
MARKETPLACE: [ML/Shopee/Amazon]
URL: [URL acessada]

IMAGEM PRINCIPAL:
- Arquivo: [caminho do arquivo]
- Descrição: [o que a imagem mostra]
- Formato ideal: Feed 1:1
- Observação: [qualidade, destaque, pontos fortes]

IMAGEM LIFESTYLE (se encontrada):
- Arquivo: [caminho do arquivo]
- Descrição: [contexto de uso]
- Formato ideal: Reels/Stories 9:16
- Observação: [por que performar melhor para vídeo/stories]

VÍDEO DISPONÍVEL: [Sim — URL / Não]

RECOMENDAÇÃO DE USO:
- Feed: [qual imagem]
- Reels/TikTok: [qual imagem ou vídeo]
- Stories: [qual imagem]
- WhatsApp: [qual imagem]
```

## Checklist de Saída

- [ ] Todos os produtos aprovados foram visitados?
- [ ] Pelo menos 1 screenshot capturado por produto?
- [ ] Pop-ups fechados antes de capturar?
- [ ] Brief visual preenchido para todos os produtos?
- [ ] Recomendação de uso preenchida por plataforma?

## Tratamento de Erros

- **Produto não encontrado na busca:** Informar ao usuário e pular para o próximo produto
- **Imagens não carregam:** Tirar screenshot do que estiver disponível e documentar limitação
- **Pop-up bloqueia galeria:** Pressionar Escape, scroll para baixo, ou clicar fora do pop-up
- **Página em captcha:** Informar ao usuário — não tentar contornar

## Entrega

Output salvo em: `squads/achados-ofertas/output/{run_id}/v1/visual-brief.md`
Imagens salvas em: `squads/achados-ofertas/output/{run_id}/images/`

Entregar para: **Estrategista** (step 03-estrategia)
