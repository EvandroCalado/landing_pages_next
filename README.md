<h1 align="center"> 🖥️ Landing Page </h1>
<h3 align="center"><a href="https://landing-pages-next.vercel.app" target="_blank" > 🚀 Click aqui para acessar </a></h3>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<p align="center">
  <a href="#Introdução"> 🧩 Introdução </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Resultados"> 🚀 Resultados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Dependências"> 🧪 Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Ideias">💡 Possíveis Melhorias </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Creditos"> 🏆 Créditos </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<br/>

<a id="Introdução"></a>
## 🧩 Introdução 

<br />

  ⭐ Bem-vindo à minha landing page, criada com as tecnologias mais modernas e eficientes do mercado! Aqui, utilizei Next.js, Styled Components, Storybook, Jest e Husky para oferecer a você a melhor experiência possível.

Com o Next.js, consegui criar uma aplicação web de alta performance com SSR, utilizando React como base. Isso garante que a página seja rápida e responsiva, com um tempo de carregamento mínimo, mesmo em conexões mais lentas.

Já os Styled Components me permitiu criar estilos de maneira eficiente e escalável, garantindo um código mais limpo e fácil de manter. Além disso, os componentes são totalmente customizáveis e reutilizáveis, permitindo criar recursos de maneira mais ágil.

Para garantir a qualidade do código, utilizei o Storybook, que me permitiu testar os componentes de maneira isolada e independente do resto da aplicação. Isso garante que cada componente esteja funcionando corretamente antes mesmo de ser integrado à página.

E para garantir a segurança e a estabilidade do código, utilizei o Jest e o Husky. O Jest me permitiu criar testes automatizados para garantir que o código esteja funcionando corretamente em todas as situações possíveis, enquanto o Husky garantiu que nenhum código quebrado seja enviado para produção.

Com todas essas tecnologias, consegui criar uma landing page incrível, que oferece a melhor experiência possível para os nossos usuários. Estou sempre trabalhando para melhorar ainda mais a página e adotando novas tecnologias conforme elas surgem no mercado. Obrigado por visitar a nossa landing page!

<br/>

<a id="Resultados"></a>
## 🚀 Resultados 

<br/> 

## Front-end

</summary>

### 📱 Mobile 

⭐ Home | ⭐ Section | ⭐ Menu | ⭐ Menu on Hover |
|---|---|---|---|
![Tela 1](https://user-images.githubusercontent.com/110628201/227029240-929baa95-567f-4e69-b25a-54c4e8f840e6.png) | ![Tela 2](https://user-images.githubusercontent.com/110628201/227029294-1dc7c1f1-3d39-4132-8063-85357e309bbd.png) | ![Tela 3](https://user-images.githubusercontent.com/110628201/227029334-f4b2d708-e541-4157-8f16-9ca1dd9e70f3.png) | ![Tela 4](https://user-images.githubusercontent.com/110628201/227029356-4ccbef30-f4d2-4038-bfeb-9dfd7f93e0b8.png)
  
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

### 💻 Desktop 
  
 ⭐ Home | ⭐ Gallery | ⭐ Contact |
|---|---|---|
![Desktop 1](https://user-images.githubusercontent.com/110628201/227028076-e3f0c396-f308-4aee-b8f2-c3b4f5236d96.png) | ![Desktop 2](https://user-images.githubusercontent.com/110628201/227028194-d288be70-c021-4a1e-983c-2bc7793e5028.png) | ![Desktop 3](https://user-images.githubusercontent.com/110628201/227028240-91d9835c-54b7-4191-bb9b-11b23c0a96e2.png)

<br/>

<a id="Dependências"></a>
## 🧪 Dependências

<br />   

## `📖 Scripts` 

```JSON
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next export",
    "storybook": "start-storybook -p 6006 -s ./public",
    "build-storybook": "build-storybook",
    "deploy-static": "npm run build && npm run export",
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
    "lint": "eslint src --max-warnings=0",
    "lint-staged": "lint-staged",
    "prepare": "husky install"
  }

```

## `📖 Dependencies` 

```JSON
  "dependencies": {
    "@styled-icons/material-outlined": "^10.47.0",
    "next": "13.2.4",
    "prop-types": "^15.8.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-router-dom": "^6.9.0",
    "styled-components": "^5.3.9"
  }

```

## `📖 devDependencies` 

```JSON
      "devDependencies": {
    "@babel/core": "^7.21.3",
    "@storybook/addon-actions": "^6.5.16",
    "@storybook/addon-essentials": "^6.5.16",
    "@storybook/addon-interactions": "^6.5.16",
    "@storybook/addon-links": "^6.5.16",
    "@storybook/builder-webpack5": "^6.5.16",
    "@storybook/manager-webpack5": "^6.5.16",
    "@storybook/react": "^6.5.16",
    "@storybook/testing-library": "^0.0.13",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "@types/node": "^18.15.3",
    "@types/react": "^18.0.28",
    "@types/styled-components": "^5.1.26",
    "@typescript-eslint/eslint-plugin": "^5.55.0",
    "@typescript-eslint/parser": "^5.55.0",
    "babel-loader": "^8.3.0",
    "babel-plugin-styled-components": "^2.0.7",
    "eslint": "^8.36.0",
    "eslint-config-next": "^13.2.4",
    "eslint-config-prettier": "^8.7.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-storybook": "^0.6.11",
    "husky": "^8.0.0",
    "jest": "^29.5.0",
    "jest-environment-jsdom": "^29.5.0",
    "jest-styled-components": "^7.1.1",
    "lint-staged": "^13.2.0",
    "prettier": "^2.8.4",
    "ts-jest": "^29.0.5",
    "typescript": "^5.0.2"
  }

```
<br />

<a id="Ideias"></a>
## 💡 Testes

<br />

🧷 Componentes

<br />

⭐ Jest |
|---|
|  ![Coverage](https://user-images.githubusercontent.com/110628201/227054347-77d72e10-39da-470d-8569-5399e389f6b2.png)

<br /> 

<a id="Creditos"></a>
## 🏆 Créditos

<br /> 

<div > 

| [<img src="https://avatars.githubusercontent.com/u/110628201?v=4" width=300><br><sub> Evandro Calado </sub>](https://www.linkedin.com/in/evandro-calado/) | ***Hello 😃 Se você chegou até aqui, acredito que gostou do meu projeto, nesse caso temos algo em comum, sendo assim que tal conversamos um pouco? Meu chama no linkedin 😁*** | 
|---|---|


</div> 
