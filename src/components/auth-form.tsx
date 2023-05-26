"use client";

import { Form, Formik, FormikHelpers } from "formik";

export interface AuthFormProps {}

export default function AuthForm({}: AuthFormProps) {
  const initialValues = {
    email: ""
  };

  async function onSubmit(values: any, helpers: FormikHelpers<any>) {}

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleChange }) => (
        <Form>
          <input
            id="email"
            name="email"
            type="text"
            className="mb-3 w-full rounded-md py-3 text-sm"
            onChange={handleChange}
            placeholder="janedoe@example.com"
            autoComplete="off"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-gray-900 py-3 text-sm text-white"
          >
            Sign in using email
          </button>
        </Form>
      )}
    </Formik>
  );
}
