import styled from "styled-components"

export const ProductMain = styled.div`
  background: #f1f9ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9vw 0;
  h1 {
    font-weight: 900;
    font-size: 3vw;
    line-height: 5vw;
    color: #212121;
    text-align: center;
  }
  .dashboard_img {
    width: 65vw;
    margin: 2vw 0 6.5vw 0;
  }
  p {
    width: 55.5vw;
    font-weight: 500;
    font-size: 1.5vw;
    line-height: 2.6vw;
    text-align: center;
    letter-spacing: 0.01em;
    color: #200e32;
  }
  @media (max-width: 750px) {
    h1 {
      font-size: 5.8vw;
      line-height: 5.6vw;
    }
    .dashboard_img {
      width: 69.7vw;
      margin: 7vw 0 6vw 0;
    }
    p {
      width: 87.5vw;
      font-size: 3.5vw;
      line-height: 6vw;
    }
  }
`
