import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import BalanceBookRebornHome from "./Pages/apps/balance_book_reborn/balanceBookRebornHome";
import BalanceBookPrivacyPolicy from "./Pages/apps/balance_book_reborn/balanceBookPrivacyPolicy";
import BalanceBookDeleteAccount from "./Pages/apps/balance_book_reborn/balanceBookDeleteAccount";
import FCMNotifierAppHome from "./Pages/apps/fcm_notifier_app/fcmNotifierAppHome";
import FCMNotifierAppPrivacyPolicy from "./Pages/apps/fcm_notifier_app/fcmNotifierAppPrivacyPolicy";
import FCMNotifierAppDeleteAccount from "./Pages/apps/fcm_notifier_app/fcmNotifierAppDeleteAccount";
import PlateAIHome from "./Pages/apps/plate_ai/plateAIHome";
import PlateAIPrivacyPolicy from "./Pages/apps/plate_ai/plateAIPrivacyPolicy";
import FoliagoHome from "./Pages/apps/foliago/foliagoHome";
import FoliagoPrivacyPolicy from "./Pages/apps/foliago/foliagoPrivacyPolicy";
import FoliagoTermsAndConditions from "./Pages/apps/foliago/foliagoTermsAndConditions";
import PlumagoHome from "./Pages/apps/plumago/plumagoHome";
import PlumagoPrivacyPolicy from "./Pages/apps/plumago/plumagoPrivacyPolicy";
import PlumagoTermsAndConditions from "./Pages/apps/plumago/plumagoTermsAndConditions";
import BuggleHome from "./Pages/apps/buggle/buggleHome";
import BugglePrivacyPolicy from "./Pages/apps/buggle/bugglePrivacyPolicy";
import BuggleTermsAndConditions from "./Pages/apps/buggle/buggleTermsAndConditions";
import FinlyHome from "./Pages/apps/finly/finlyHome";
import FinlyPrivacyPolicy from "./Pages/apps/finly/finlyPrivacyPolicy";
import FinlyTermsAndConditions from "./Pages/apps/finly/finlyTermsAndConditions";

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

    <Route path="/app/plate_ai">
      <Route index element={<PlateAIHome />} />
      <Route path="privacy-policy" element={<PlateAIPrivacyPolicy />} />
    </Route>

    <Route path="/app/foliago">
      <Route index element={<FoliagoHome />} />
      <Route path="privacy-policy" element={<FoliagoPrivacyPolicy />} />
      <Route path="terms-and-conditions" element={<FoliagoTermsAndConditions />} />
    </Route>

    <Route path="/app/plumago">
      <Route index element={<PlumagoHome />} />
      <Route path="privacy-policy" element={<PlumagoPrivacyPolicy />} />
      <Route path="terms-and-conditions" element={<PlumagoTermsAndConditions />} />
    </Route>

    <Route path="/app/buggle">
      <Route index element={<BuggleHome />} />
      <Route path="privacy-policy" element={<BugglePrivacyPolicy />} />
      <Route path="terms-and-conditions" element={<BuggleTermsAndConditions />} />
    </Route>

    <Route path="/app/finly">
      <Route index element={<FinlyHome />} />
      <Route path="privacy-policy" element={<FinlyPrivacyPolicy />} />
      <Route path="terms-and-conditions" element={<FinlyTermsAndConditions />} />
    </Route>

  </Routes>
</HashRouter>
    </>
  );
}

export default App;