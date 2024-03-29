import styled from "styled-components";

export const StyledNavbar = styled.section`
  .nav {
    background-color: #fcbd3f;
    border: 1px solid #000;
  }

  .title {
    font-family: DynaPuff, cursive;
    color: #fff;
    font-size: 38px;
    font-weight: 700;
    cursor: pointer;
  }

  .cart {
    font-size: 26px;
    /* margin: 1rem; */
    cursor: pointer;
  }

  .rounded-pill {
    font-size: 12px;
  }

  .menu {
    cursor: pointer;
  }

  @media screen and (max-width: 720px) {
    .title {
      font-size: 30px;
    }
  }
`;
