import { register } from "../config/firebase";
import { useUserContext } from "../context/UserContext";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import IconLogin from "../components/sectionAccount/IconLogin";
import IconPasskey from "../components/sectionAccount/IconPasskey";

const Register = () => {

  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      navigate("/");
      scrollToTop()
    }
  }, [user]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onSubmit = async (
    { email, password },
    { setSubmitting, setErrors, resetForm }
  ) => {
    console.log({ email, password });
    try {
      await register({ email, password });
      console.log("Usuario registrado");
      resetForm();
    } catch (error) {
      // console.log(error.code);
      // console.log(error.message);
      if (error.code === "auth/email-already-in-use") {
        setErrors({ email: "Email ya existe" });
      }
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email no valido").required("Email requerido"),
    password: Yup.string()
      .trim()
      .min(6, "Minimo 6 caracteres")
      .required("Password requerido"),
  });

  return (
    
    <div className="container mx-auto py-20 md:px-64 px-4">
      <div className="flex flex-col gap-y-4 md:px-40 px-6 border py-20 md:shadow-xl shadow-sm rounded-md bg-slate-50 ">
      <h1 className="text-center md:text-base text-sm font-semibold uppercase">Registrarse</h1>
      <Formik
        onSubmit={onSubmit}
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleSubmit, isSubmitting, errors, touched, handleBlur }) => (
           <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
           <div>
             <label
               htmlFor="email"
               className="block text-sm font-medium leading-6 text-gray-800"
             >
               Email address
             </label>

             <IconLogin className="absolute mt-2 md:mt-2.5 z-20 opacity-85"/>


             <input
               id="email"
               type="text"
               placeholder="Ingrese Email"
               value={values.email}
               onChange={handleChange}
               name="email"
               onBlur={handleBlur}
               className=" relative z-10 py-2 pr-2 pl-7 border shadow-sm  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md md:text-base text-sm focus:ring-1"
             />
             <span className="text-xs text-red-600">
               {errors.email && touched.email && errors.email}
             </span>
           </div>

           <div>
             <label
               htmlFor="password"
               className="block text-sm font-medium leading-6 text-gray-800"
             >
               Password
             </label>
             <IconPasskey className="absolute ml-[3px] mt-[6px] md:mt-2  z-20  opacity-85"/>

             <input
               id="password"
               type="password"
               placeholder="Ingrese Password"
               value={values.password}
               onChange={handleChange}
               name="password"
               onBlur={handleBlur}
               className="relative z-10 py-2 pr-2 pl-7 p-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md md:text-base text-sm focus:ring-1"
             />
             <span className="text-xs text-red-600">
               {errors.password && touched.password && errors.password}
             </span>
           </div>
           <div className="pt-2">
             <button
               type="submit"
               disabled={isSubmitting}
               className="rounded-lg p-2 bg-blue-500  hover:bg-blue-600 text-white font-semibold md:text-base text-sm w-full"
             >
               Regístrate
             </button>
           </div>
           <div className="text-center hover:text-blue-600 md:text-base text-sm">
             <Link to="/cuenta/login">¿Ya tienes una cuenta? Ingresa</Link>
           </div>
         </form>
        )}
      </Formik>
      </div>
    </div>
  );
};

export default Register;
