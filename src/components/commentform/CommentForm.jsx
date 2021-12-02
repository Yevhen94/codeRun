import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import "./commentform.scss";
import Button from "../../elements/button/Button";

const CommentForm = ({ submitted }) => {
  const formValues = {
    name: "",
    text: "",
  };

  const [message, setMessage] = useState("");

  const validateForm = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Це поле є обов'язковим";
    } else if (!values.text) {
      errors.text = "Це поле є обов'язковим";
    }
    return errors;
  };

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    const headers = new Headers();

    await axios.post(baseURL, values, headers).then((response) => {
      if (response.status === 200) {
        submitted();
        setMessage("Comment created succesfull");
        resetForm();
        setTimeout(() => {
          setMessage("");
        }, 10000);
      }
    });
  };

  const baseURL = "https://jordan.ashton.fashion/api/goods/30/comments";

  return (
    <>
      <Formik
        initialValues={formValues}
        validate={(values) => validateForm(values)}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="form">
            <p className="form__success">{message}</p>
            <label>
              <span className="form__fieldname">Name</span>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="form__input-name"
                placeholder="Enter your name here"
              />
            </label>
            <p className="form__error">
              {errors.name && touched.name && errors.name}
            </p>
            <label>
              <span className="form__fieldname">Comments</span>
              <textarea
                name="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
                className="form__input-text"
                placeholder="Write a review"
              ></textarea>
            </label>
            <p className="form__error">
              {errors.text && touched.text && errors.text}
            </p>
            <div className="form__button">
              <Button
                type={"submit"}
                disabled={isSubmitting}
                className="button"
                content={"POST"}
              />
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default CommentForm;
