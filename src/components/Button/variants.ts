import { cva } from 'class-variance-authority';

export const buttonVariants = cva({
   base: 'group inline-flex shrink-0 select-none items-center justify-center text-sm font-medium leading-6 transition-colors duration-100 wg-antialiased focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none',
   variants: {
      size: {
         small: 'px-2 py-1 text-xs',
         medium: 'px-4 py-2 text-sm',
         large: 'px-6 py-3 text-lg',
      },
      color: {
         black: 'bg-white-500 text-black',
         red: 'bg-red-500 text-white',
         blue: 'bg-blue-500 text-white',
      },
      variant: {
         primary:
            'bg-primary text-white outline-primary hover:bg-primary-600 disabled:opacity-50',
         secondary:
            'bg-secondary text-white outline-secondary hover:bg-secondary-700 disabled:bg-secondary-200 dark:text-secondary-900 dark:hover:bg-secondary-800 dark:disabled:text-wg-white-500',
         tertiary: 'bg-surface hover:bg-surface-100',
         outline:
            'dark:shadow:none border border-surface-200 shadow-wg-xs [--wg-border-width:1px] hover:bg-surface disabled:border-surface-50 dark:border-surface-100',
         transparent: 'bg-transparent hover:bg-surface',
         link: 'p-0 underline underline-offset-3 focus-visible:text-primary',
      },
      shape: {
         rounded: 'rounded-full',
         square: 'rounded-none',
      },
   },
   defaultVariants: {
      size: 'medium',
      color: 'black',
      variant: 'primary',
      shape: 'rounded',
   },
});
