<?php

namespace App\GraphQL\Type;

use Rebing\GraphQL\Support\Type as GraphQLType;

class Articl_TypeType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Articl_TypeType',
        'description' => 'A type'
    ];

    public function fields()
    {
        return [
            'article_type_id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'id',
            ],
            'article_type_name' => [
                'type' => Type::string(),
                'description' => '分类名称',
            ],
            'create_time' => [
                'type' => Type::time(),
                'description' => '创建时间',
            ],
        ];
    }
}