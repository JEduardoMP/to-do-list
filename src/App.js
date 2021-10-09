import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Inputbarr from './component/Inputbarr'

//Context
import { ToDoContextProvider } from './Context/ToDoContext';

//Views
import ToDoBox from './views/ToDoBox'
import Deletes from './views/Deletes';
import ErrorView from './views/ErrorView';
import TasksCompletes from './views/TasksCompletes';
import TasksIncompletes from './views/TasksIncompletes';

import './style.css'

function App() {
  return (
    <div className="w-10/12 border-8 border-white rounded h-5/6" id="container">
      <ToDoContextProvider>
        <Router>
          <Inputbarr />
          <Switch>
            <Route exact path="/" component={ToDoBox} />
            <Route exact path="/complete" component={TasksCompletes} />
            <Route exact path="/incomplete" component={TasksIncompletes} />
            <Route exact path="/deletes" component={Deletes} />
            <Route path="*" component={ErrorView} />
            <ToDoBox />
          </Switch>
        </Router>
      </ToDoContextProvider>
    </div>
  );
}

export default App;
