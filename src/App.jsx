import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import BalanceBookRebornHome from "./Pages/apps/balance_book_reborn/balanceBookRebornHome";
import BalanceBookPrivacyPolicy from "./Pages/apps/balance_book_reborn/balanceBookPrivacyPolicy";
import BalanceBookDeleteAccount from "./Pages/apps/balance_book_reborn/balanceBookDeleteAccount";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <>
   <HashRouter>
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="/app/balance_book_reborn">
      <Route index element={<BalanceBookRebornHome />} />
      <Route path="privacy-policy" element={<BalanceBookPrivacyPolicy />} />
      <Route path="delete-account" element={<BalanceBookDeleteAccount />} />
    </Route>
  </Routes>
</HashRouter>
    </>
  );
}

export default App;