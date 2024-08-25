import React, { forwardRef, useRef } from 'react';

// Case 1. forwardRef 쓰지 않았을 때: `ref` 가 특정 DOM 요소에 직접 연결되지 않음.

// 부모 컴포넌트
export const Form = () => {
   const ref = useRef<HTMLInputElement>(null);

   const handleClick = () => {
      if (ref.current) {
         ref.current.focus();
      }
   };

   return (
      <form>
         <h3>forwardRef 사용 x</h3>
         {/* 자식 컴포넌트 MyInput 에게 ref 를 일반 prop 으로 전달시켜줌 */}
         <MyInput label="Enter your name: " ref={ref} />
         <button type="button" onClick={handleClick}>
            Edit
         </button>
      </form>
   );
};

interface Props {
   label: string;
   ref: React.Ref<HTMLInputElement>;
}

// 자식 컴포넌트 (forwardRef 사용 x)
const MyInput = (props: Props) => {
   const { label, ref } = props;

   return (
      <label>
         {label}
         <input ref={ref} />
      </label>
   );
};

// Case 2. forwardRef 썼을 때: `ref` 가 특정 DOM 요소에 직접 연결됨.

// 부모 컴포넌트
export const Form2 = () => {
   const ref = useRef<HTMLInputElement>(null);

   const handleClick = () => {
      if (ref.current) {
         ref.current.focus();
         ref.current.value = '';
      }
   };

   return (
      <form>
         <h3>
            forwardRef 사용 o : 부모 컴포넌트가 자식
            컴포넌트 내 특정 DOM 요소에 직접 연결 가능
         </h3>
         {/* ref 를 prop 으로 보내주는데, 자식 컴포넌트 MyInput2 는 forwardRef 의 두번째 인자로 해당 Ref 를 받게 됨 */}
         <MyInput2
            label="if you click 'submit' button, it will be reset"
            ref={ref}
         />
         <button type="button" onClick={handleClick}>
            submit
         </button>
      </form>
   );
};

interface Props2 {
   label: string;
}

// 자식 컴포넌트 (forwardRef 사용)
// 이때 ref의 타입은 React.Ref<HTMLInputElement> 가 아니라 HTMLInputElement 이다!
const MyInput2 = forwardRef<HTMLInputElement, Props2>(
   (props, ref) => {
      const { label } = props;

      return (
         <label>
            {label}
            <input type="text" ref={ref} />
         </label>
      );
   },
);
