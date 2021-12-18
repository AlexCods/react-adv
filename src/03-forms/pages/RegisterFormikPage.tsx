import "../styles/styles.css";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components/MyTextInput";

export const RegisterFormikPage = () => {
	const initialValues = {
		name: "",
		email: "",
		password1: "",
		password2: "",
	};

	return (
		<div>
			<h1>Register Formik Page</h1>

			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, "Al menos 2 carácteres")
						.max(15, "Debe de tener 15 carácteres o menos")
						.required("Requerido"),
					email: Yup.string()
						.email("Is not a valid email")
						.required("Requerido"),
					password1: Yup.string()
						.min(6, "La contraseña necesita al menos 6 carácteres")
						.required("Requerido"),
					password2: Yup.string()
						.equals(
							[Yup.ref("password1")],
							"Las contraseñas no son iguales"
						)
						.required(),
				})}
			>
				{(formik) => (
					<Form>
						<MyTextInput label="Nombre" name="name" />

						<MyTextInput label="Email" name="email" />

						<MyTextInput
							label="Password"
							name="password1"
							type="password"
						/>

						<MyTextInput
							label="Repeat Password"
							name="password2"
							type="password"
						/>

						<button type="submit">Create</button>
						<button type="button" onClick={ formik.handleReset }>Reset Form</button>

						<pre>{JSON.stringify(formik.values)}</pre>
					</Form>
				)}
			</Formik>
		</div>
	);
};
