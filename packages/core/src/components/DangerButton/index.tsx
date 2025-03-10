import React from 'react';
import aesthetic from 'aesthetic';
import { StyleSheet } from '../../hooks/useStyles';
import Button, { ButtonProps } from '../Button';
import { buttonStyleSheet } from '../Button/styles';

const styleSheet: StyleSheet = aesthetic.extendStyles(buttonStyleSheet, ({ color }) => ({
  button: {
    backgroundColor: color.core.danger[5],
    border: `2px solid ${color.core.danger[5]}`,

    '@selectors': {
      ':not([disabled]):hover': {
        backgroundColor: color.core.danger[6],
        borderColor: color.core.danger[6],
      },
    },
  },

  button_inverted: {
    color: color.core.danger[5],
    backgroundColor: color.accent.bg,

    '@selectors': {
      ':not([disabled]):hover': {
        color: color.core.danger[6],
        backgroundColor: color.accent.bgHover,
      },
    },
  },
}));

/** A button to use for primary actions. Supports all the same props as `Button`. */
export default function DangerButton({ children, ...props }: ButtonProps) {
  return (
    <Button {...props} styleSheet={styleSheet}>
      {children}
    </Button>
  );
}
