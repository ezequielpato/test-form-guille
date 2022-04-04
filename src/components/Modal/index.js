import UserForm from '../Form';
import { Container } from './ModalElements';

const Modal = ({ setOpenModal }) => {
	return (
		<Container>
			<UserForm setOpenModal={setOpenModal} />
		</Container>
	);
};

export default Modal;
