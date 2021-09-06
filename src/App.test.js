import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import store from './store';


test('renders search for something', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/search for a movie or tv series .../i);
  expect(linkElement).toBeInTheDocument();
});
