import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import Menu from "@mui/material/Menu";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            underline="hover"
            color="inherit"
            variant="h6"
            sx={{ flexGrow: 1 }}
            href="https://zzbbcsd.github.io/csb-cr7m53/"
            target="_blank"
          >
            About Me
          </Link>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              href="https://github.com/zzbbcsd"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
            ></Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
