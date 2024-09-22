import styled, { css } from 'styled-components';
import Button from '../Button/Button';

type PositionType =
   | 'top'
   | 'left'
   | 'right'
   | 'bottom'
   | 'random';

interface Props {
   children?: JSX.Element | string;
   position?: PositionType; // 전후좌우 위치 설정

   /* 취소 버튼 */
   hasCancelButton?: boolean; // 취소 버튼 유무
   cancelButtonText?: string; // 취소 버튼 텍스트
   cancelButtonClickEvent?: () => void; // 취소 버튼 클릭 시 실행되는 함수

   /* 확인 버튼 */
   hasConfirmButton?: boolean; // 확인 버튼 유무
   confirmButtonText?: string; // 확인 버튼 텍스트
   confirmButtonClickEvent?: () => void; // 확인 버튼 클릭 시 실행되는 함수
}

const Toast = ({
   children,
   position = 'random',
   hasCancelButton = true,
   cancelButtonText = '취소',
   cancelButtonClickEvent,
   hasConfirmButton = true,
   confirmButtonText = '확인',
   confirmButtonClickEvent,
}: Props) => {
   const positionType: PositionType[] = [
      'top',
      'bottom',
      'left',
      'right',
   ];

   if (position === 'random') {
      position =
         positionType[Math.floor(Math.random() * 4)];
   }

   return (
      <StyledWrapper $position={position}>
         <div>{children}</div>
         <div className="buttons-wrapper">
            {hasCancelButton && (
               <Button onClick={cancelButtonClickEvent}>
                  <>{cancelButtonText}</>
               </Button>
            )}
            {hasConfirmButton && (
               <Button onClick={confirmButtonClickEvent}>
                  <>{confirmButtonText}</>
               </Button>
            )}
         </div>
      </StyledWrapper>
   );
};

const StyledWrapper = styled.div<{
   $position: PositionType;
}>`
   position: absolute;
   margin: 5px;
   width: max-content;
   max-width: 400px;
   color: black;
   background-color: aliceblue;
   border: 3px solid #446d91;
   border-radius: 5px;
   padding: 10px;

   ${({ $position }) =>
      $position === 'top' &&
      css`
         bottom: 100%;
      `}

   ${({ $position }) =>
      $position === 'bottom' &&
      css`
         top: 100%;
      `}

  ${({ $position }) =>
      $position === 'left' &&
      css`
         right: 100%;
         top: 0;
      `}

  ${({ $position }) =>
      $position === 'right' &&
      css`
         left: 100%;
         top: 0;
      `}

   .buttons-wrapper {
      display: flex;
   }
`;

export default Toast;
