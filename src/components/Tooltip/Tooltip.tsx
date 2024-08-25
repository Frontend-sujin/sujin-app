import * as React from 'react';

interface ContextType {
   open: boolean; // 툴팁 열려있는지 여부
   onOpen: () => void;
   onClose: () => void;
}

/* ------------------------------- Context 생성 ------------------------------- */
const TooltipContext =
   React.createContext<ContextType | null>(null);

/* -------------------------------- Provider -------------------------------- */
const TooltipProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const [isOpened, setIsOpened] = React.useState(false);

   return (
      <TooltipContext.Provider
         value={{
            open: isOpened,
            onOpen: () => setIsOpened(true),
            onClose: () => setIsOpened(false),
         }}
      >
         {children}
      </TooltipContext.Provider>
   );
};

/* -------------------------------- Content -------------------------------- */
const TooltipContent = ({
   content,
}: {
   content: string;
}) => {
   const context = React.useContext(TooltipContext);

   return <div>{context?.open && content}</div>;
};

/* -------------------------------- Trigger -------------------------------- */
const TooltipTrigger = () => {
   const context = React.useContext(TooltipContext);

   const handleMouseOver = () => {
      context?.onOpen();
   };

   const handleMouseLeave = () => {
      context?.onClose();
   };

   return (
      <button
         onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
      ></button>
   );
};

/* ------------------------------- Components ------------------------------- */
interface TooltipType {
   content: string;
}

const Tooltip = ({ content }: TooltipType) => {
   return (
      <TooltipProvider>
         <TooltipContent content={content} />
         <TooltipTrigger />
      </TooltipProvider>
   );
};

export default Tooltip;
