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

### 5. Produtos - CTAs Principais
Rastreia cliques nos botões "Acessar Site Oficial" de cada produto:

**Evento:** `product_cta_click`
- **product_name:** Nome do produto (ex: "Definamax", "Ozenvitta", "SB2", "NewDetox", "Mounja")
- **product_position:** Posição no ranking (1, 2, 3, 4, 5)
- **event_category:** "Product CTA"
- **event_label:** "CTA [Nome do Produto]"

### 6. Produtos - Botões de Informações
Rastreia cliques nos botões "Obter mais informações" de cada produto:

**Evento:** `product_info_click`
- **product_name:** Nome do produto
- **product_position:** Posição no ranking (1, 2, 3, 4, 5)
- **event_category:** "Product Info"
- **event_label:** "Informações [Nome do Produto]"

## Produtos Rastreados

1. **Definamax** (1° lugar)
2. **Ozenvitta** (2° lugar)
3. **SB2** (3° lugar)
4. **NewDetox** (4° lugar)
5. **Mounja** (5° lugar)

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

// Tracking de CTAs de produtos
trackProductCTA(productName: string, position: number)

// Tracking de informações de produtos
trackProductInfo(productName: string, position: number)

// Tracking do CTA principal
trackHeroCTA()

// Tracking do CTA após quiz
trackQuizCTA()
```

## Como Visualizar no Google Analytics

1. **Eventos em Tempo Real:**
   - Acesse Google Analytics > Relatórios > Tempo real > Eventos
   - Veja os eventos sendo disparados conforme os usuários interagem

2. **Análise de Eventos:**
   - Acesse Google Analytics > Relatórios > Engajamento > Eventos
   - Filtre por categoria ou nome do evento

3. **Funil de Conversão:**
   - Configure funis personalizados baseados nos eventos
   - Ex: hero_cta_click → quiz_step_completed (1-4) → quiz_completed → product_cta_click

## Exemplos de Eventos

### Quiz Etapa 1 (Nova - Motivação)
```javascript
{
  event_name: "quiz_step_completed",
  step_number: 1,
  answer: "Sim",
  event_category: "Quiz",
  event_label: "Etapa 1"
}
```

### Quiz Etapa 2 (Objetivo)
```javascript
{
  event_name: "quiz_step_completed",
  step_number: 2,
  answer: "Perder até 8 cm de cintura rapidamente",
  event_category: "Quiz",
  event_label: "Etapa 2"
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

### CTA Definamax
```javascript
{
  event_name: "product_cta_click",
  product_name: "Definamax",
  product_position: 1,
  event_category: "Product CTA",
  event_label: "CTA Definamax"
}
```

### Informações Ozenvitta
```javascript
{
  event_name: "product_info_click",
  product_name: "Ozenvitta",
  product_position: 2,
  event_category: "Product Info",
  event_label: "Informações Ozenvitta"
}
```

## Análise de Funil Completo

Com a nova etapa de motivação, você pode analisar:

1. **Etapa 1:** Quantos respondem "Sim" vs "Não" para motivação
2. **Etapa 2:** Objetivos mais escolhidos por quem está motivado
3. **Etapa 3:** Principais desafios correlacionados com objetivos
4. **Etapa 4:** Expectativas de tempo por perfil de usuário
5. **Conversão:** Quais perfis convertem mais nos produtos

## Debugging

O sistema inclui logs no console para desenvolvimento:
- Todos os eventos são logados no console quando disparados
- Aparece "Analytics Event (no gtag)" se o gtag não estiver disponível
- Aparece "Analytics Event" seguido dos dados quando o gtag está ativo

## Configuração do Google Analytics

Certifique-se de que o Google Analytics esteja configurado no site com:
1. Tag gtag implementada
2. Measurement ID configurado
3. Eventos customizados habilitados 