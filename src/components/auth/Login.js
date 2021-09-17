import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div className="login">
            <div className="contenedor">

                <form className="formulario-auth">
                    <h2> Crear Cuenta </h2>

                    <div className="campo">
                        <label htmlFor="nombre"> Nombre </label>
                        <input 
                            type="text"
                            id="nombre"
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div className="campo">
                        <label htmlFor="apellido"> Apellido </label>
                        <input 
                            type="text"
                            id="apellido"
                            placeholder="Tu apellido"
                        />
                    </div>
                    <div className="campo">
                        <label htmlFor="correo"> Correo </label>
                        <input 
                            type="text"
                            id="correo"
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div className="campo">
                        <label htmlFor="clave"> Clave </label>
                        <input 
                            type="text"
                            id="clave"
                            placeholder="Tu nombre"
                        />
                    </div>

                    <div className="botones-form">
                        <input 
                            type="submit"
                            value="Enviar"
                        />
                        <Link
                            to="/"
                        >
                            Volver
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
};
