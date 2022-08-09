# Instalação /Configuracão da aplicação

Para ambientes de desenvolvimento,  deverá obrigatoriamente utilizar o docker para disponibilizar a aplicação em desenvolvimento, para isso é necessário que se tenha o docker e o docker compose instalado e executar o seguinte comando no root da aplicação.

```
# Subindo o Frontend 

--Entrar na pasta "DesafioUpEstagioLM"

--1- docker-compose up -d --build

#listando os container após o build

--docker ps

# instalando as dependências do frontend

--docker-compose exec  reactjs-frontend sh -c "npm install"

# executando aplicação do frontend

--docker-compose exec  reactjs-frontend sh -c "npm start"

# buildando somente o frontend

---docker-compose build  reactjs-frontend-frontend
---docker-compose up -d  reactjs-frontend-frontend

# Erro na instalação

---caso haja um erro na instalação apagar os pacotes "node_modules" e "package-lock.json" e refazer todos os passos acima.


# Visualizando aplicação localhost
* Frontend na porta 82
http://localhost/82

// Tive Problemas ao conectar o MongoDB com o Backend , não tenho muita experiência ainda na parte de Back, peço que olhem mais as estruturas de pastas e as chamadas. Projeto incompleto!
