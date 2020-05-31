<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $fillable = [
        'nombre', 'total'
    ];

    public function guias(){
        return $this->hasMany('App\Guia');
    }
}
