import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignupForm.css";


function SignupForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Minimum 3 characters")
        .required("Name required"),

      email: Yup.string()
        .email("Invalid email")
        .required("Email required"),

      password: Yup.string()
        .min(6, "Min 6 characters")
        .required("Password required"),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password required")
    }),

    onSubmit: (values) => {
      console.log(values);
      alert("Registration Successful");
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Sign Up</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <p>{formik.errors.confirmPassword}</p>
      )}

      <button type="submit">Register</button>
    </form>
  );
}

export default SignupForm;
