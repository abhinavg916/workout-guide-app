import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => (
	<Box my="80px">
		<Stack gap="40px" sx={{ alignItems: "center" }} flexWrap="wrap" px="40px" py="48px">
			<Typography color="#fbbf24" fontWeight="600" fontSize="26px">
				WORKOUT GUIDE
			</Typography>
		</Stack>
	</Box>
);

export default Footer;
