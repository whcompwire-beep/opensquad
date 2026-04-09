# Step 06 — Entrega Final

## Metadata
- **Agent:** Copywriter de Ofertas
- **Input:** Conteúdo aprovado pelo Revisor (todos os produtos e plataformas)
- **Output:** Arquivos de publicação organizados por produto e plataforma + agenda de publicação
- **Tempo esperado:** 5–10 minutos

---

## Objetivo

Organizar todo o conteúdo aprovado em arquivos separados e prontos para publicação, eliminando a necessidade de buscar o texto certo dentro de arquivos longos. Entregar uma agenda de publicação com horários, plataformas e instruções de link para cada produto.

---

## Instruções de Execução

### 1. Criar arquivos de publicação por produto

Para cada produto aprovado nesta rodada, criar arquivos em:
`squads/achados-ofertas/output/{run_id}/publicar/produto-[N]-[nome-slug]/`

Arquivos a criar por produto:
- `instagram-reels.txt` — legenda pronta para colar no Instagram Reels
- `instagram-feed.txt` — slides + legenda (carrossel ou imagem única)
- `instagram-stories.txt` — texto do Story
- `whatsapp.txt` — mensagem para broadcast
- `facebook-post.txt` — corpo do post
- `facebook-comentario.txt` — link do afiliado (colar como primeiro comentário logo após publicar)
- `tiktok-caption.txt` — legenda curtíssima + hashtags
- `variantes-ab.txt` — versões A e B do hook
- `dados-produto.txt` — todos os dados do produto em um lugar

### 2. Criar dados-produto.txt

Para cada produto, criar `dados-produto.txt` com:
```
PRODUTO: [nome completo]
MARKETPLACE: [ML/Shopee/Amazon]
URL DO PRODUTO: [URL real da página]
LINK DE AFILIADO: [URL gerada ou ⚠️ PENDENTE — gerar no painel antes de publicar]
CÓDIGO ML: [RIOMAFRA-XXX-000 ou N/A]
KEYWORD-CTA (Instagram): [PALAVRA]
PREÇO ATUAL: R$[X]
PREÇO ORIGINAL: R$[Y]
DESCONTO: [Z]%
AVALIAÇÃO: [X.X] ⭐ ([N] avaliações)
URGÊNCIA: [🔥 Urgente / ✅ Recomendado]
```

### 3. Criar agenda de publicação

Criar arquivo `squads/achados-ofertas/output/{run_id}/publicar/agenda.md`:

```markdown
# Agenda de Publicação — [DATA]

## Produtos desta rodada
- [Produto 1] — [🔥 Urgente / ✅ Recomendado]
- [Produto 2] — [urgência]

---

## Cronograma

| Horário | Plataforma | Produto | Arquivo | Instrução especial |
|---|---|---|---|---|
| [HH:MM] | Stories | [produto] | produto-1/instagram-stories.txt | Link direto no Story |
| [HH:MM] | WhatsApp | [produto] | produto-1/whatsapp.txt | Enviar para grupo de ofertas |
| [HH:MM] | Facebook | [produto] | produto-1/facebook-post.txt | ⚠️ Colar link de facebook-comentario.txt como 1° comentário |
| [HH:MM] | Reels | [produto] | produto-1/instagram-reels.txt | Keyword: [KEYWORD] |
| [HH:MM] | TikTok | [produto] | produto-1/tiktok-caption.txt | ⚠️ Atualizar link na bio antes de publicar |
| [HH:MM] | Feed | [produto] | produto-1/instagram-feed.txt | Keyword: [KEYWORD] |

---

## ⚠️ Links de afiliado pendentes

[Listar produtos onde link = PENDENTE, com instrução de onde gerar]
- [Produto X]: gerar em https://affiliate.shopee.com.br/
- [Produto Y]: gerar em https://www.mercadolivre.com.br/afiliados

---

## Lembretes por plataforma

### Instagram (Feed e Reels)
- NUNCA colocar URL na legenda
- Keyword-CTA gera comentários → mais alcance orgânico
- Link vai na DM automática ou nos Stories

### Facebook
1. Publicar o post primeiro
2. Imediatamente após, colar o conteúdo de `facebook-comentario.txt` como PRIMEIRO COMENTÁRIO
3. O post com link no comentário tem mais alcance que com link no corpo

### TikTok
1. Atualizar o link na bio ANTES de publicar o vídeo
2. Bio deve direcionar para grupo de WhatsApp ou link de afiliado
3. A legenda está em `tiktok-caption.txt` — não alterar

### WhatsApp
- Enviar para o grupo de ofertas no horário de pico (12h ou 20h)
- Não enviar direto para contatos individuais sem permissão
```

### 4. Verificar completude antes de finalizar

- [ ] Um arquivo por plataforma para cada produto aprovado?
- [ ] `dados-produto.txt` criado para cada produto?
- [ ] `agenda.md` criado com todos os horários e instruções?
- [ ] Produtos com link pendente sinalizados na agenda?
- [ ] Lembretes de link por plataforma incluídos?

---

## Comunicação Final ao Usuário

```
📦 ENTREGA CONCLUÍDA — [DATA]

[N] produto(s) organizados e prontos para publicação.

📁 Arquivos em: squads/achados-ofertas/output/{run_id}/publicar/

📅 Agenda: agenda.md — começar às [horário do primeiro post]

[Se houver pendências:]
⚠️ Links pendentes: [lista de produtos] — gerar nos painéis indicados na agenda

Basta copiar o conteúdo de cada arquivo na plataforma correspondente!
Lembre-se: Facebook — colar link como 1° comentário | TikTok — atualizar bio antes
```
