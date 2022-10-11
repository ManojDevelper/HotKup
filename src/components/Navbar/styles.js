import styled from "styled-components"

export const NavbarMain = styled.div`
  padding: 28px 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 165px;
  }
  .nav_options {
    .nav_link {
      font-weight: 600;
      font-size: 18px;
      line-height: 50px;
      text-align: center;
      color: #200e32;
      margin-left: 35px;
      height: 48px;
      :hover {
        color: #0057fb;
        transition: 0.5s ease-in-out;
      }
      :nth-child(5) {
        background: #0057fb;
        padding: 12px 39px;
        color: white;
      }
    }
  }
`
