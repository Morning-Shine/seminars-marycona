import { Provider } from 'react-redux';
import { MainPage } from 'pages/main';
import { store } from './store';
import { AppCont } from './styled/components';
import { Header } from 'widgets/components';

function App() {
  return (
    <Provider store={store}>
      <AppCont>
        <Header />
        <MainPage />
      </AppCont>
    </Provider>
  );
}

export default App;
