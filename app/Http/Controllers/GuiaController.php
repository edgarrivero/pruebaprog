<?php

namespace App\Http\Controllers;

use App\Guia;
use Illuminate\Http\Request;
use App\Http\Requests\GuiaRequest;
use DB;
class GuiaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $guias = Guia::all();
        return response()->json($guias, 201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(GuiaRequest $request)
    {
        $prod = DB::table('productos')->where('id', $request->producto_id)->exists();
        try {
            if (!$prod) {
                return response()->json('Producto Inexistente', 422);
            }

            $guia = new Guia($request->all());
            $guia->save();
            return response()->json($guia, 200);

        }catch (\Exception $ex){
            return response()->json($ex->getMessage(), 402);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Guia  $guia
     * @return \Illuminate\Http\Response
     */
    public function show(Guia $guia)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Guia  $guia
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Guia $guia)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Guia  $guia
     * @return \Illuminate\Http\Response
     */
    public function destroy(Guia $guia)
    {
        //
    }
}
