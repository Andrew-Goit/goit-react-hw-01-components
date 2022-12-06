import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 700px;
  margin: 0 auto;
  margin-top: 40px;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
  
`;

export const Head = styled.tr`
  height: 30px;
  background-color: #07BAD2;
  color: #eee;
`;

export const Line = styled.tr`
  height: 30px;
  font-size: 14px;
  background-color: #fff;
  &:nth-child(2n) {
    background-color: #eee;
  }
`;

export const Type = styled.td`
  text-align: center;
  text-transform: capitalize;  
`;

export const Td = styled.td`
  text-align: center;
`;