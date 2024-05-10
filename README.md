# Lido Content

## Local Development Setup

### Prerequisites

Before setting up the project, ensure you have the following installed:

- **Homebrew** (Mac/Linux): Used to install other necessary tools. [Installation instructions](https://brew.sh/).
- **Node.js**: The required Node.js version is specified in the `.nvmrc` file for `nvm` users (`nvm use` to install and choose Node version frome .nvmrc) and `package.json`.
- **Yarn**: Required for handling project dependencies.
- **Colima** or **Docker Desktop**:
  - **Colima** (Mac/Linux): A tool to run Docker containers on macOS with minimal resource overhead. It is an alternative to Docker Desktop designed to be simple and fast. [Colima's GitHub](https://github.com/abiosoft/colima):
    ```bash
    brew install colima
    ```
  - **Docker Desktop** (Win/Mac/Linux): If you prefer to use Docker Desktop, you can download it from [official doc](https://docs.docker.com/desktop/).
- **Docker and Docker Compose** (only for Colima users):
    - Install Docker and Docker Compose using Homebrew:
        ```bash
        brew install docker docker-compose
        ```
    - [to use `docker compose`] Create a folder in your home directory to hold Docker CLI plugins:
        ```bash
        mkdir -p ~/.docker/cli-plugins
        ```
    - [to use `docker compose`] Symlink the docker-compose command into that new folder:
        ```bash
        ln -sfn $(brew --prefix)/opt/docker-compose/bin/docker-compose ~/.docker/cli-plugins/docker-compose
        ```

### Setting Up Your Environment

1. Copy the `.env.example` file to `.env`. This file contains necessary environment variables such as the port number to be listened to externally:
   ```bash
   cp .env.example .env
   ```

### Running the application

1. Install dependencies:
    ```bash
    yarn
    ```
2. Start app in watch mode:
    ```bash
    yarn dev:docker
    ```
3. Access the app by navigating to `http://localhost:<PORT>`, where `<PORT>` is the port number specified in your `.env` file.

## Variables

There are a few variables available to use in text:

```
Explore ecosystem at https://{{landing}}/lido-ecosystem
```

This text will be automatically converted on landing or other webapp:

```
Explore ecosystem at https://lido.fi/lido-ecosystem
```

These are available variables:

```
"{{landing_url}}" = "https://lido.fi"
"{{landing}}" = "lido.fi"
"{{ethereum_stake_url}}" = "https://stake.lido.fi"
"{{ethereum_stake}}" = "stake.lido.fi"
"{{ethereum_docs_url}}" = "https://docs.lido.fi"
"{{ethereum_docs}}" = "docs.lido.fi"
"{{polygon_stake_url}}" = "https://polygon.lido.fi"
"{{polygon_stake}}" = "polygon.lido.fi"
"{{polygon_docs_url}}" = "https://docs.polygon.lido.fi"
"{{polygon_docs}}" = "docs.polygon.lido.fi"
"{{operatorportal_url}}" = "https://operatorportal.lido.fi"
"{{operatorportal}}" = "operatorportal.lido.fi"
"{{vote_url}}" = "https://vote.lido.fi"
"{{vote}}" = "vote.lido.fi"
"{{easytrack_url}}" = "https://easytrack.lido.fi"
"{{easytrack}}" = "easytrack.lido.fi"
"{{help_url}}" = "https://help.lido.fi"
"{{help}}" = "help.lido.fi"
"{{opportunities_url}}" = "https://opportunities.lido.fi"
"{{opportunities}}" = "opportunities.lido.fi"
"{{dao_agreements_url}}" = "https://dao-agreements.lido.fi"
"{{dao_agreements}}" = "dao-agreements.lido.fi"
"{{research_url}}" = "https://research.lido.fi"
"{{research}}" = "research.lido.fi"
"{{blog_url}}" = "https://blog.lido.fi"
"{{blog}}" = "blog.lido.fi"
"{{lego_url}}" = "https://lego.lido.fi"
"{{lego}}" = "lego.lido.fi"
```
