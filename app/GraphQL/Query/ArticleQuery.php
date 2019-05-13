<?php

namespace App\GraphQL\Query;

use App\Models\Article;
use GraphQL;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;

class ArticleQuery extends Query
{
    protected $attributes = [
        'name' => 'ArticleQuery',
        'description' => 'A query'
    ];

    public function type()
    {
        return Type::listOf(Type::string());
    }

    public function args()
    {
        return [
            'article_id' => [
                'type' => Type::int(),
                'name' => 'article_id',
            ],
            'article_title' => [
                'type' => Type::string(),
                'name' => 'article_title',
            ],
            'article_content' => [
                'type' => Type::string(),
                'name' => 'article_content',
            ],
            'article_litimg' => [
                'type' => Type::string(),
                'name' => 'article_litimg',
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
        $article = new Article;

        if (isset($args['limit'])) {
            $article = $article->limit($args['limit']);
        }

        if (isset($args[ 'article_id'])) {
            $article = $article->where('article_id', $args['article_id']);
        }

        if (isset($args[ 'article_title'])) {
            $article = $article->where('article_title', $args['article_title']);
        }
        if (isset($args[ 'article_content'])) {
            $article = $article->where('article_content', $args['article_content']);
        }

        if (isset($args[ 'article_litimg'])) {
            $article = $article->where('article_litimg', $args['article_litimg']);
        }
        return $article->get();
    }
}