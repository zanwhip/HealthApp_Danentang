import { Provider } from 'react-redux';
import AppNavigation from './src/navigations/AppNavigation';
import store from './src/redux/store/Store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
