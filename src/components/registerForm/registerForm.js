import { useFormik } from "formik";
import "./styles/registerForm.scss";

function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="register-form-container">
      <div className="register-form-container__content">
        <h1 className="register-form-container__content--title">Register</h1>
        <form className="register-form-container__content__form" onSubmit={formik.handleSubmit}>
          <div className="register-form-container__content__form__field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            ></input>
          </div>
          <div className="register-form-container__content__form__field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            ></input>
          </div>
          <button className="register-form-container__content__form__field--submit" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
