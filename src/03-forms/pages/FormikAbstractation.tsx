import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { MyCheckbox, MyTextInput, MySelect } from "../components";

export const FormikAbstractation = () => {
	return (
		<div>
			<h1>Formik Abstractation</h1>

			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					terms: false,
					jobType: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, "Debe de tener 15 carácteres o menos")
						.required("Requerido"),
					lastName: Yup.string()
						.max(15, "Debe de tener 15 carácteres o menos")
						.required("Requerido"),
					email: Yup.string()
						.email("Is not a valid email")
						.required("Requerido"),
					terms: Yup.boolean()
						.isTrue("Debe aceptar los términos y condiciones")
						.required("Requerido"),
					jobType: Yup.string()
						.notOneOf(["it-junior"], "Esta opción no es permitida")
						.required("Requerido"),
				})}
			>
				{(formik) => (
					<Form>
						<MyTextInput
							label="First Name"
							name="firstName"
							placeholder="Alex"
						/>

						<MyTextInput
							label="Last Name"
							name="lastName"
							placeholder="Alberich"
						/>

						<MyTextInput
							label="Email Adress"
							name="email"
							placeholder="alexalji@gmail.com"
						/>

						<MySelect name="jobType" label="Job Type">
							<option value="">Pick Something</option>
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-senior">IT Senior</option>
							<option value="it-junior">IT Junior</option>
						</MySelect>

						<MyCheckbox name="terms" label="Terms and conditions" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
