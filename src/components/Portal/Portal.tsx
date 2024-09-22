import { createPortal } from 'react-dom';

interface Props {
   children: JSX.Element;
}

const Portal = ({ children }: Props) => {
   return createPortal(children, document.body);
};

export default Portal;
