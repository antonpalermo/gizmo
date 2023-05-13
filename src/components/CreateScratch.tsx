import { Form, Formik, FormikHelpers } from "formik";
import { Scratch } from "@prisma/client";

export interface FormFields extends Pick<Scratch, "header"> {}

interface CreateScratchProps {
  onSubmit: (
    value: FormFields,
    helpers: FormikHelpers<FormFields>
  ) => Promise<void>;
}

export default function CreateScratch({ onSubmit }: CreateScratchProps) {
  const initialData: FormFields = {
    header: ""
  };

  return (
    <Formik initialValues={initialData} onSubmit={onSubmit}>
      {({ handleChange }) => (
        <Form>
          <div>
            <label htmlFor="header">Header</label>
            <input name="header" type="text" onChange={handleChange} />
          </div>
        </Form>
      )}
    </Formik>
  );
}
