import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";

const Nav = styled(AppBar)({
  backgroundColor: "#333",
});

const NavLink = styled(Link)({
  color: "white",
  margin: "10px",
  textDecoration: "none",
});

function Navbar() {
  const auth = useSelector((state) => state.auth.authentication);

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(authActions.login());
  };
  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Nav position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Redux
          </Typography>
          {auth && (
            <>
              <NavLink to='/' color='inherit'>
                Cities
              </NavLink>
              <NavLink to='/counter' color='inherit'>
                Counter
              </NavLink>
            </>
          )}
          {!auth && (
            <Button variant='contained' onClick={handleLogin}>
              Login
            </Button>
          )}
          {auth && (
            <Button
              sx={{ backgroundColor: "red" }}
              variant='contained'
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </Nav>
    </Box>
  );
}

export default Navbar;
