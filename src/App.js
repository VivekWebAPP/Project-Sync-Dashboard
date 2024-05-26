import { useContext, useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar/Calendar";
import Geography from "./scenes/geography";
import Sidebar from "./scenes/global/Sidebar";
import LoginForm from "./scenes/LoginForm/LoginForm";
import SiginForm from "./scenes/Sigin-Up Form/SiginForm";
import AuthContext from "./context/AuthContext";
import EditingTable from "./scenes/team/EditingTable";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const context = useContext(AuthContext);
  const {authToken} = context;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={authToken!==''?<Dashboard />:<LoginForm/>} />
              <Route path="/team" element={authToken!==''?<EditingTable />:<LoginForm/>} />
              <Route path="/contacts" element={authToken!==''?<Contacts />:<LoginForm/>} />
              <Route path="/invoices" element={authToken!==''?<Invoices />:<LoginForm/>} />
              <Route path="/form" element={authToken!==''?<Form />:<LoginForm/>} />
              <Route path="/login" element={authToken!==''?<Dashboard/>:<LoginForm />} />
              <Route path="/sigin" element={authToken!==''?<LoginForm/>:<SiginForm />} />
              <Route path="/bar" element={authToken!==''?<Bar />:<LoginForm/>} />
              <Route path="/pie" element={authToken!==''?<Pie />:<LoginForm/>} />
              <Route path="/line" element={authToken!==''?<Line />:<LoginForm/>} />
              <Route path="/faq" element={authToken!==''?<FAQ />:<LoginForm/>} />
              <Route path="/calendar" element={authToken!==''?<Calendar />:<LoginForm/>} />
              <Route path="/geography" element={authToken!==''?<Geography />:<LoginForm/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
