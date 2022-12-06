import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 500px;
  margin: 50px auto;
  background-color: #fdfdfd;
  box-shadow: 1px 1px 6px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  padding: 20px 0;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: #eee;
  border-radius: 0 0 5px 5px;
`;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-radius: 5px;
  justify-content: center;
  padding: 10px 0 10px 0;
  color: #fff;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;

export const Value = styled.span`
  font-size: 20px;
`;