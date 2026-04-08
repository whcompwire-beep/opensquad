# Checkpoint: Relatório de Tráfego Pago

**Tipo**: checkpoint
**Step ID**: checkpoint-ads

---

## Objetivo

Apresentar o relatório de potencial de impulsionamento ao usuário e capturar decisões sobre quais peças impulsionar e com quais ajustes.

---

## Instruções para o Runner

1. Apresente o resumo do relatório de ads ao usuário:
   - Ranking de peças por score de ads
   - Alertas de conformidade (se houver)
   - Plano de impulsionamento das peças recomendadas

2. Pergunte ao usuário (AskUserQuestion):

**"Como deseja prosseguir com o impulsionamento desta rodada?"**

Opções:
- **Impulsionar as peças recomendadas** — conforme o plano da Especialista
- **Revisar os ajustes sugeridos antes** — ver lista de ajustes necessários
- **Salvar o plano para depois** — guardar o relatório sem ação imediata
- **Não impulsionar esta rodada** — usar apenas organicamente

3. Registre a decisão do usuário no `state.json` da rodada.

---

## Saída do Checkpoint

```json
{
  "decisao_ads": "impulsionar_recomendadas | revisar_ajustes | salvar_para_depois | nao_impulsionar",
  "pecas_selecionadas_para_ads": ["nome-peca-1", "nome-peca-2"]
}
```

---

## Critério de Conclusão

O checkpoint está concluído quando a decisão do usuário está registrada.

Este é o último step do pipeline.
