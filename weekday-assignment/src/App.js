import { Provider } from 'react-redux';
import './App.css';
import JobsList from './containers/JobsList';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <JobsList/>
    </Provider>
  );
}

export default App;
