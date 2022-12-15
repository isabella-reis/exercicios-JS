import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color:#516562;
  color: #bff6c1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
    background-color: #313e47;
    width: 50%;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`