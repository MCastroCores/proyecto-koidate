import { useForm } from "react-hook-form";
import { userSchema } from "../../schemas/userSchema.js";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import "../../index.css";

// CONTAINER DONDE SE ENCUENTRA EL FORMULARIO CON LOS DATOS PARA RECIBIR EN EMAIL
export const ContainerContacto = () => {
  // COGEMOS LOS PARÁMETROS NECESARIOS PARA RECOGER DATOS CON USEFORM
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onTouched",
    resolver: zodResolver(userSchema),
  });

  const ownSubmit = (data) => {
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        "#mi_formulario",
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("¡Información enviada con éxito!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    reset();
  };
  // COGEMOS LOS PARÁMETROS NECESARIOS PARA MANEJAR LOS ERRORES
  const { errors, isValid } = formState;

  // CREAMOS ESTADO PARA EL MANEJO DEL CHECK DEL INPUT CHECKBOX

  const [checkboxChecked, setCheckboxChecked] = useState(false);

  // FUNCIÓN PARA EL MANEJO DEL CAMBIO DE ESTADO DEL CHECKED

  const handleCheckboxChange = (e) => {
    setCheckboxChecked(e.target.checked);
  };

  return (
    <>
      <form
        id="mi_formulario"
        onSubmit={handleSubmit(ownSubmit)}
        className="containerContacto border border-primary flex flex-col justify-center items-center gap-10 w-3/4 mx-auto mt-10"
      >
        <input
          className="border border-primary focus:border-azulclaro focus:outline-none placeholder:italic p-3 rounded-sm mt-10
      "
          type="text"
          name=""
          id=""
          placeholder="Nombre... "
          {...register("nombre")}
        />
        <p className="text-sm text-primary">
          {errors.nombre && errors.nombre.message}
        </p>
        <input
          className="border border-primary  focus:border-azulclaro focus:outline-none placeholder:italic p-3  rounded-sm"
          type="text"
          name=""
          id=""
          placeholder="Apellidos..."
          {...register("apellidos")}
        />
        <p className="text-sm text-primary">
          {errors.apellidos && errors.apellidos.message}
        </p>
        <input
          className="border border-primary  focus:border-azulclaro focus:outline-none placeholder:italic p-3 rounded-sm"
          type="email"
          name=""
          id=""
          placeholder="Correo electrónico..."
          {...register("email")}
        />
        <p className="text-sm text-primary">
          {errors.email && errors.email.message}
        </p>
        <div className="dark:bg-black/10 flex gap-3">
          <input
            className="accentRed dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-6 h-6"
            onChange={handleCheckboxChange}
            type="checkbox"
          />
          <p className="text-sm">
            He leído y acepto la{" "}
            <a
              className="text-primary underline"
              href="/privacidad"
              target="_blank"
            >
              política de privacidad
            </a>
          </p>
        </div>
        <button
          disabled={!isValid || !checkboxChecked}
          className="disabled:opacity-50 hover:opacity-80 p-2 border border-primary bg-primary text-blanco rounded text-md mb-5 self-end mr-10
      "
        >
          Enviar
        </button>
      </form>
      <ToastContainer position="bottom-right" autoClose={2000} closeOnClick />
    </>
  );
};
