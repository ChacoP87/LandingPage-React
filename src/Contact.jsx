import { useForm } from 'react-hook-form';
import './contact.css';

function Contact() {

    const {register, formState:{errors}, handleSubmit} = useForm();
    console.log("errors",errors)

    return (
        <>
            <section>
                <h2 class="contacto-heading">Contacto</h2>
                <form class="formulario" 
                    onSubmit={handleSubmit((data) => console.log(data))}
                >
                    <fieldset>
                        <legend>Llena tus datos para establecer contacto.</legend>
                        <div class="contenedor-campos">
                            <div class="campo">
                                <label> Nombre </label>
                                <input {...register("name", {required: true, minLength: {value: 3, message:"La longitud minima es 3"},})} type="text" placeholder="Tu Nombre" />
                            </div>
                            <div class="campo">
                                <label> Telefono </label>
                                <input {...register("phoneNumber")} type="tel" placeholder="Tu Numero" />
                            </div>
                            <div class="campo">
                                <label> Correo </label>
                                <input {...register("email")} type="email" placeholder="Tu Correo" />
                            </div>
                            <div class="campo">
                                <label> Mensaje </label>
                                <textarea {...register("message")}></textarea>
                            </div>
                        </div>

                        <div class="alinear-derecha flex">
                            <input class="boton w-sm-100" type="submit" value="Enviar" />
                        </div>
                    </fieldset>
                </form>

            </section>
        </>
    )
}

export default Contact;