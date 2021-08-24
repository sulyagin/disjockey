import styled from 'styled-components';

export const ButtonElement = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  min-width: 8.5rem;
  height: 8rem;
  background: #646567;
  border-radius: 1rem;
  font-size: 5.5rem;
  margin: 0.8rem;
  padding: 0 2.4rem 0.2rem 2.4rem;
  transition: all 0.05s;

  &.selected {
    background: #d93636 !important;
    color: #fff !important;
  }
`;
