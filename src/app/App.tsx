import { Provider } from 'react-redux';
import { MainPage } from 'pages/main';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
