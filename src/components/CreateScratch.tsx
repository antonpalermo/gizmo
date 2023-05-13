import { Form, Formik, FormikHelpers } from "formik";
import { Scratch } from "@prisma/client";
import { useModal } from "@gizmo/store";

export interface FormFields extends Pick<Scratch, "header"> {}

interface CreateScratchProps {}

export default function CreateScratch(props: CreateScratchProps) {
  const toggle = useModal(selector => selector.toggle);

  const initialData: FormFields = {
    header: ""
  };

  async function onSubmit(
    value: FormFields,
    helpers: FormikHelpers<FormFields>
  ) {
    console.log(value);
  }

  return (
    <div>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          Create new scratch by providing an awsome name then compose the
          content later.
        </p>
      </div>
      <Formik initialValues={initialData} onSubmit={onSubmit}>
        {({ handleChange }) => (
          <Form>
            <div className="flex w-full flex-col items-stretch pt-3 ">
              <label
                htmlFor="header"
                className="mb-2 text-sm font-medium text-gray-500"
              >
                Header
              </label>
              <input
                name="header"
                type="text"
                className="rounded"
                onChange={handleChange}
              />
            </div>
            <div className="mt-4 w-full space-x-2">
              <button
                type="submit"
                className="float-right inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={toggle}
              >
                Create Scratch!
              </button>
              <button
                type="button"
                className="float-right inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={toggle}
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
