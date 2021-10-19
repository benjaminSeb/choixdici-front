import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import test from "images/test.png";

const CardMediaStyled = styled(CardMedia)({
	height: "14em",
});

const WeeklyEventCard = styled(Card)({
	width: "25em",
	marginTop: "1em",
	marginBottom: "1em",
	marginRight: "-5em",
	borderTopLeftRadius: "3em",
	borderBottomLeftRadius: "3em",
});

const WeeklyEventCardContent = styled(CardContent)({
	paddingRight: "6em",
});

function WeeklyEvent() {
	return (
		<WeeklyEventCard>
			<CardActionArea>
				<CardMediaStyled image={test} title="Contemplative Reptile" />
				<WeeklyEventCardContent>
					<Typography gutterBottom variant="h5" component="h2">
						L'évènement de la semaine
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Nom Event, le Date Event
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Lieu Event
					</Typography>
				</WeeklyEventCardContent>
			</CardActionArea>
		</WeeklyEventCard>
	);
}

export default WeeklyEvent;
