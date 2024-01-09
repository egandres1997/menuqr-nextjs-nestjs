'use client';

import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { useGetTenantByUrl } from '@/infra/queries/getTenantByUrl.query';
import { IsServer } from '@/utils/queriesFrom';
import { Container } from '@mui/material';

export type AppBarProps = {
  url: string;
};

export default function AppBar({ url }: AppBarProps) {
  const { tenant } = useGetTenantByUrl<IsServer>(url);

  return (
    <Box sx={{ paddingTop: 34 }}>
      <MuiAppBar position="fixed" elevation={1}>
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {tenant?.name}
            </Typography>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </Box>
  );
}
