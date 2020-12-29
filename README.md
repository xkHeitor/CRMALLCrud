# CRMALLCrud

Este é um projeto contendo o código de um CRUD feito em laravel.

Um CRUD montado com:
* [Laravel 8.12](https://laravel.com/).
* [xampp PHP 8.0|MySQL 8.0](https://www.apachefriends.org/download.html)

## Instalação

Clone este repositório na pasta "htdocs" do xampp. Obs: Utiliza o nome do projeto como "CRMALLCrud".

```bash
git clone https://github.com/xkHeitor/CRMALLCrud.git
cd CRMALLCrud
```

## Utilização

Ao fazer o clone do projeto na pasta requisitada, a aplicação já está pronta para receber os requests, mas primeiro é necessário utilizar o composer para atualizar as dependências do laravel e criar um banco de dados.

Para isso vamos executar o composer para instalar as dependências e o artisan. So de obersevação o .env tem que estar criado ou editado o .env.example, sendo configurado com os dados do banco criado.

```bash
composer install
php artisan migrate --seed
```

A partir deste momento, será apenas inicializar o apache e  Mysql do xampp, que a aplicação pode ser consumida a partir da pasta view, exemplo:

```bash
"http://localhost/CRMALLCrud/view/"
```

Qualquer dúvida entrar em contato que estou a disposição.


## Documentação e Código fonte

O código elaborado encontra-se dividido na estrutura do Laravel.

Controller e Model podem ser encontrados nas pastas **app** e **app/Http/Controller**.

A estrutura da tabela criada e os seeds iniciais estão na pasta **database**.

## License

Código elaborado por Heitor Carvalho Rodrigues.