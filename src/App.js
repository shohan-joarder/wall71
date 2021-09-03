import Allphotos from "./component/body/Allphotos";
import HeadersComponent from "./component/header/HeadersComponent";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Color from "./component/body/Color";
import Colorsection from "./component/body/Colorsection";
import RecentItem from "./component/body/RecentItem";
import Allcollection from "./component/body/collection/Allcollection";
import CollectionbyProduct from "./component/body/collection/CollectionbyProduct";

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
          <Route path="/product_by_collection/:id" component={CollectionbyProduct} />

        </Switch>
        </Router>
    </>
  );
}

export default App;
