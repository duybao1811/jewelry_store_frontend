import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './views/Home/Home';
import Product from './views/Product/Product';
import Login from './views/RegisterLogin/Login';
import Register from './views/RegisterLogin/Register';
import News from './views/News/News';
import Cart from './views/Cart/Cart'
import Buy from './views/Buy/Buy'
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/danh-muc" element={<Product />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/gio-hang" element={<Cart />} />
          <Route path="thanh-toan" element={<Buy />} />
        </Routes>
      </Layout>

      <Routes>
        <Route path="/dang-ki" element={<Register />} />
        <Route path="/dang-nhap" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
