@extends('layouts.plantilla')

@section('title','crear registro')

@section('content')
    <h1>Registros</h1>
    @if($errors->any())

        <div class="alert alert-danger">
            <ul>
                @foreach($errors->all() as $error)
                    <li>{{$error}}</li>
                @endforeach
            </ul>
        </div>

    @endif

    <form method="POST" action="/inicio">
        @csrf

        <input name="nombre" placeholder="Nombre" type="text" class="form-control">
        <input name="salario" placeholder="Salario" type="text" class="form-control">
        <button class="btn-primary" type="submit">Guardar</button>
    </form>


    @endsection