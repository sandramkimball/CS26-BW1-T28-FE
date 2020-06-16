import React, { useEffect, useState } from "react";
import { Form as FormikForm, Field, withFormik } from "formik";
import {Link} from 'react-router-dom';
import * as Yup from "yup";
import { Form } from "semantic-ui-react";
import axios from 'axios'
import "./signup.css";

const Signup = props => {
  const [user, setUser] = useState({});
  const { errors, touched, values, handleSubmit, status } = props;

  useEffect(() => {
    setUser(status);
  }, [status]);

  return (
      <div className="login-pg">
        <FormikForm use="semantic-ui-react" >
        <h2>SIGNUP</h2>
          <div>
            <Form.Field>
              <label> USERNAME: </label>
              <Field
                type="username"
                name="username"
                data-testid="username"
              />
              {touched.username && errors.username && (
                <p className="error">{errors.username}</p>
              )}
            </Form.Field>
          </div>
          <div>
            <Form.Field>
              <label> PASSWORD: </label>
              <Field
                type="password"
                name="password1"
                data-testid="password1"
              />
            </Form.Field>
          </div>{" "}
          <div>
            <Form.Field>
              <label> CONFIRM PASSWORD: </label>
              <Field
                type="password"
                name="password2"
                data-testid="password2"
              />
            </Form.Field>
          </div>

          <button onSubmit={handleSubmit}> SUBMIT </button>
          <button><Link to="/login" className="signup">LOGIN</Link></button>
        </FormikForm>
      </div>
  );
};


const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password1, password2 }) {
    return {
      username: username || "",
      password1: password1 || "",
      password2: password2
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter your username"),
    password1: Yup.string().required("Please enter your password"),
    password2: Yup.string().required("Please confirm your password")
  }),
  
  handleSubmit(values, { props, setStatus, handleSubmit: e }) {
    axios
      .post("https://cs1build.herokuapp.com/api/registration/", values)
      .then(res => {
        console.log('Registered!');
        localStorage.setItem("token", res.data.key);
        setStatus(res.data);
        props.history.push(`/game`);
      })
      .catch(err => console.log(err.response));
  }
})(Signup);


export default FormikLoginForm;
