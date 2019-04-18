# laravel
laravel5.8
    composer install
    npm      install
    php artisan key:generate
# laravel-graphql 命令
**安装**

composer require rebing/graphql-laravel

**发布**

php artisan vendor:publish   --provider="Rebing\GraphQL\GraphQLServiceProvider"

**命令行**

php artisan make:graphql:type UserType 

php artisan make:graphql:query UserQuery
