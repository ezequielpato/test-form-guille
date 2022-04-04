import * as yup from 'yup';

const userSchema = yup.object().shape({
	name: yup.string().required(),
	surname: yup.string().required(),
	email: yup.string().email().required(),
	github: yup.string().required(),
});
