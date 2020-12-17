import "./App.css";
import HomePage from "./components/HomePage";
import { Route, Switch, HashRouter } from "react-router-dom";

import { IntlProvider } from "react-intl";

import { useSelector } from "react-redux";

import { getCurrentLocaleSelector } from "./redux/selectors/localeSelector";

const messages = {
  hi: { siteTitle: "अपनी पसंद का गाना ढूंढे " },
  en: { siteTitle: "Search Your Music" },
  // siteTitle: "Aujourd'hui, c'est le",
};

function App() {
  const userLocale = useSelector(getCurrentLocaleSelector);
  console.log("userLocale", userLocale);

  return (
    <IntlProvider
      messages={messages[userLocale]}
      locale={userLocale}
      defaultLocale="en"
      key={userLocale}
    >
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route path="/song" component={Song} /> */}
          </Switch>
        </HashRouter>
      </div>
    </IntlProvider>
  );
}

export default App;
