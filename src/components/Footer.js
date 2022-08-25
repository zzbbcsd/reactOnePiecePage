import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box sx={{ textAlign: "center", padding: 8 }}>
      <Link
        href="https://zzbbcsd.github.io/csb-cr7m53/"
        target="_blank"
        variant="body2"
        color="inherit"
        underline="hover"
      >
        About Me
      </Link>
      <Typography sx={{ padding: 5 }} variant="body2" color="inherit">
        ©AmongusBackward.com
      </Typography>
    </Box>
  );
}
