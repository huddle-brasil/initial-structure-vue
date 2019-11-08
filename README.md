<p align="center">
    <a href="https://www.huddlebrasil.com" target="_blank">
        <img width="100"src="https://www.huddlebrasil.com/images/logo/huddle-logo-chumbo.png">
    </a>
</p>

<h1 align="center">
    <strong>Estrutura inicial Vue-Cli3</strong>
</h1>

## Instalação

```bash
# 🎉 Clonar o projeto
git clone https://github.com/huddle-brasil/initial-structure-vue.git your-project-name
cd your-project-name

# ➕ Instalar dependências e iniciar o projeto
npm i && npm run serve
```

## Estrutura de pastas

* assets/ ficarão os arquivos de css e animações

* components/ ficarão os componentes apenas com a lógica de exibição 

* containers/ união de um ou mais componentes englobando um router-view para encapsular as views 

* helpers/ onde ficarão as funções de auxilio às regras de negócio

* router/ onde ficarão os arquivos responsáveis pelo roteamento da aplicação

* server/ onde ficarão as configurações e métodos de conexão com o servidor

* store/ onde ficarão os modules de cada entidade da aplicação 

* views/ união de um ou mais componentes para criar as páginas da aplicação e aplicar as regras de negócio 

* App.vue - Será o componente raiz da aplicação

* event-bus.js - Arquivo responsável por disponibilizar o event bus para aplicação

* main.js - Arquivo de inicialização do Vue