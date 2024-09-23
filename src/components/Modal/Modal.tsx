import styled from 'styled-components';
import Portal from '../Portal/Portal';
import ToastButton from '../Toast/ToastButton';
import Button from '../Button/Button';

interface Props {
   isOpened: boolean; // 모달 열려있는지 여부
   setIsOpened: React.Dispatch<
      React.SetStateAction<boolean>
   >; // 모달 오픈 유무 설정해주는 setState 함수

   /* 취소 버튼 */
   hasCancelButton?: boolean; // 취소 버튼 유무
   cancelButtonText?: string; // 취소 버튼 텍스트
   cancelButtonClickEvent?: () => void; // 취소 버튼 클릭 시 실행되는 함수

   /* 확인 버튼 */
   hasConfirmButton?: boolean; // 확인 버튼 유무
   confirmButtonText?: string; // 확인 버튼 텍스트
   confirmButtonClickEvent?: () => void; // 확인 버튼 클릭 시 실행되는 함수

   canCloseOnBackdrop?: boolean; // 모달 밖 클릭 시 닫히는 기능 유무

   /* 확인 버튼 클릭 시 띄워지는 모달 */
   hasConfirmToast?: boolean; // 확인 버튼 클릭 시 띄워지는 토스트 유무
   confirmToastText?: string; // 확인 버튼 클릭 시 띄워지는 토스트 텍스트
   confirmToastClickEvent?: () => void; // 확인 버튼 클릭 시 띄워지는 모달의 '확인' 버튼 클릭 시 실행되는 함수

   children?: JSX.Element | string;
}

const Modal = ({
   isOpened = false,
   setIsOpened,
   hasCancelButton = true,
   cancelButtonText = '취소',
   cancelButtonClickEvent = () => setIsOpened(false),
   hasConfirmButton = true,
   confirmButtonText = '확인',
   confirmButtonClickEvent = () => setIsOpened(false),
   canCloseOnBackdrop = true,
   children = '모달창입니다',
   hasConfirmToast = true,
   confirmToastText = '정말 하시겠습니까?',
   confirmToastClickEvent,
}: Props) => {
   return (
      isOpened && (
         <Portal>
            <StyledWrapper
               onClick={
                  canCloseOnBackdrop
                     ? cancelButtonClickEvent
                     : () => {}
               }
            >
               <section
                  className="modal-wrapper"
                  onClick={
                     canCloseOnBackdrop
                        ? e => e.stopPropagation()
                        : () => {}
                  }
               >
                  <div>{children}</div>
                  <div className="modal-buttons-wrapper">
                     {hasCancelButton && (
                        <Button
                           onClick={cancelButtonClickEvent}
                        >
                           <>{cancelButtonText}</>
                        </Button>
                     )}
                     {hasConfirmButton &&
                     hasConfirmToast ? (
                        <ToastButton
                           confirmButtonClickEvent={() => {
                              setIsOpened(false);
                              confirmToastClickEvent &&
                                 confirmToastClickEvent();
                           }}
                           toastContents={confirmToastText}
                        >
                           <>{confirmButtonText}</>
                        </ToastButton>
                     ) : (
                        <Button
                           onClick={confirmButtonClickEvent}
                        ></Button>
                     )}
                  </div>
               </section>
            </StyledWrapper>
         </Portal>
      )
   );
};

export default Modal;

const StyledWrapper = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: rgba(1, 1, 1, 0.2);
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;

   .modal-wrapper {
      width: 500px;
      height: 500px;
      padding: 20px;
      background-color: white;
      border: 3px solid #3b5bb3;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      color: black;

      .modal-buttons-wrapper {
         display: flex;
         justify-content: center;
      }
   }
`;
