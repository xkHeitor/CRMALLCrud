<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
	use HasFactory;
	use SoftDeletes;

	protected $primaryKey	= 'uuid';
	protected $keyType		= 'string';
	protected $dates		= ['dtnascimento'];
	protected $fillable 	= [
		'nome',         'dtnascimento',     'sexo',
		'cep',          'endereco',         'numero',
		'complemento',  'bairro',           'cidade',
		'estado'];
}
