import { useState } from 'react';
import Button from '../Button/Button';
import Toast from './Toast';
import styled from 'styled-components';

interface Props {
   children?: JSX.Element;
   onClick?: () => void;
   toastContents: JSX.Element | string;

   /* 취소 버튼 */
   // hasCancelButton?: boolean; // 취소 버튼 유무
   // cancelButtonText?: string; // 취소 버튼 텍스트
   cancelButtonClickEvent?: () => void; // 취소 버튼 클릭 시 실행되는 함수

   // /* 확인 버튼 */
   // hasConfirmButton?: boolean; // 확인 버튼 유무
   // confirmButtonText?: string; // 확인 버튼 텍스트
   confirmButtonClickEvent?: () => void; // 확인 버튼 클릭 시 실행되는 함수
}

const ToastButton = ({
   children,
   onClick,
   toastContents,
   ...otherProps
}: Props) => {
   const [isToastOpened, setIsToastOpened] =
      useState(false);

   return (
      <StyledWrapper>
         <Button onClick={() => setIsToastOpened(true)}>
            {children}
         </Button>
         {isToastOpened && (
            <Toast
               setIsOpened={setIsToastOpened}
               {...otherProps}
            >
               {toastContents}
            </Toast>
         )}
      </StyledWrapper>
   );
};

export default ToastButton;

const StyledWrapper = styled.div`
   position: relative;
`;
