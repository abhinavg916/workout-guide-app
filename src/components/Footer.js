import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
	<Box my="80px" bgcolor="#fffafb">
		<Stack gap="40px" sx={{ alignItems: "center" }} flexWrap="wrap" px="40px" py="48px">
			<img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
		</Stack>
	</Box>
);

export default Footer;
