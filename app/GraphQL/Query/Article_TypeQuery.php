<?php

namespace App\GraphQL\Query;

use App\Models\Article_Type;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\SelectFields;
use Rebing\GraphQL\Support\Query;

class Article_TypeQuery extends Query
{
    protected $attributes = [
        'name' => 'Article_TypeQuery',
        'description' => 'A query'
    ];

    public function type()
    {
        return Type::listOf(Type::string());
    }

    public function args()
    {
        return [
            'article_type_id' => [
                'type' => Type::nonNull(Type::int()),
                'name' => 'article_type_id',
            ],
            'article_type_name' => [
                'type' => Type::string(),
                'name' => 'article_type_name',
            ],
            'create_time' => [
                'type' => Type::time(),
                'name' => 'create_time',
            ],
            'limit' => ['name' => 'limit', 'type' => Type::int()],
        ];
    }

    /**
     * @param $root
     * @param $args 传入参数
     *
     * 处理请求的逻辑
     * @return mixed
     */
    public function resolve($root, $args)
    {
        $article_type = new Article_Type;

        if (isset($args[ 'limit'])) {
            $article_type = $article_type->limit($args['limit']);
        }

        if (isset($args[ 'article_type_id'])) {
            $article_type = $article_type->where( 'article_type_id', $args[ 'article_type_id']);
        }

        if (isset($args[ 'article_type_name'])) {
            $article_type = $article_type->where( 'article_type_name', $args[ 'article_type_name']);
        }
        if (isset($args[ 'create_time'])) {
            $article_type = $article_type->where( 'create_time', $args[ 'create_time']);
        }

        return $article_type->get();
    }
}