<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerRequest extends FormRequest
{
	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
			'nome'          => ['required'],
			'dtnascimento'  => ['required'],
			'sexo'          => ['required']
		];
	}

	/**
	 * Get the message that apply to the request.
	 *
	 * @return array
	 */
	public function messages()
	{
		return [
			'nome.required'             => ['msg' => 'O campo nome é obrigatório!',						'input' => 'nome'			],
			'dtnascimento.required'     => ['msg' => 'O campo da data de nascimento é obrigatório!',	'input' => 'dtnascimento'	],
			'sexo.required'				=> ['msg' => 'O campo sexo é obrigatório!',						'input' => 'sexo'			]
		];
	}
}
