# Landing Page - Rosangela Magali

Esta é uma landing page profissional desenvolvida para a terapeuta Rosangela Magali, focada em conversão e apresentação de serviços de terapia.

## 🚀 Tecnologias Utilizadas

- **HTML5 Semântico**: Estrutura otimizada para SEO.
- **CSS3 Moderno**: Uso de variáveis CSS (Custom Properties) para fácil manutenção e design responsivo (Mobile First).
- **JavaScript Vanilla**: Scripts leves para interatividade sem dependência de frameworks pesados.

## 📁 Estrutura do Projeto

- `index.html`: Arquivo principal com todo o conteúdo.
- `styles.css`: Folha de estilos contendo o design system e regras de layout.
- `script.js`: Lógica para menu mobile, accordion de FAQ e animações.

## 🎨 Personalização

### Cores e Fontes

Todas as cores e configurações principais estão definidas no início do arquivo `styles.css` dentro de `:root`.

```css
:root {
    --hue-primary: 180; /* Mude este valor para alterar a cor principal */
    /* ... */
}
```

### Imagens

As imagens atuais são placeholders do Unsplash. Para alterar, substitua os atributos `src` das tags `<img>` no `index.html` pelas URLs das suas imagens ou caminhos de arquivos locais (ex: `img/minha-foto.jpg`).

### WhatsApp

O link do WhatsApp está configurado para o número **+55 21 97984-2464**.
Para alterar o número ou a mensagem padrão, busque por `wa.me` no `index.html` e edite o link:
`https://wa.me/5521979842464?text=Sua%20Mensagem%20Aqui`

## 💰 Google AdSense

Espaços para anúncios foram marcados no código HTML com comentários:
`<!-- AdSense Placeholder: ... -->`

Para ativar:

1. Obtenha o código do seu bloco de anúncios no painel do Google AdSense.
2. Descomente e cole o script no `<head>` (para o script global).
3. Insira os blocos de anúncio `<ins class="adsbygoogle" ...>` nos locais indicados no `<body>`.

## 📦 Como Fazer Deploy

Esta página é estática, o que facilita muito a hospedagem gratuita ou de baixo custo.

### Opções Recomendadas

1. **Vercel / Netlify**:
   - Crie uma conta.
   - Arraste a pasta do projeto para o dashboard ou conecte seu repositório Git.
   - O deploy é automático.

2. **GitHub Pages**:
   - Crie um repositório no GitHub.
   - Suba os arquivos.
   - Vá em Settings > Pages e selecione a branch `main`.

## 📊 SEO e Performance

- As meta tags básicas já estão configuradas.
- Recomenda-se minificar o CSS e JS antes do deploy final para produção.
- Certifique-se de usar imagens otimizadas (formato WebP se possível) para manter o carregamento rápido.

---
Desenvolvido com carinho para Rosangela Magali.
