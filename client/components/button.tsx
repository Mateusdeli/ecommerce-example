import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme, color }) =>
    theme.colors[color] || theme.colors.primary};
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.white};
  border-radius: 5px;
  outline: 0;
  border: none;
  padding: ${({ theme }) => theme.paddings.extraSmall}
    ${({ theme }) => theme.paddings.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  cursor: pointer;
`;
