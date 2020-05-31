<?php

namespace App\Http\Requests;

use Illuminate\Http\Request;
use Illuminate\Foundation\Http\FormRequest;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class GuiaRequest extends FormRequest
{
    /**
     * If validator fails return the exception in json form
     * @param Validator $validator
     * @return array
     */
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errors' => $validator->errors()], 422));
    }
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
            'num_guia' => 'required|max:5|unique:guias',
            'descripcion' => 'nullable',
            'producto_id' => 'required',
            
        ];
    }

    public function messages()
    {
        return [
            'required' => 'El :attribute es requerido.',
            'max' => 'El :attribute no debe ser mayor a 5 caracteres.',
            'unique' => 'El :attribute ya esta en uso.',   
        ];
    }
}
