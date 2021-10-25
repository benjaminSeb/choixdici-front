import { ReactElement, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ActivePageEnum } from "utils/ActivePageEnum";
import AgendaPage from "./agenda/AgendaPage";
import Footer from "./Footer";
import HomePage from "./home/HomePage";
import MenuBar from "./MenuBar";

const queryClient = new QueryClient();

function App() {
	const [activePage, setActivePage] = useState(ActivePageEnum.HOME);

	const getContent = (): ReactElement => {
		switch (activePage) {
			case ActivePageEnum.HOME: {
				return <HomePage pageProps={{ setActivePage }} />;
			}
			case ActivePageEnum.AGENDA: {
				return <AgendaPage pageProps={{ setActivePage }} />;
			}
			default: {
				return <HomePage pageProps={{ setActivePage }} />;
			}
		}
	};

	return (
		<QueryClientProvider client={queryClient}>
			<MenuBar setActivePage={setActivePage} activePage={activePage} />
			{getContent()}
			<Footer />
		</QueryClientProvider>
	);
}

export default App;
