import styled from "styled-components"

export const NavbarMain = styled.div`
  padding: 28px 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 165px;
  }
  .hamburger {
    display: none;
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
    }

    .nav_active {
      color: #0057fb;
      transition: 0.5s ease-in-out;
    }
    .nav_links {
      background: #0057fb;
      padding: 12px 39px;
      color: white;
    }
    .closeIcon {
      display: none;
    }
  }

  @media (max-width: 992px) {
    .logo {
      width: 13vw;
    }
    .nav_option_mobile {
      .nav_link {
        margin-left: 3vw;
      }
      .nav_links {
        padding: 1vw 2vw;
      }
    }
  }

  @media (max-width: 933px) {
    padding: 28px 49px;
    .nav_options {
      display: none;
    }
    .logo {
      width: 113px;
    }
    .hamburger {
      width: 30px;
      display: flex;
    }

    .nav_option_mobile {
      position: fixed;
      background: white;
      width: 100%;
      left: 0;
      top: 0;
      height: 100%;
      z-index: 10;
      display: flex;
      flex-direction: column;
      padding: 145px 0 0 0;
      .nav_link {
        margin-left: 3vw;
        margin: 18px 0 0 0;
      }
      .nav_links {
        width: 50vw;
        padding: 0 !important;
        margin: 18px auto 0 auto;
      }
      .closeIcon {
        display: flex;
        position: absolute;
        top: 0;
        top: 10px;
        font-size: 18px;
        right: 20px;
        top: 19px;
        cursor: pointer;
      }
    }
  }
`
