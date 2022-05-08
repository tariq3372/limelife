import { Box, Typography } from "@mui/material";
import sizes from '../theme/sizes';

const PageTitle = ({title}) => (
  <Box
    sx={{
      backgroundColor: "black",
      height: "241px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mb: sizes.base
    }}
  >
    <Typography fontFamily="muli-bold" color="#FFFFFF" fontSize={30}>
      {title}
    </Typography>
  </Box>
);
export default PageTitle;