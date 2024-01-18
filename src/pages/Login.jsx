import { useEffect } from "react";
import { login } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
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
    try {
     await login({ email, password });
      resetForm();
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    
      if (error.code === "auth/invalid-login-credentials") {
        return setErrors({ email: "Credenciales invalidas", password: "Credenciales invalidas" });
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
    <div className="container mx-auto py-20 px-64 ">
      <div className="flex flex-col gap-y-4 px-40 border py-20 shadow-xl rounded-md bg-slate-50 ">
        <h1 className="text-center font-semibold">SIGN IN</h1>

        <Formik
          onSubmit={onSubmit}
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-800"
                >
                  Email address
                </label>

                <span className="material-symbols-outlined absolute z-20 pt-2 opacity-95">
                  login
                </span>

                <input
                  id="email"
                  type="text"
                  placeholder="Ingrese Email"
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                  onBlur={handleBlur}
                  className=" relative z-10 py-2 pr-2 pl-7 border shadow-sm  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
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
                <span className="material-symbols-outlined absolute z-20 p-1 text-[23px] opacity-95">passkey</span>

                <input
                  id="password"
                  type="password"
                  placeholder="Ingrese Password"
                  value={values.password}
                  onChange={handleChange}
                  name="password"
                  onBlur={handleBlur}
                  className="relative z-10 py-2 pr-2 pl-7 p-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
                <span className="text-xs text-red-600">
                  {errors.password && touched.password && errors.password}
                </span>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-lg p-2 bg-blue-500  hover:bg-blue-600 text-white font-semibold sm:text-sm w-full"
                >
                  Acceder
                </button>
              </div>
              <div className="text-center hover:text-blue-600 sm:text-sm">
                <Link to="/cuenta/register">¿No tienes cuenta? Regístrate</Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
