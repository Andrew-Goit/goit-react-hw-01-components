import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin: 50px auto 0 auto;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 1px 1px 6px 4px rgba(0, 0, 0, 0.16);
`;

export const Description = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 75px;
`;

export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 26px;
  margin-top: 20px;
`;

export const Tag = styled.p`
  color: #777;
  margin-top: 15px;
`;

export const Location = styled.p`
  color: #777;
  margin-top: 15px;
`;

export const Stats = styled.ul`
  background-color: #eee;
  height: 100px;
  width: 100%;
  display: flex;
  border-top: 2px solid #ddd;
  border-radius: 0 0 5px 5px;
`;

export const StatsItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #E9EBF1;
  &:nth-child(2) {
    border-left: 2px solid #ddd;
    border-right: 2px solid #ddd;
  }
`;

export const Label = styled.span`
  color: #777;
  font-size: 18px;
`;

export const Quantity = styled.span`
  font-size: 20px;
  padding-top: 8px;
  font-weight: 700;
`;