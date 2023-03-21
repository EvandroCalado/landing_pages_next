import styled, { css, DefaultTheme } from 'styled-components';

type Background = {
  background?: boolean;
};

const containerBackgroundActivate = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div<Background>`
  ${({ theme, background }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    min-height: 100vh;
    display: flex;
    align-items: center;
    ${background && containerBackgroundActivate(theme)};
  `}
`;
