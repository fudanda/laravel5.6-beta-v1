<?php

namespace App\GraphQL\Type;

use App\Models\Article;
use GraphQL;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class ArticlType extends GraphQLType
{
    protected $attributes = [
        'name' => 'ArticlType',
        'description' => 'A type',
        'model' => Article::class,
    ];

    public function fields()
    {
        return [
            'article_id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => '主键',
            ],
            'article_title' => [
                'type' => Type::string(),
                'description' => '用户名',
            ],
            'article_content' => [
                'type' => Type::string(),
                'description' => '用户的email',
            ],
            'article_litimg' => [
                'type' => Type::string(),
                'description' => '用户的email',
            ],
            'type' => [
                'type' => Type::listOf(GraphQL::type('article_type')),
                'description' => '文章分类',
            ],
        ];
    }
}