import { object, string } from 'yup';

const infoSchema = object().shape({
    name: string().required('Yêu cầu điền mục này'),
    email: string().email('Incorrect email type').max(100).required('Yêu cầu điền mục này'),
    phone: string().matches(
        /^\d{10}$/,
        'Yêu cầu điền 10 số',
    ).required('Yêu cầu điền mục này'),
    address: string().required('Yêu cầu điền mục này'),
});


export {

    infoSchema

};