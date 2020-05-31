<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Guia extends Model
{
    protected $fillable = [
        'num_guia', 'descripcion', 'producto_id'
    ];

    public function productos(){
        return $this->belongsTo('App\Producto');
    }
}
