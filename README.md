# laravel
laravel5.8
    composer install
    npm      install   (fsevents是mac下用的，windows忽略)


    php artisan key:generate
# laravel-graphql 命令
**安装**

composer require rebing/graphql-laravel

**发布**

php artisan vendor:publish   --provider="Rebing\GraphQL\GraphQLServiceProvider"

**命令行**

php artisan make:graphql:type UserType 

php artisan make:graphql:query UserQuery


# js 库

Grade.js。 主要功能是从图片中提取两种主色，并生成互补渐变的背景。 
[示例]

![示例](https://user-gold-cdn.xitu.io/2019/5/18/16ac99f227a54fb2?imageView2/2/w/800/q/100)



# html 生成pdf 

composer require dompdf/dompdf

# 大文件短点续传

composer require ankitpokhrel/tus-php