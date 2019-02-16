import styled from 'styled-components';
import { AppBar, Typography, IconButton } from '@material-ui/core';

export const Container = styled.div`
  flex-grow: 1;
`;

export const MainPage = styled.main`
  margin: 64px 0;
  padding: 1em;

  @media (max-width: 600px) {
    margin: 56px 0;
  }
`;

export const StyledTypography = styled(Typography)`
  flex-grow: 1;
`;

export const StyledIconButton = styled(IconButton)`
  margin-left: -12;
  margin-right: 20;
`;

export const StyledAppBar = styled(AppBar)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
`;
