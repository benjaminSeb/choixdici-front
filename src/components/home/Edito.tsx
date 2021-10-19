import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const EditoDiv = styled("div")({
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	width: "100%",
	backgroundColor: "#53BE4F",
});

const EditoTypo = styled(Typography)({
	color: "rgb(255, 255, 255)",
	fontWeight: "bold",
	margin: "1em",
});

const EditoTypoText = styled(Typography)({
	color: "rgb(255, 255, 255)",
	maxWidth: "33%",
	marginRight: "1em",
	fontWeight: "bold",
});

function Edito() {
	return (
		<EditoDiv>
			<EditoTypo variant="h2">édito</EditoTypo>
			<EditoTypoText variant="body1" paragraph={true}>
				Nous invitons tous les porteurs d’initiatives à nous contacter, afin de
				pouvoir vous offrir le répertoire le plus complet possible de tout ce
				qui contribue au « bien vivre ensemble » sur notre secteur.
			</EditoTypoText>
		</EditoDiv>
	);
}

export default Edito;
