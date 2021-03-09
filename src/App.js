import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

function App() {
  const [error, setError] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Error"),
    }),
    onSubmit: (data) => {
      const { firstName } = data;
      console.log(firstName);
    },
  });
  return (
    <div className="App">
      <form>
        <div className="formField">
          <TextField
            id="standard-basic"
            label="Standard"
            name="firstName"
            type="text"
            //mudança de valor
            onChange={formik.handleChange}
            // exibição de valor
            value={formik.values.firstName}
            // quando não tiver focus
            onBlur={formik.handleBlur}
            //error
            error={formik.errors.firstName}
          />
          <br></br>
          <span>{formik.errors.firstName}</span>
        </div>
        <br></br>
        <button onClick={formik.handleSubmit} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
