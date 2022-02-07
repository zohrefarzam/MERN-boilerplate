import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

const CustomButton = styled(Button)(({ theme,color }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[200],
  '&:hover': {
    backgroundColor: purple[300],
  },
}));

export default function CButton({title,varient}) {
  return (
      <CustomButton variant={varient}>{title}</CustomButton>
  );
}