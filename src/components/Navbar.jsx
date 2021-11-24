import { AppBar, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/styles";
const Nav = styled(AppBar)({
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const NavLink = styled(Link)({
  textDecoration: "none",
  margin: "20px",
  color: "white",
});

function Navbar() {
  return (
    <Nav>
      <Container>Logo</Container>
      <Container>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/counter">Counter</NavLink>
      </Container>
    </Nav>
  );
}

export default Navbar;
