import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { Header } from './components/header/header';
import { HomePage } from './pages/home-page';
import { Provider } from 'react-redux'
import { store } from './redux'
import { ProductPage } from './pages/product-page';
import { OrderPage } from './components/order-page';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:title" element={<ProductPage />} />
            <Route path="/order" element={<OrderPage />} />

          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
