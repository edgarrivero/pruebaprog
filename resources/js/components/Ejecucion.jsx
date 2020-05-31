import React, { useState, useEffect , Fragment} from 'react';
import axios from 'axios';


const Ejecucion = () => {
    const [random, setRamdon] = useState(0)

    const [guias, setGuias] = useState([]);
    const [productos, setProductos] = useState([]);

    const [errguias, setErrguias] = useState('');
    const [errproductos, seterrproductos] = useState('');

    const [formGuias, setFormGuias] = useState(
        {
          num_guia: "",
          descripcion: "",
          producto_id: 0,
        }
    )
    
    const [formProductos, setFormProductos] = useState(
      {
        nombre: "",
        total: "",
      }
  )
  
  const aumentar = (numer) => {
    setFormGuias({ num_guia: parseInt(numer)})
    
    console.log('me diste click' + formGuias.num_guia)
}

  const alea = () => {
   
    const min = 1;
    const max = 100;
    const Rand = min + Math.random() * (max - min);

    setRamdon( Rand );
    console.log('entro: ' + random)
  }
     useEffect(() => {
      
        alea()
        
        const url = 'http://127.0.0.1:8000/api/guias';

        axios.get(url)
        .then(res => {
        const guias = res.data;
        setGuias( 
                guias
            );
        })
        .catch(error => {
        console.log(error);
        });

        
        axios.get('http://127.0.0.1:8000/api/productos')
        .then(res => {
        const productos = res.data;
        setProductos( 
                productos 
            );
        })
        .catch(error => {
        console.log(error);
        });

            
      },[])



      const handleSubmit = (e) => {
          e.preventDefault()
          
          
        const url = 'http://127.0.0.1:8000/api/guias';
        axios.post(url,formGuias)
            .then(res => {
            const guia = [...guias,res.data];
            setGuias( 
                    guia
                );
                
            })
            .catch(error => {
            console.log('aqui ' + error);
            setErrguias(() => ( error ));
            });

            

      }

     const handleChange = (e) =>{
        //console.log(e.target.value)
        

        const newform = {...formGuias}
        newform[e.target.name]= e.target.value

        const new2form = {...formProductos}
        new2form[e.target.name]= e.target.value

        setFormGuias(newform)
        setFormProductos(new2form)
    }
    
    
    return (
        <Fragment>
            
              {<table className="table table-sm table-dark">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">nombre</th>
                    <th scope="col">total</th>
                  </tr>
                </thead>
                
              {productos.map(item => (
              
                
                <tbody key={item.id} >
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    <td>{item.total}</td>
                    <td>
                    <button onClick={ () => aumentar(item.id) } className="btn btn-danger mb-2">Elegir</button>
                    </td>
                  </tr>
                  
                </tbody>
                

                ))}
              </table>
              }


            <form className="form-inline justify-content-center needs-validation" onSubmit={ (e) => handleSubmit(e) }>
                <div className="input-group mb-2">
                    <input
                        id="validationCustom01"
                        type="text"
                        className="form-control"
                        placeholder="num_guia"
                        name="num_guia"
                        value={formGuias.num_guia}
                        onChange={ (e) => handleChange(e) }
                        required
                    />
                    <div class="valid-feedback">
                      
                    </div>
                </div>
                <div className="input-group mb-2">
                    <input
                        id="validationCustom02"
                        type="text"
                        className="form-control"
                        placeholder="descripcion"
                        name="descripcion"
                        value={formGuias.descripcion}
                        onChange={ (e) => handleChange(e) }
                        required
                    />
                </div>
                <div className="input-group mb-2">
                    <input
                        id="validationCustom03"
                        type="numeric"
                        className="form-control"
                        placeholder="producto_id"
                        name="producto_id"
                        value={formGuias.producto_id}
                        onChange={ (e) => handleChange(e) }
                        required
                    />
                </div>

                 <button type="submit" className="btn btn-primary mb-2" > Add </button>

            </form>

            {errguias
                ? <h2>Error al intentar guardar Alguno de los datos estan errados</h2>
                : 
                <table className="table table-sm table-dark">
                <thead>
                  <tr>
                    <th scope="col">Numero de guia</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Producto_id</th>
                  </tr>
                </thead>
                
              {guias.map(item => (
              
                
                <tbody key={item.id} >
                  <tr>
                    <td>{item.num_guia}</td>
                    <td>{item.descripcion}</td>
                    <td>{item.producto_id}</td>
                  </tr>
                  
                </tbody>
                

                ))}
              </table>
              }

        </Fragment>
    );
}

export default Ejecucion;