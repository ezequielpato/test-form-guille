import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { userSchema } from '../../Validations/UserFormValidation';
import 'animate.css';

import { Container, TitleCloseBtn, H1, Div, Label, Input, InputBtn } from './FormElements';

const onSubmit = (data) => {
	alert(JSON.stringify(data));
};

const UserForm = ({ setOpenModal }) => {
	const { register, handleSubmit } = useForm();

	return (
		<Container className='animate__animated animate__fadeInDown'>
			<TitleCloseBtn>
				<button
					onClick={() => {
						setOpenModal(false);
					}}
				>
					X
				</button>
			</TitleCloseBtn>
			<H1>FORM</H1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Div>
					<Input placeholder='Name' {...register('name')} />
				</Div>
				<Div>
					<Label for='name'>Surname</Label>
					<Input {...register('surname')} />
				</Div>
				<Div>
					<Input placeholder='Email' {...register('email')} type='email' />
				</Div>
				<Div>
					<Input placeholder='Github profile URL' {...register('github')} />
				</Div>

				<InputBtn type='submit' value='Enviar' />
			</form>
		</Container>
	);
};

export default UserForm;
