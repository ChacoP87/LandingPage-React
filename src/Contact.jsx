import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

function Contact() {

    const { register, formState: { errors }, handleSubmit} = useForm({mode:"all"});
    const form = useRef();
    /*
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2j7pzbu', 'template_m4jt34n', form.current, 'fWDWQLPpiMR_4M9oa')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
      */
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_2j7pzbu', 'template_m4jt34n', form.current, 'fWDWQLPpiMR_4M9oa')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    console.log("errors", errors);

    return (
        <>
            <section>
                <h2 class="contacto-heading">Contacto</h2>
                <form ref={form} class="formulario"
                    onSubmit={sendEmail}
                >
                    <fieldset>
                        <legend>Llena tus datos para establecer contacto.</legend>
                        <div class="contenedor-campos">
                            <div class="campo">
                                <label> Nombre </label>
                                <input {...register("user_name", { required: true, minLength: { value: 3, message: "La longitud minima es 3" }, })} type="text" placeholder="Tu Nombre" name='user_name'/>
                                <p>{ errors.user_name?.message }</p>
                            </div>
                            
                            <div class="campo">
                                <label> Telefono </label>
                                <input
                                    {...register("phoneNumber", {
                                        required: true,
                                        minLength: {value: 10, message: "La longitud debe ser de 10 numeros"},
                                        maxLength: {value: 10, message: "La longitud debe ser de 10 numeros"},
                                    })}
                                    type="tel"
                                    placeholder="Tu Numero"
                                />
                                <p>{ errors.phoneNumber?.message }</p>
                            </div>
                            <div class="campo">
                                <label> Correo </label>
                                <input {...register("user_email", { required: true, pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "El correo debe ser valido" } })} type="email" placeholder="Tu Correo" name='user_email'/>
                                <p>{ errors.user_email?.message }</p>
                            </div>
                            <div class="campo">
                                <label> Mensaje </label>
                                <textarea {...register("message", {required:true})} name='message'></textarea>
                            </div>
                        </div>

                        <div class="alinear-derecha flex">
                            <input class="boton w-sm-100" type="submit" value="Send" />
                        </div>
                    </fieldset>
                </form>

            </section>
        </>
    )
}

export default Contact;