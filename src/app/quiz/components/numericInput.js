'use client'

import {IconButton, Input} from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import React from "react";
import {useTheme} from '@mui/material/styles';
import Box from "@mui/material/Box";


export default function NumericInput(props) {
  const theme = useTheme()

  return (
    <Box sx={{
      display: "flex",

      mt: "37px",
      mx: "auto",
      width: "1048px",
      height: "111px",

      background: '#FAF5EF',
      border: '3px white solid',
      borderRadius: "54.32px",

      pl: "50px",
      pr: "32.59px",
      py: "21.73px",
    }}>
      <Input
        defaultValue="default"
        disableUnderline={true}
        sx={{
          width: "100%",
          fontSize: "35px",
        }}
      />
      <IconButton type="submit" sx={{
        width: 66,
        height: 66,
        color: '#FFFFFF',
        bgcolor: '#1F4934',
        '&:hover': {bgcolor: '#367556'},
      }}>
        <KeyboardArrowRightRoundedIcon sx={{fontSize: 55}}/>
      </IconButton>
    </Box>
  )
}