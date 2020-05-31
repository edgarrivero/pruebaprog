<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <title>JOWI - @yield('title','mi titulo')</title>
</head>
<body>

<body>

    <div id="app">
            @section('sidebar')
                <nav class="navbar navbar-dark bg-dark">
                    <!-- Navbar content -->
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active" href="/inicio">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/inicio/create">Crear</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Opcional</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </nav>

            @show

            <div class="container">
                @yield('content')
            </div>

        </div>
</body>






    <script src="{{asset('js/app.js')}}"></script>
</body>
</html>
