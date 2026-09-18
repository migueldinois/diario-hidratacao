# Diario de Hidratacao

Aplicativo mobile para acompanhar o consumo diario de agua e o progresso em relacao a uma meta de hidratacao.

> **Status:** projeto em desenvolvimento. No momento, a tela inicial exibe apenas o titulo do aplicativo.

## Objetivo

O aplicativo sera usado para registrar a quantidade de agua consumida ao longo do dia, visualizar o progresso em tempo real e facilitar o acompanhamento de uma meta diaria.

## Repositorio

[github.com/migueldinois/diario-hidratacao](https://github.com/migueldinois/diario-hidratacao)

## Requisitos planejados

- Exibir a meta diaria de hidratacao no topo da tela.
- Mostrar o total consumido em mililitros e a porcentagem da meta atingida.
- Apresentar uma barra visual de progresso, limitada a 100%.
- Disponibilizar botoes de registro rapido para adicionar `+200 ml`, `+350 ml` e `+500 ml`.
- Permitir reiniciar o contador do dia.
- Organizar a aplicacao em componentes reutilizaveis.
- Utilizar a biblioteca `react-native-safe-area-context` para lidar com areas seguras do dispositivo.

## Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- React 19
- JavaScript/JSX

## Pre-requisitos

- Node.js instalado.
- npm instalado.
- Expo CLI via o projeto (`npx expo`) ou Expo Go em um dispositivo movel.

Para executar no Android, e necessario ter um dispositivo conectado ou um emulador configurado. Para executar no iOS, e necessario macOS com Xcode ou um dispositivo usando o Expo Go.

## Instalacao

1. Clone o repositorio e entre na pasta do projeto:

   ```bash
   git clone https://github.com/migueldinois/diario-hidratacao.git
   cd diario-hidratacao
   ```

2. Instale as dependencias:

   ```bash
   npm install
   ```

## Execucao

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Tambem e possivel abrir diretamente em uma plataforma:

```bash
npm run android
npm run ios
npm run web
```

Depois de iniciar o Expo, use o QR code exibido no terminal ou no navegador para abrir o aplicativo no Expo Go.

## Estrutura principal

```text
.
├── App.jsx                         # Componente principal
├── index.js                        # Ponto de entrada do aplicativo
├── app.json                        # Configuracao do Expo
├── package.json                    # Dependencias e scripts
└── src/
      ├── components/
      │   ├── ActionsButtons.jsx      # Componente para acoes de registro
      │   ├── Header.jsx              # Componente do cabecalho
      │   └── WaterProgress.jsx       # Componente do progresso de hidratacao
    └── constants/
        └── colors.js               # Cores compartilhadas
```

## Scripts disponiveis

| Comando | Descricao |
| --- | --- |
| `npm start` | Inicia o servidor do Expo |
| `npm run android` | Inicia o aplicativo no Android |
| `npm run ios` | Inicia o aplicativo no iOS |
| `npm run web` | Inicia a versao web |

## Licenca

Este projeto esta distribuido sob a licenca indicada no arquivo [LICENSE](LICENSE).
