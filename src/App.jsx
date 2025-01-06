import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import BalanceBookRebornHome from "./Pages/apps/balance_book_reborn/balanceBookRebornHome";
import BalanceBookPrivacyPolicy from "./Pages/apps/balance_book_reborn/balanceBookPrivacyPolicy";
import BalanceBookDeleteAccount from "./Pages/apps/balance_book_reborn/balanceBookDeleteAccount";
import FCMNotifierAppHome from "./Pages/apps/fcm_notifier_app/fcmNotifierAppHome";
import FCMNotifierAppPrivacyPolicy from "./Pages/apps/fcm_notifier_app/fcmNotifierAppPrivacyPolicy";
import FCMNotifierAppDeleteAccount from "./Pages/apps/fcm_notifier_app/fcmNotifierAppDeleteAccount";

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
          
    <Route path="/app/fcm_notifier_app">
      <Route index element={<FCMNotifierAppHome />} />
      <Route path="privacy-policy" element={<FCMNotifierAppPrivacyPolicy />} />
      <Route path="delete-account" element={<FCMNotifierAppDeleteAccount />} />
    </Route>

  </Routes>
</HashRouter>
    </>
  );
}

export default App;