# Spec — Landing Page Rose Rabelo Seguros

## 1. Objetivo
Substituir o site atual em Canva (bragrosegurosagricolas.my.canva.site/rose-rabelo-seguros) por uma landing page profissional, com identidade visual própria, estrutura de conversão mais forte e todos os CTAs direcionando para o WhatsApp da corretora.

## 2. Referência de modelo
Estrutura inspirada na landing page de demo da Zoppy (zoppy.com.br/demo-zoppy-gd), adaptada do contexto B2B SaaS para o contexto de corretora de seguros B2C/local.

## 3. Diretrizes visuais
- Paleta de cores e tipografia: usar os tokens definidos em `MIGRATION_SPEC.md` do projeto do dashboard (Rose Rabelo Seguros), etapas de identidade visual já concluídas (paleta e tipografia).
- **Pendência**: tipografia ainda está em fechamento — os tokens finais precisam ser confirmados antes da implementação visual definitiva.
- Substituir todas as imagens de banco de imagens genéricas por fotografia/ilustração própria (a definir).

## 4. Stack técnica
React + Vite + Tailwind CSS + shadcn/ui — mesma stack já em uso no dashboard da Rose Rabelo, para manter consistência entre os projetos.

## 5. Estrutura de seções

### 5.1 Header fixo
- Logo Rose Rabelo Seguros
- Menu: Produtos, Sobre, Contato
- CTA: "Fale com a gente" → WhatsApp

### 5.2 Hero
- Headline de benefício direto (manter ou reforçar: "Sua vida muito mais tranquila e segura")
- Subheadline com prova de tempo de mercado (+19 anos)
- CTA primário → WhatsApp
- Imagem própria (substituir banco de imagens atual)

### 5.3 Prova social institucional
Números em vez de logos de clientes (que não existem neste contexto):
- Anos de mercado
- Quantidade de produtos oferecidos
- Outros números relevantes que a Rose queira usar (a definir)

### 5.4 Bloco de dor
"O que te deixa exposto hoje":
- Não ter a cobertura certa
- Não ter suporte em caso de sinistro
- Contratar seguro sem orientação especializada

### 5.5 Bloco de virada
Mensagem de posicionamento: "Você não precisa entender de seguro, precisa de alguém que entenda por você."

### 5.6 Grid de produtos
Manter os 12 produtos do site atual, com ícones/imagens próprias no lugar do banco de imagens genérico:
Automóveis, Caminhões/Cargas, Motocicletas, Bicicletas, Seguro de Vidas, Residencial, Empresarial, Responsabilidade Civil, Seguro Viagem, Acidentes Pessoais, Eletrônicos Portáteis, Consórcios.
Cada card mantém CTA individual para WhatsApp com mensagem pré-formatada por produto (padrão já usado no site atual).

### 5.7 Vantagens de ser cliente RR
Manter conteúdo existente, com tratamento visual novo:
- Atendimento Especializado
- Assistência 24hrs
- Acompanhamento de Sinistros

### 5.8 Como funciona o atendimento
Passos simples:
1. Fala com a gente
2. Entendemos sua necessidade
3. Cotação personalizada
4. Acompanhamento contínuo

### 5.9 CTA final
Repetição do CTA principal, com senso de urgência leve.

### 5.10 Rodapé
- Telefones: (37) 3333-2222 e (37) 3333-2350
- E-mail: comercial@roseseguros.com.br
- Endereço: Carmópolis-MG
- Horário: 08h30–18h
- Instagram: @roserabeloseguros
- Mapa incorporado (Google Maps)

### Seção não incluída nesta versão
Depoimentos de clientes — não há depoimentos reais disponíveis ainda. Estrutura deve ser pensada de forma que essa seção possa ser adicionada facilmente no futuro, sem precisar refazer o layout.

## 6. Regra de CTA — WhatsApp
Todos os CTAs do site (header, hero, cards de produto, CTA final) devem redirecionar para o número de atendimento da Rose Rabelo Seguros no WhatsApp: **55 37 3333-2222**, mantendo o padrão do site atual de mensagem pré-formatada por produto/contexto (ex: CTA do card "Automóveis" já preenche uma mensagem específica sobre seguro auto).

## 7. Próximos passos
1. Confirmar tokens finais de cor/tipografia (dependente da Etapa 3 da identidade visual)
2. Definir imagens/ilustrações próprias para substituir banco de imagens
3. Implementação em React + Vite + Tailwind via Claude Code
4. Deploy (avaliar se entra no mesmo projeto Vercel do dashboard ou em domínio próprio)
