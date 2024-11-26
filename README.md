# 🎥 Sistema de Seleção de Assentos de Cinema

Um sistema interativo para seleção de assentos em uma sala de cinema. Este projeto foi desenvolvido com **Next.js** e apresenta temas dinâmicos (Light/Dark), layout responsivo, e funcionalidade completa para simular uma reserva de assentos.

---

## 🚀 Funcionalidades

- **Seleção de Assentos**: Escolha entre assentos disponíveis, com estados visuais diferenciados (livre, selecionado e ocupado).
- **Cálculo de Preço**: O valor total é atualizado em tempo real com base nos assentos selecionados.
- **Tema Light/Dark**: Alternância suave entre modos claro e escuro.
- **Layout Responsivo**: Adaptado para dispositivos móveis e desktop.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para renderização e roteamento.
- **Flexbox/Grid**: Alinhamento e organização responsivos.
- **HTML5 & CSS3**: Estruturação e estilização.

---

## 📂 Estrutura do Projeto

```plaintext
📁 projeto-cinema
├── 📁 components
│   ├── Seat.js               # Componente individual de assento
│   ├── ThemeToggle.js        # Alternância de tema Light/Dark
├── 📁 context
│   └── ThemeContext.js       # Contexto para gerenciamento do tema
├── 📁 pages
│   ├── _app.js               # Ponto de entrada do Next.js
│   ├── index.js              # Página principal
├── 📁 public
│   └── movieData.json        # Dados do filme e assentos
├── 📁 styles
│   ├── globals.css           # Estilos globais
│   ├── Home.module.css       # Estilos específicos da página principal
│   └── ThemeToggle.module.css # Estilos do botão de alternância de tema
└── package.json              # Configuração do projeto e dependências
```

---

## 🖥️ Pré-visualização

### 🎨 Temas Light e Dark
| **Light**                             | **Dark**                              |
|---------------------------------------|---------------------------------------|

### 📱 Layout Responsivo
| **Desktop**                           | **Mobile**                            |
|---------------------------------------|---------------------------------------|

---

## ⚙️ Como Executar

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/projeto-cinema.git
cd projeto-cinema
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Execute o Projeto
```bash
npm run dev
```

### 4. Acesse no Navegador
Abra [http://localhost:3000](http://localhost:3000) para visualizar o projeto.

---
