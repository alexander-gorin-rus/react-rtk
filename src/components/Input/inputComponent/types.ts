import React, { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  helperText?: React.ReactNode;
  placeholder: string;
  title: string;
  disabled?: boolean;
  error: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, value?: string) => void;
};
