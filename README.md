# Desafio helpper
Olá! Seja bem vindo à minha solução do desafio proposto pela Helpper

## Guia step-by-step

Primeiramente, devemos criar o container em que vai rodar nosso `database`

```
docker pull mariadb
docker run --name helpper_container -p 3306:3306 -e MYSQL_ROOT_PASSWORD=helpper -d mariadb
```

Copiamos o arquivo `.sql` da nossa máquina para o container e acessamos o terminal dele

```
docker cp ./database/sql-scripts/structure.sql helpper_container:/structure.sql
docker exec -it helpper_container bash
```

Agora, dentro do container, executamos

```
mysql -p
```

Com esse comando, digite a senha configurada nos comandos acima (nesse caso, helpper)\
Com o terminal liberado, daremos sequência aos comandos para criar nosso `database`

```
source structure.sql
```

Com isso seu banco de dados já estará criado e pronto para uso\
Agora, vamos para os passos para executar o nosso serviço

Crie um arquivo `.env` na root do projeto e copie e cole nele o conteúdo do arquivo `.env.example`\
Agora para rodar o serviço

```
yarn install      # para instalar as dependencias
yarn start        # para iniciar o nosso serviço
```

E pronto, o serviço pode ser acessado pela porta `3000`\
Você pode encontrar os exemplos de requisições na pasta `collections` para o Insomnia