'use client'

import {Input, InputAdornment} from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import React from "react";
import {useTheme} from '@mui/material/styles';
import Box from "@mui/material/Box";


export default function NumericInput(props) {
  const theme = useTheme()

  return (
    <Box sx={{
      display: "flex",

      mt: 4,
      width: 1048,
      height: 111,

      background: '#FAF5EF',
      border: '3px white solid',
      borderRadius: 54.32,

      pl: "50px",
      pr: "32.59px",
      py: "21.73px",
    }}>
      <Input
        defaultValue="default"
        disableUnderline={true}
        sx={{
          width: "100%",
          fontSize: 35,
        }}
      />
      <KeyboardArrowRightRoundedIcon
        sx={{
          height: 66,
          width: 66,
          color: '#FFFFFF',
          backgroundColor: '#1F4934',
          borderRadius: '50%',
          padding: '1px',
        }}
      />

    </Box>
  )
}