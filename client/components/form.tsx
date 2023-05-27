import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.paddings.extraSmall} 0;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #122c3480;

  outline: 0;
  appearance: none;

  padding: ${({ theme }) => theme.paddings.extraSmall};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding-bottom: ${({ theme }) => theme.paddings.extraSmall};
`;
