import React, { useState, useEffect , Fragment} from 'react';
import axios from 'axios';

const Usuarios = () => {
    
    
    
    const [usuarios, setUsuarios] = useState([]);
    const [err, setErr] = useState('');
    const [form, setForm] = useState(
        {
          nombre: "",
          apellido: "",
          documento: "",
        }
    )
    
     useEffect(() => {
        
        const url = 'http://127.0.0.1:8000/api/usuarios';
        axios.get(url)
        .then(res => {
        const usuarios = res.data;
        setUsuarios( 
                usuarios 
            );
        })
        .catch(error => {
        console.log(error);
        });

            
      },[])



      const handleSubmit = (e) => {
          e.preventDefault()
          
          
        const url = 'http://127.0.0.1:8000/api/usuarios';
        axios.post(url,form)
            .then(res => {
            const usuari = [...usuarios,res.data];
            setUsuarios( 
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
                        placeholder="apellido"
                        name="apellido"
                        value={form.apellido}
                        onChange={ (e) => handleChange(e) }
                        required
                    />
                </div>
                <div className="input-group mb-2">
                    <input
                        id="validationCustom03"
                        type="text"
                        className="form-control"
                        placeholder="documento"
                        name="documento"
                        value={form.documento}
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
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Documento</th>
                  </tr>
                </thead>
                
              {usuarios.map(item => (
              
                
                <tbody key={item.id} >
                  <tr>
                    <td>{item.nombre}</td>
                    <td>{item.apellido}</td>
                    <td>{item.documento}</td>
                  </tr>
                  
                </tbody>
                

                ))}
              </table>
              }
            

        </Fragment>
    );
}

export default Usuarios;