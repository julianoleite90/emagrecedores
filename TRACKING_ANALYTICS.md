# Sistema de Tracking - Google Analytics

## Visão Geral

Sistema completo de tracking implementado para monitorar as interações dos usuários no site de análise de emagrecedores. Todos os eventos são enviados para o Google Analytics usando `gtag`.

## Eventos Implementados

### 1. Quiz - Etapas
Rastreia cada etapa do quiz de 4 perguntas:

**Evento:** `quiz_step_completed`
- **step_number:** 1, 2, 3 ou 4
- **answer:** Texto da resposta selecionada
- **event_category:** "Quiz"
- **event_label:** "Etapa 1", "Etapa 2", "Etapa 3" ou "Etapa 4"

#### Etapa 1 - Motivação
- **Pergunta:** "Você verdadeiramente deseja emagrecer e ter uma vida mais saudável e mais disposição?"
- **Opções:** "Sim" ou "Não"

#### Etapa 2 - Objetivo
- **Pergunta:** "Qual é seu maior objetivo para emagrecer?"
- **Opções:** Perder cintura, acabar compulsão, queimar gordura, reduzir inchaço, perder peso

#### Etapa 3 - Desafio
- **Pergunta:** "Qual é o seu maior desafio atual?"
- **Opções:** Controlar fome, acelerar metabolismo, manter motivação, ver resultados, falta de tempo

#### Etapa 4 - Prazo
- **Pergunta:** "Em quanto tempo você quer ver resultados?"
- **Opções:** 7, 15, 30 ou 60 dias

### 2. Quiz - Conclusão
Rastreia quando o usuário completa todo o quiz:

**Evento:** `quiz_completed`
- **motivation:** Resposta da motivação (sim, nao)
- **goal:** Objetivo selecionado (cintura, compulsao, queimar, inchaco, peso)
- **challenge:** Desafio selecionado (fome, metabolismo, motivacao, resultados, tempo)
- **timeframe:** Prazo selecionado (7dias, 15dias, 30dias, 60dias)
- **event_category:** "Quiz"
- **event_label:** "Quiz Finalizado"

### 3. Hero Section - CTA
Rastreia clique no botão principal da seção hero:

**Evento:** `hero_cta_click`
- **event_category:** "Hero"
- **event_label:** "Conhecer Remédios"

### 4. Quiz - CTA Final
Rastreia clique no botão após completar o quiz:

**Evento:** `quiz_cta_click`
- **event_category:** "Quiz"
- **event_label:** "Ver Ranking Completo"

### 5. Produtos - CTAs Principais (Site Oficial)
Rastreia cliques nos botões "Acessar Site Oficial" de cada produto:

**Eventos Específicos por Produto:**
- `cta_definamax` - Clique no CTA do Definamax
- `cta_ozenvitta` - Clique no CTA do Ozenvitta  
- `cta_sb2` - Clique no CTA do SB2
- `cta_newdetox` - Clique no CTA do NewDetox
- `cta_mounja` - Clique no CTA do Mounja

**Parâmetros incluídos:**
- **product_name:** Nome do produto
- **product_position:** Posição no ranking (1-5)
- **action:** "site_oficial"
- **event_category:** "Product CTA"
- **event_label:** "CTA [Nome do Produto]"

### 6. Produtos - Botões de Informações
Rastreia cliques nos botões "Obter mais informações" de cada produto:

**Eventos Específicos por Produto:**
- `info_definamax` - Clique em informações do Definamax
- `info_ozenvitta` - Clique em informações do Ozenvitta
- `info_sb2` - Clique em informações do SB2
- `info_newdetox` - Clique em informações do NewDetox
- `info_mounja` - Clique em informações do Mounja

**Parâmetros incluídos:**
- **product_name:** Nome do produto
- **product_position:** Posição no ranking (1-5)
- **action:** "informacoes"
- **event_category:** "Product Info"
- **event_label:** "Informações [Nome do Produto]"

## Produtos Rastreados

1. **Definamax** (1° lugar) - `cta_definamax` / `info_definamax`
2. **Ozenvitta** (2° lugar) - `cta_ozenvitta` / `info_ozenvitta`
3. **SB2** (3° lugar) - `cta_sb2` / `info_sb2`
4. **NewDetox** (4° lugar) - `cta_newdetox` / `info_newdetox`
5. **Mounja** (5° lugar) - `cta_mounja` / `info_mounja`

## Implementação Técnica

### Arquivo Principal
`src/utils/analytics.ts` - Contém todas as funções de tracking

### Componentes Modificados
- `HeroSection.tsx` - Tracking do CTA principal
- `WhyConsiderSection.tsx` - Tracking do quiz completo (4 etapas)
- `RankingSection.tsx` - Tracking de todos os produtos
- `ScrollLink.tsx` - Suporte a callbacks onClick
- `UtmLink.tsx` - Suporte a callbacks onClick

### Funções Principais

```typescript
// Tracking de etapas do quiz
trackQuizStep(step: number, answer?: string)

// Tracking de conclusão do quiz
trackQuizCompleted(answers: Record<string, string>)

// Tracking de CTAs de produtos (nome específico no evento)
trackProductCTA(productName: string, position: number)

// Tracking de informações de produtos (nome específico no evento)
trackProductInfo(productName: string, position: number)

// Tracking do CTA principal
trackHeroCTA()

// Tracking do CTA após quiz
trackQuizCTA()
```

## Como Visualizar no Google Analytics

1. **Eventos em Tempo Real:**
   - Acesse Google Analytics > Relatórios > Tempo real > Eventos
   - Veja os eventos sendo disparados com nomes específicos dos produtos

2. **Análise de Eventos:**
   - Acesse Google Analytics > Relatórios > Engajamento > Eventos
   - Filtre por evento específico (ex: `cta_definamax`)

3. **Comparação entre Produtos:**
   - Compare eventos `cta_definamax` vs `cta_ozenvitta` etc.
   - Analise `cta_[produto]` vs `info_[produto]` para cada produto

4. **Funil de Conversão:**
   - Configure funis personalizados baseados nos eventos
   - Ex: hero_cta_click → quiz_step_completed (1-4) → quiz_completed → cta_definamax

## Exemplos de Eventos

### Quiz Etapa 1 (Motivação)
```javascript
{
  event_name: "quiz_step_completed",
  step_number: 1,
  answer: "Sim",
  event_category: "Quiz",
  event_label: "Etapa 1"
}
```

### CTA Definamax (Novo formato)
```javascript
{
  event_name: "cta_definamax",
  product_name: "Definamax",
  product_position: 1,
  action: "site_oficial",
  event_category: "Product CTA",
  event_label: "CTA Definamax"
}
```

### Informações Ozenvitta (Novo formato)
```javascript
{
  event_name: "info_ozenvitta",
  product_name: "Ozenvitta",
  product_position: 2,
  action: "informacoes",
  event_category: "Product Info",
  event_label: "Informações Ozenvitta"
}
```

### Quiz Completo
```javascript
{
  event_name: "quiz_completed",
  motivation: "sim",
  goal: "cintura",
  challenge: "fome",
  timeframe: "30dias",
  event_category: "Quiz",
  event_label: "Quiz Finalizado"
}
```

## Vantagens do Novo Sistema

1. **Identificação Direta:** Nome do produto aparece diretamente no nome do evento
2. **Filtros Específicos:** Fácil filtrar por produto no GA
3. **Comparações:** Simples comparar performance entre produtos
4. **Relatórios:** Relatórios automáticos por produto específico

## Análise de Funil Completo

Com os eventos específicos por produto, você pode analisar:

1. **Por Produto:** Performance individual de cada emagrecedor
2. **Jornada Completa:** Quiz → Produto específico → Conversão
3. **Comparação:** Qual produto converte mais após cada tipo de resposta do quiz
4. **Correlação:** Respostas do quiz x produto escolhido

## Debugging

O sistema inclui logs no console para desenvolvimento:
- Eventos aparecem com nomes específicos (ex: "cta_definamax")
- Parâmetros incluem nome do produto e ação
- Fácil identificação de qual produto foi clicado

## Configuração do Google Analytics

Certifique-se de que o Google Analytics esteja configurado no site com:
1. Tag gtag implementada
2. Measurement ID configurado
3. Eventos customizados habilitados 