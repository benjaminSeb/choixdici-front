import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { getCategories } from "utils/Category";

const CategoriesDiv = styled("div")({
	width: "100%",
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "center",
});

const CategoryButton = styled(Button)({
	backgroundColor: "grey",
	margin: "2em",
	padding: "1em",
	fontSize: "25px",
	borderRadius: "2em",
	fontWeight: "bold",
	textTransform: "none",
});

function FindCategory() {
	return (
		<CategoriesDiv>
			{getCategories().map((value, index) => {
				return <CategoryButton>{value}</CategoryButton>;
			})}
		</CategoriesDiv>
	);
}

export default FindCategory;
