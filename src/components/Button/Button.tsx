import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { buttonVariants } from './variants';
import { cn } from '../../helpers/utils';

/* ---------------------------------- Types --------------------------------- */
interface ButtonType {
   /**
    * 만약 asChild 가 `true` 라면 버튼은 children 으로 넘겨주는 컴포넌트를 렌더링함
    * ex. 버튼처럼 보이지만 링크로 동작해야 할 때, asChild로 구현 가능
    */
   asChild?: boolean;

   /*
    *  버튼 사이즈
    */
   size?: 'small' | 'medium' | 'large';

   /*
    * 버튼 테마
    */
   variant?:
      | 'primary'
      | 'tertiary'
      | 'outline'
      | 'transparent'
      | 'link';

   /*
    * 버튼 색상
    */
   color?: 'black' | 'red' | 'blue';

   /*
    * 버튼 모양
    */
   shape?: 'rounded' | 'square';

   /*
    * 버튼 클릭 이벤트 함수
    */
   onClick?: () => void;

   /*
    * 아이콘만 포함한 버튼인지 여부
    */
   isIconOnly?: boolean;

   /*
    * 버튼 라벨 이전에 렌더되는 slot
    */
   before?: React.ReactElement<HTMLElement>;

   /*
    * 버튼 라벨 이후에 렌더되는 slot
    */
   after?: React.ReactElement<HTMLElement>;

   /*
    * 버튼 내부에 포함되는 컴포넌트들
    */
   children?: React.ReactElement<HTMLElement>;

   /*
    * 버튼 스타일링을 위한 className
    */
   className?: string;
}
type ButtonProps =
   React.ButtonHTMLAttributes<HTMLButtonElement> &
      ButtonType &
      VariantProps<typeof buttonVariants>;

/* forwardRef = React에서 특정 컴포넌트가 가진 DOM 요소(예를 들어, <button> 같은 것)에 다른 컴포넌트나 부모 컴포넌트가 쉽게 접근할 수 있도록 도와주는 기능
 * forwardRef의 인수 = render 함수
 * render 함수: 첫번째 인자 = props, 두번째 인자 = ref
 */

/* ------------------------------- Components ------------------------------- */
const Button = React.forwardRef<
   HTMLButtonElement,
   ButtonProps
>(
   (
      {
         asChild = false,
         size = 'medium',
         variant = 'primary',
         color = 'black',
         shape = 'sqaure',
         isIconOnly = false,
         before,
         after,
         children,
         onClick,
         className,
         disabled = false,
         ...otherProps
      },
      ref,
   ) => {
      const Component =
         asChild && React.isValidElement(children)
            ? ''
            : 'button';

      const renderIcon = (
         icon: React.ReactElement<HTMLElement>,
      ) => {
         return <span className="p-1">{icon}</span>;
      };

      const innerContent = (
         <>
            {before ? renderIcon(before) : null}
            {isIconOnly &&
               renderIcon(children?.props.children)}
            {React.isValidElement(children) &&
               children &&
               !isIconOnly && (
                  <span className="px-1">{children}</span>
               )}
            {after ? renderIcon(after) : null}
         </>
      );

      return (
         <button
            ref={ref}
            onClick={onClick}
            className={cn(
               // buttonVariants({
               //    size,
               //    color,
               //    variant,
               //    shape,
               // }),
               variant === 'link' &&
                  children &&
                  'focus-visible:outline-0',
               className,
            )}
            disabled={disabled}
            {...otherProps}
         >
            {innerContent}
         </button>
      );
   },
);

export default Button;
