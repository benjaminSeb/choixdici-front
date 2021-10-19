import { Card, CardContent, CardMedia, Fab, Typography } from "@mui/material";
import { ActivePageEnum } from "utils/ActivePageEnum";
import { getEventsOfDay, IEvent } from "utils/EventUtil";
import test from "images/test.png";
import { styled } from "@mui/system";

interface IAgendaPageProps {
	pageProps: {
		setActivePage: (param: ActivePageEnum) => void;
	};
}

const AgendaDiv = styled("div")({
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "center",
});

const AgendaEventCard = styled(Card)({
	width: "10em",
	margin: "1%",
	border: "2em",
});

function AgendaPage(props: IAgendaPageProps) {
	return (
		<>
			<AgendaDiv>
				{getEventsOfDay().map((thatEvent: IEvent) => {
					return (
						<AgendaEventCard>
							<CardMedia component="img" image={test} />
							<CardContent>
								<Typography variant="h6" color="textSecondary">
									{thatEvent.name}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									{thatEvent.location}
									<br />
									{thatEvent.date}
								</Typography>
							</CardContent>
						</AgendaEventCard>
					);
				})}
			</AgendaDiv>
			<Fab color="primary" aria-label="add">
				{/* <Add /> */}
			</Fab>
		</>
	);
}

export default AgendaPage;
