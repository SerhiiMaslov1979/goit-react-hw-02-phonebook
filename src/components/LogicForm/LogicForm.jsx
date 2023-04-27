import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';



const schema = yup.object().shape({
 
    name: yup.string().required(),
    number: yup.number().required(),
});


const initialValues = {
    name: '',
    number: '',
}

const Input = styled(Field)`
font-size: 15px;
color: #a2a2a2
`;

export const LogicForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();


    };

    return (
        <Formik initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >

        <Form autoComplete="off">
                <label htmlFor="name">
                    Name
                    <Input type="text" name='name' />
                    <ErrorMessage name="name" component='div' />
            </label>
                <label htmlFor="number">
                    Number
                    <Input type="text" name='number' />
                    <ErrorMessage name="number" component='div' />
            </label>
            <button type='submit'>Add contact</button>
        </Form>

        </Formik>
       
    )
}
