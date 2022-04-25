import { Box, Typography } from "@mui/material";

const PageTitle = ({title}) => (
  <Box
    sx={{
      backgroundColor: "black",
      height: "241px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Typography fontFamily="muli-bold" color="#FFFFFF" fontSize={30}>
      {title}
    </Typography>
  </Box>
);

export default PageTitle;