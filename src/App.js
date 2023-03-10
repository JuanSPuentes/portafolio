import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error404 from "containers/errors/Error404"
import Portfolio from 'components/Portfolio';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404/>}/>

          {/* Home Display */}
          <Route path="/" element={<Portfolio/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
