import { useState } from 'react';
import Button from '../Button/Button';
import Modal from './Modal';

interface Props {
   children?: JSX.Element | string;
   modalContents?: JSX.Element | string;
}

const ModalButton = ({
   children = '모달창 열기',
   modalContents,
}: Props) => {
   const [isModalOpened, setIsModalOpened] =
      useState(false);

   return (
      <>
         <Button onClick={() => setIsModalOpened(true)}>
            <>{children}</>
         </Button>
         <Modal
            isOpened={isModalOpened}
            setIsOpened={setIsModalOpened}
         >
            {modalContents}
         </Modal>
      </>
   );
};

export default ModalButton;
