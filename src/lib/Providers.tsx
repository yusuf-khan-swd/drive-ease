"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
      </LocalizationProvider>
    </AppRouterCacheProvider>
  );
};

export default Providers;
