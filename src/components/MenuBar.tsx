import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ToggleButton } from "@mui/lab";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { ActivePageEnum } from "utils/ActivePageEnum";

const HeaderDiv = styled("div")({
	display: "flex",
	justifyContent: "space-around",
});

const HomeDiv = styled("div")({
	display: "flex",
	justifyContent: "center",
});

const MenuDiv = styled("div")({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

const MenuButton = styled(ToggleButton)({
	boxShadow: "none",
	fontFamily: "Poppins, Sans-serif",
	fontSize: "14px",
	fontWeight: "bold",
	textTransform: "none",
	lineHeight: "normal",
	height: "2em",
	borderRadius: "15px",
	border: "1px solid",
	borderColor: "#E1E1E1",
	marginLeft: "10px",
	marginRight: "10px",
	"&:hover": {
		boxShadow: "none",
		backgroundColor: "rgb(58, 170, 53)",
		color: "rgb(255, 255, 255)",
	},
	"&:focus": {
		boxShadow: "none",
		backgroundColor: "rgb(58, 170, 53)",
		border: "none",
		color: "rgb(255, 255, 255)",
	},
	"&.Mui-selected": {
		boxShadow: "none",
		backgroundColor: "rgb(58, 170, 53)",
		border: "none",
		color: "rgb(255, 255, 255)",
	},
});

const HomeButton = styled(Button)({
	fontFamily: "Poppins, Sans-serif",
	fontSize: "25px",
	fontWeight: "bold",
	textTransform: "none",
	borderRadius: "2em",
	"&:hover": {
		backgroundColor: "white",
	},
});

const HomeIcon = styled(LocationOnIcon)({
	color: "rgb(58, 170, 53)",
});

interface IMenuBarProps {
	setActivePage: (param: ActivePageEnum) => void;
	activePage: ActivePageEnum;
}

function MenuBar(props: IMenuBarProps) {
	const { activePage, setActivePage } = props;

	const handleMenuButtonClick = (value: ActivePageEnum): void => {
		setActivePage(value);
	};

	return (
		<HeaderDiv>
			<HomeDiv>
				<HomeButton onClick={() => handleMenuButtonClick(ActivePageEnum.HOME)}>
					<HomeIcon fontSize="large" />
					choix d'ici
				</HomeButton>
			</HomeDiv>
			<MenuDiv>
				<MenuButton
					onClick={() => handleMenuButtonClick(ActivePageEnum.AGENDA)}
					value={activePage === ActivePageEnum.AGENDA}
				>
					Agenda
				</MenuButton>
				<MenuButton
					onClick={() => handleMenuButtonClick(ActivePageEnum.REPERTOIRE)}
					value={activePage === ActivePageEnum.REPERTOIRE}
				>
					Répertoire
				</MenuButton>
				<MenuButton
					onClick={() => handleMenuButtonClick(ActivePageEnum.REPORTAGES)}
					value={activePage === ActivePageEnum.REPORTAGES}
				>
					Reportages
				</MenuButton>
				<MenuButton
					onClick={() => handleMenuButtonClick(ActivePageEnum.CONTACTS)}
					value={activePage === ActivePageEnum.CONTACTS}
				>
					Contacts
				</MenuButton>
			</MenuDiv>
		</HeaderDiv>
	);
}

export default MenuBar;
