import Allphotos from "./component/body/Allphotos";
import HeadersComponent from "./component/header/HeadersComponent";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Color from "./component/body/Color";
import Colorsection from "./component/body/Colorsection";
import RecentItem from "./component/body/RecentItem";
import Allcollection from "./component/body/collection/Allcollection";

function App() {
  return (
    <>
      <HeadersComponent />
      <Router>
      <Switch>
          <Route exact path="/">
            <Allphotos />
            <Colorsection />
            </Route>
            
          <Route path="/color/:name" component={Color} />
          <Route path="/product/:name" component={RecentItem} />
          <Route path="/collection" component={Allcollection} />

        </Switch>
        </Router>
    </>
  );
}

export default App;
