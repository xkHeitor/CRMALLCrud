<h1 align="center">Welcome to CRMALLCrud 👋</h1>
<p>
</p>

## instruções

```sh
 - Primeiro passo será dar um "git clone https://github.com/xkHeitor/CRMALLCrud.git" na pasta htdocs do xampp.
 - Em seguida entrar na pasta do projeto "cd CRMALLCrud", e utilizar o "composer install".
 - Após concluir o composer install será nescessário criar um banco para conseguir utilizar as migrates e seeders . Obs: mínimo versão 8 do mysql.
 - Com banco pronto entrar no projeto e editar o arquivo ".env.example" que fica na raiz do projeto. Retirar o ".example" do nome, e dentro do arquivo na linha 10 até 15 colocar os dados do banco criado.
 - Feito as alterações no .env executar os comando para gerar as migrates e seeders nessa sequência:
1 - "php artisan migrate"
2 - "php artisan db:seed"
 - Agora a aplicação está pronta para ser testada! basta inicializar o apache e  Mysql, e acessar o projeto na pasta view, exemplo: "http://localhost/CRMALLCrud/view/".
```
***

## Observações

```sh
Usar o nome do projeto como o padrão do repositorio, no caso: CRMALLCrud
Obrigado :)
```