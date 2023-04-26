import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';

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
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>

        <Form autoComplete="off">
                <label htmlFor="name">
                    Name
            <Input type="text" name='name' />
            </label>
                <label htmlFor="number">
                    Number
            <Input type="text" name='number' />
            </label>
            <button type='submit'>Add contact</button>
        </Form>

        </Formik>
       
    )
}