import * as React from 'react';
import {
   cva,
   type VariantProps,
} from 'class-variance-authority';
import { cn } from '../../helpers/utils';
import Button from '../Button/Button';

/* ---------------------------------- Types --------------------------------- */
interface AlertType {
   /**
    * alert 창 제목
    */
   title?: React.ReactNode;

   /**
    * `true` 이면 닫힘 버튼 노출
    *  @default true
    */
   closable?: boolean;

   /**
    * close icon 클릭했을 때 실행되는 callback function
    */
   onClose?: (
      event: React.MouseEvent<HTMLButtonElement>,
   ) => void;

   /**
    * 경고창 스타일링을 위한 className
    */
   className?: string;

   /*
    * 경고창 내부에 포함되는 컴포넌트들
    */
   children?: React.ReactElement<HTMLElement>;
}
type AlertProps = React.HTMLAttributes<HTMLDivElement> &
   AlertType &
   VariantProps<typeof alertVariants>;

/* -------------------------------- Variants -------------------------------- */
const alertVariants = cva({
   variants: {
      size: {
         small: 'px-2 py-1 text-xs',
         medium: 'px-4 py-2 text-sm',
         large: 'px-6 py-3 text-lg',
      },
      color: {
         primary: 'border-primary text-surface-500',
         info: 'border-wg-blue bg-wg-blue-50 text-wg-blue-700',
         success:
            'border-wg-green bg-wg-green-50 text-wg-green-700',
         error: 'border-wg-red bg-wg-red-50 text-wg-red-700',
         warning:
            'border-wg-yellow bg-wg-yellow-50 text-wg-yellow-800',
      },
   },
   defaultVariants: {
      size: 'medium',
      color: 'primary',
   },
});

/* ------------------------------- Components ------------------------------- */
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
   (
      {
         title = '경고!',
         closable = true,
         onClose,
         className,
         color,
         children,
         ...otherProps
      },
      ref,
   ) => {
      const [visible, setVisible] = React.useState(true);

      const handleClick = React.useCallback(
         (event: React.MouseEvent<HTMLButtonElement>) => {
            if (!event.defaultPrevented) {
               // event.preventDefault() 실행 중이면. (버튼 클릭 이벤트 발생하지 않게 막아뒀다면)
               setVisible(false);
            }

            if (onClose) {
               onClose(event);
            }
         },
         [onClose],
      );

      if (!visible) return null;

      return (
         <div
            ref={ref}
            className={cn(
               //  alertVariants({ size, color }),
               className,
            )}
            {...otherProps}
         >
            {title && <AlertTitle>{title}</AlertTitle>}
            {children && (
               <AlertDescription>
                  {children}
               </AlertDescription>
            )}
            {closable && (
               <Button
                  isIconOnly={true}
                  onClick={handleClick}
               >
                  <CloseIcon />
               </Button>
            )}
         </div>
      );
   },
);

/* 제목 */
const AlertTitle = React.forwardRef<
   HTMLParagraphElement,
   React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => {
   return (
      <p ref={ref} className={className} {...props}>
         {children}
      </p>
   );
});

/* 내용 */
const AlertDescription = React.forwardRef<
   HTMLParagraphElement,
   React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => {
   return (
      <p
         ref={ref}
         className={cn('text-start', className)}
         {...props}
      >
         {children}
      </p>
   );
});

/* 경고창 닫기 버튼 아이콘 */
const CloseIcon = () => <img src="/img/closeIcon.png" />;

export default Alert;
