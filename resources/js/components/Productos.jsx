import React, { useState, useEffect , Fragment} from 'react';
import axios from 'axios';

const Productos = () => {
    
    
    
    const [productos, setProductos] = useState([]);
    const [err, setErr] = useState('');
    const [form, setForm] = useState(
        {
          nombre: "",
          apellido: "",
          documento: "",
        }
    )
    
     useEffect(() => {
        
        const url = 'http://127.0.0.1:8000/api/productos';
        axios.get(url)
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
          
          
        const url = 'http://127.0.0.1:8000/api/productos';
        axios.post(url,form)
            .then(res => {
            const usuari = [...productos,res.data];
            setProductos( 
                    usuari
                );
                console.log('este es usuari' + usuari)
            })
            .catch(error => {
            console.log('aqui ' + error);
            setErr(() => ( error ));
            });

      }

     const handleChange = (e) =>{
        //console.log(e.target.value)
        const newform = {...form}
        newform[e.target.name]= e.target.value

        setForm(newform)
    }
    
    
    return (
        <Fragment>
            
            
            <form className="form-inline justify-content-center needs-validation" onSubmit={ (e) => handleSubmit(e) }>
                <div className="input-group mb-2">
                    <input
                        id="validationCustom01"
                        type="text"
                        className="form-control"
                        placeholder="nombre"
                        name="nombre"
                        value={form.nombre}
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
                        placeholder="total"
                        name="total"
                        value={form.total}
                        onChange={ (e) => handleChange(e) }
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mb-2" > Add </button>

            </form>

            {err
                ? <h2>Error al intentar guardar Alguno de los datos estan errados</h2>
                : 
                <table className="table table-sm table-dark">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Documento</th>
                  </tr>
                </thead>
                
              {productos.map(item => (
              
                
                <tbody key={item.id} >
                  <tr>
                  <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    
                    <td>{item.total}</td>
                  </tr>
                  
                </tbody>
                

                ))}
              </table>
              }
            

        </Fragment>
    );
}

export default Productos;