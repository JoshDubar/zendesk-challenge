import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ZendeskIcon from "./components/ZendeskIcon";
import TicketIcon from "./components/TicketIcon";
import TicketPage from "./components/TicketPage/TicketPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <nav className="green-bg">
          <ZendeskIcon className="zendesk-icon" />
          <TicketIcon className="ticket-icon" />
        </nav>
        <TicketPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
