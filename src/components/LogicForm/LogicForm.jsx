import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
// import styled from 'styled-components';
import './LogicForm.css'



const schema = yup.object().shape({
 
    name: yup.string().required(),
    number: yup.number().required(),
});


const initialValues = {
    name: '',
    number: '',
}

// const Input = styled(Field)`
// font-size: 15px;
// color: #a2a2a2
// `;

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

        <Form autoComplete="off" className='LogicForm__Form'>
                <label htmlFor="name" className='LogicForm__name'>
                    Name
                    <Field type="text"
                        name='name' />
                    <ErrorMessage name="name" component='div' />
            </label>
                <label htmlFor="number" className='LogicForm__number'>
                    Number
                    <Field type="text"
                        name='number'
                    />
                    <ErrorMessage name="number" component='div' />
            </label>
            <button type='submit' className='LogicForm__btn'>Add contact</button>
        </Form>

        </Formik>
       
    )
}
