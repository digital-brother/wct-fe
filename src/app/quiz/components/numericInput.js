'use client'


import {Input, InputAdornment} from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import React from "react";
import {useTheme} from '@mui/material/styles';
import Box from "@mui/material/Box";


export default function NumericInput(props) {
  const theme = useTheme()
  console.log(props)

  return (
    <Box {...props}>
      <Input
        defaultValue="default"
        disableUnderline={true}
        sx={{
          backgroundColor: "#FAF5EF",
          border: "1px solid #FFFFFF",
          borderRadius: theme.typography.h2.fontSize,
          pl: theme.typography.h2.fontSize,
          pr: theme.typography.h2.fontSize,
          fontSize: theme.typography.h2.fontSize,
        }}
        endAdornment={
          <InputAdornment position="end">
            <KeyboardArrowRightRoundedIcon
              sx={{
                height: theme.typography.h2.fontSize,
                width: theme.typography.h2.fontSize,
                color: '#FFFFFF',
                backgroundColor: '#1F4934',
                borderRadius: '50%',
                padding: '1px',
              }}
            />
          </InputAdornment>
        }
      />
    </Box>
  )
}