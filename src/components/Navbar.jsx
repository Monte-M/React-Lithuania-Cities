import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";

const Nav = styled(AppBar)({
  backgroundColor: "#333",
});

const NavLink = styled(Link)({
  color: "white",
  margin: "10px",
  textDecoration: "none",
});

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Nav position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Redux
          </Typography>
          <NavLink to="/" color="inherit">
            Home
          </NavLink>
          <NavLink to="/counter" color="inherit">
            Counter
          </NavLink>
        </Toolbar>
      </Nav>
    </Box>
  );
}

export default Navbar;
