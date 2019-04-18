<?php

namespace App\GraphQL\Query;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;

class JobQuery extends Query
{
    protected $attributes = [
        'name' => 'jobs',
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('jobs'));
    }

    public function args()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()],
            'name' => ['name' => 'name', 'type' => Type::string()],
        ];
    }
}