import React from 'react';
import { Fragment , useReducer} from 'react';
import { useForm } from 'react-hook-form'; //libreria de terceros

// 1.- Hay que definir como es el Reducer*****
//Me dice q actiones hara y como devolvera el estado compartido
//Se respeta que action.type es el tipo de accion que quiero hacer y .payload es el state q recibimos en el dispatch
const appReducer = (state,action) => {
        switch (action.type) {
            case 'ADD_LIBRO': 
                return ({
                    libros : [ ...state.libros , action.payload]
                })
            
        }
}

const Formulario = () => {

    // 2.- Hay que tener un estado inicial*****
    const initialState = {
        libros:[
            {titulo: 'lolo' , descripcion: 'XXXXXX'},
            {titulo: 'alagar' , descripcion: 'YYYYYY'}
        ]
    }

    //3.- A useReducer se la envia el estado inicial y el reducer configurado*********
    //y devuelve el state compartido (q sera el unico a usar) y el dispatch (paso 4)
    const [state,dispatch] = useReducer(appReducer,
        initialState)

    const { register, handleSubmit, errors } = useForm(); 

    const onSubmit = (data,e) => {
        console.log(data);

        const nuevoLibro = {
            titulo: data.titulo,
            descripcion: data.descripcion
        }
    
        //4.- LLamamos al dispatch para q aplique la accion en base al switch 
        // y el payload que es el state que usara para esa acccion*********
        dispatch({
            type: 'ADD_LIBRO',
            payload : nuevoLibro
        })

        e.target.reset();
    }
    return(
        <Fragment>
            <h1>Formulario:</h1>
            <form onSubmit={handleSubmit(onSubmit)}>  
            {/* Es obligatorio q los input tengan un REF */}
            <input
                name="titulo"
                placeholder="Ingrese titulo"
                className="form-control my-2"
                ref={
                    register({
                        required: {value: true, message: 'Titulo obligatorio'}
                    })
                }
            />
            {/* Metodo para devolver mensajes que recomienda la misma libreria */}
            <span className="text-danger text-small d-block mb-2">
                {errors && errors.titulo && errors.titulo.message}
            </span>

            <input
                name="descripcion"
                placeholder="Ingrese descripción"
                className="form-control my-2"
                ref={
                    register({required: {value: true, message: 'Descripcion obligatorio'}, minLength: {value:10 , message: 'Descripcion debe tener como minimo 10 caracteres'}})
                }
            />
            <span className="text-danger text-small d-block mb-2">
                {errors && errors.descripcion && errors.descripcion.message}
            </span>

            <button className="btn btn-primary">Enviar</button>
            </form>

        {state.libros.map((item,key) => (
            <div key={key} >{item.titulo}-{item.descripcion}</div>
        ))}

        </Fragment>

    );
}

export default Formulario;