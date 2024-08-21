import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '../../../../packages/src/helpers/utils';
import { cva } from 'cva';

/* ---------------------------------- Types --------------------------------- */
interface ToolTipType {}

/* -------------------------------- Variants -------------------------------- */
const tooltipVariants = cva({
   base: 'z-50 rounded-md text-start text-white',
   variants: {
      size: {
         small: 'max-w-xs px-3 py-2 text-xs',
         medium: 'max-w-[350px] p-4 text-sm',
      },
      color: {
         primary: 'text-white wg-bg-primary',
         secondary:
            'text-white wg-bg-secondary dark:text-secondary-900',
         soft: 'border border-transparent text-wg-gray-700 shadow-wg-overlay wg-bg-white dark:border-surface dark:bg-neutral-800 dark:text-surface-700 dark:shadow-none',
      },
   },
   defaultVariants: {
      size: 'small',
      color: 'primary',
   },
});

/* ------------------------------- Components ------------------------------- */
const Tooltip = () => {};
