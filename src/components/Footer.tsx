import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const FooterDiv = styled("div")({
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	width: "100%",
	backgroundColor: "#53BE4F",
});

const HomeDiv = styled("div")({
	display: "flex",
	justifyContent: "center",
});

const HomeButton = styled(Button)({
	fontFamily: "Poppins, Sans-serif",
	fontSize: "25px",
	fontWeight: "bold",
	textTransform: "none",
	"&:hover": {
		backgroundColor: "white",
	},
});

function Footer() {
	return (
		<FooterDiv>
			<HomeDiv>
				<HomeButton>
					<Typography>choix </Typography>
					<Typography>d'ici</Typography>
				</HomeButton>
				<Typography>REPERTOIRE DES INITIATIVES LOCALES</Typography>
			</HomeDiv>
		</FooterDiv>
	);
}

export default Footer;
