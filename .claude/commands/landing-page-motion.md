---
name: landing-page-motion
description: Diretrizes de motion e animação para landing pages institucionais e de marketing. Use sempre que estiver planejando, especificando ou construindo uma landing page e o assunto de animação, transição, scroll, hover ou entrada de elementos surgir — mesmo que o usuário não peça animação explicitamente, sugira onde ela cabe. Cobre timing, easing, scroll reveal, hover states, contadores animados e o que evitar.
---

# Motion para Landing Pages

Diretrizes práticas para aplicar animação em landing pages institucionais/comerciais. O objetivo do motion aqui é guiar atenção e dar feedback, nunca decorar. Se a animação sumir e a página perder informação, ela está errada.

## Regras de timing

- Transições de UI: 200-400ms. Acima disso fica lento.
- Feedback de interação (hover, clique): 100-150ms, precisa ser quase instantâneo.
- Easing: `ease-out` para elementos entrando na tela (rápido no início, desacelera no fim). `ease-in-out` para transições de estado. Nunca `linear`.

## Onde aplicar motion (checklist ao planejar uma landing page)

1. **Scroll reveal nos blocos de conteúdo**: fade + slide sutil (translateY de 20-30px) conforme o usuário rola. Implementar com Intersection Observer (vanilla) ou Framer Motion (`whileInView`) se for React. Dá ritmo à página sem distrair.
2. **Hover em botões e cards**: mudança de cor, leve scale (1.02-1.05) ou shadow. Sempre com timing curto (100-150ms).
3. **Números/estatísticas**: contar de 0 até o valor final quando o bloco entra na viewport, se houver dados desse tipo (ex: "X clientes atendidos").
4. **Menu sticky**: transição suave de background ao rolar (de transparente para sólido).

Escolher no máximo 2-3 pontos de destaque por página. Não animar todo elemento.

## O que evitar

- Parallax pesado — quebra fácil no mobile.
- Animação de entrada em todo elemento da seção.
- Autoplay de carrossel sem controle do usuário.

## Implementação

- CSS puro (transitions/keyframes) resolve a maior parte dos casos. É leve, sem dependência.
- Framer Motion se o projeto for React e precisar de scroll-triggered animations mais sofisticadas.
- Intersection Observer API é o mecanismo por trás do scroll reveal, sem precisar de lib.

## Como aplicar numa spec de landing page

Ao escrever a especificação de build de uma landing page (para levar ao Claude Code, por exemplo), inclua uma seção de motion listando, seção por seção da página, qual dessas quatro categorias (scroll reveal, hover, contador, menu sticky) se aplica e com qual timing/easing. Não deixe motion como decisão implícita do desenvolvedor.
