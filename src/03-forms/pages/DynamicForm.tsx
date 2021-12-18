import formJson from "../data/custom-form.json";
import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
	initialValues[input.name] = input.value;

    if ( !input.validations ) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if ( rule.type === 'required' ) {
            schema = schema.required('Este campo es requerido');
        }

		if ( rule.type === 'minLength' ) {
			schema = schema.min((rule as any).value || 2, `Mínimo de ${ (rule as any).value || 2 } carácteres`)
		}

		if ( rule.type === 'email' ) {
			schema = schema.email('Revise el formato del Email');
		}
    }

	requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {
	return (
		<div>
			<h1>Dynamic Form</h1>

			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={ validationSchema }
			>
				{(formik) => (
					<Form>
						{formJson.map(
							(
								{ name, type, label, placeholder, options },
								index
							) => {
								if (type === "input" || type === 'password' || type === 'email' ) {
									return <MyTextInput
										key={ name }
										type={type as any}
										label={label}
										name={name}
										placeholder={placeholder}
									/>;
								}

								if (type === "select") {
									return <MySelect key={ name } label={label} name={name}>
                                        <option value="">Select an option</option>
										{ options?.map( ({ label, id }) => (
											<option 
                                                key={ id } 
                                                value={ id}
                                            >
												{ label }
											</option>
										))}
									</MySelect>;
								}

                                throw new Error(`El type: ${ type }, no es soportado`);
							}
						)}

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
