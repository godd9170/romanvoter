import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import * as Pages from "pages"

function App() {
  return (
    <div className="overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Router>
          <Switch>
            <Route path="/vote/:id">
              <Pages.Vote />
            </Route>
            <Route path="/">
              <Pages.Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
