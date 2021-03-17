import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopNav from "./components/nav/TopNav";
import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
