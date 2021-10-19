import { Button, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getEventsOfDay, IEvent } from "utils/EventUtil";
import EventDay from "./EventDay";
import WeeklyEvent from "./WeeklyEvent";

const CalendarEventDiv = styled("div")({
	display: "flex",
	justifyContent: "center",
	margin: "2em",
});

const CalendarStyled = styled(Calendar)({
	border: "none",
	"& *": {
		borderRadius: "3em",
	},
});

const DayEventPaper = styled(Paper)({
	width: "20em",
	padding: "2em",
});

const CalendarPaper = styled(Paper)({
	padding: "2em",
	borderRadius: "3em",
	zIndex: 1,
});

const VoirPlusButton = styled(Button)({
	backgroundColor: "white",
	width: "100%",
	marginTop: "1em",
	borderRadius: "2em",
	fontWeight: "bold",
	textTransform: "none",
});

function CalendarEvent() {
	const [value, onChange] = useState(new Date());
	const events = getEventsOfDay();

	return (
		<CalendarEventDiv>
			<WeeklyEvent />
			<CalendarPaper elevation={3}>
				<CalendarStyled onChange={onChange} value={value} />
			</CalendarPaper>
			<DayEventPaper elevation={0}>
				{events.slice(0, 3).map((thatEvent: IEvent, i) => {
					return <EventDay event={thatEvent} />;
				})}
				{events.length > 3 && (
					<VoirPlusButton variant="contained">Voir +</VoirPlusButton>
				)}
			</DayEventPaper>
		</CalendarEventDiv>
	);
}

export default CalendarEvent;
