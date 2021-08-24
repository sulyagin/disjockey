import styled from 'styled-components';

export const RowElement = styled.span`
  display: flex;
  flex-direction: row;

  &.selected span {
    background: #fff;
    color: #000;
  }
`;
