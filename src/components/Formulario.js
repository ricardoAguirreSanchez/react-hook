import React from 'react';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form'; //libreria de terceros

const Formulario = () => {

    const { register, handleSubmit, errors } = useForm(); // initialise the hook

    const onSubmit = (data,e) => {
        e.target.reset();
        console.log(data);
    }

    return(
        <Fragment>
            <h1>Formulario:</h1>
            {/* Se envia usando en handle la funcion custom */}
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
        </Fragment>

    );
}

export default Formulario;