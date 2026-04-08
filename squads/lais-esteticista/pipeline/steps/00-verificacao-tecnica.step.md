# Step: Verificação Técnica

**Tipo**: sistema (sem agente)
**Step ID**: verificacao-tecnica

---

## Objetivo

Verificar se o ambiente técnico está pronto para uma rodada completa antes de iniciar qualquer trabalho de conteúdo. Evita rodadas incompletas por falha de renderização descoberta só no final.

---

## Instruções para o Runner

Execute esta verificação ANTES do checkpoint-tema:

### 1. Verificar Playwright
Tente executar `browser_take_screenshot` em uma URL pública simples (ex: https://example.com).

**Se Playwright estiver disponível:**
- Continue o pipeline normalmente
- Registre: `playwright_disponivel: true`

**Se Playwright NÃO estiver disponível:**
- Informe o usuário com a seguinte mensagem:

> ⚠️ **Playwright não está disponível nesta sessão.**
> O pipeline pode ser executado normalmente, mas os PNGs não serão gerados — apenas os HTMLs serão salvos.
> Os HTMLs ficam armazenados e podem ser renderizados em uma sessão futura com Playwright ativo.
>
> Deseja continuar mesmo assim?
> - **Sim, continuar** — pipeline completo, sem PNGs
> - **Não, aguardar** — encerrar e retomar quando Playwright estiver ativo

- Se o usuário escolher "Não, aguardar": encerre o pipeline aqui
- Se o usuário escolher "Sim, continuar": registre `playwright_disponivel: false` e continue

### 2. Registrar no estado da rodada
Salve em `output/{run_id}/state.json` (ou crie se não existir):

```json
{
  "playwright_disponivel": true,
  "verificacao_tecnica": "ok"
}
```

---

## Critério de Conclusão

O step está concluído quando:
- O status do Playwright está registrado
- O usuário foi informado (se Playwright indisponível) e tomou uma decisão
- O pipeline pode prosseguir para o checkpoint-tema
