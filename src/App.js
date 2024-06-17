import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ProductListingPage from "./pages/ProductListingPage";
import CartPage from "./pages/Cart";
import Header from "./components/Header";
import { SWRConfig } from "swr";

const swrConfig = {
  revalidateOnFocus: false,
  shouldRetryOnError: false,
  revalidateOnReconnect: true,
  fetcher: (url) => fetch(url).then((r) => r.json()),
};

function App() {
  return (
    <SWRConfig value={swrConfig}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Outlet />
              </>
            }
          >
            <Route index element={<ProductListingPage />} />
            <Route path="/carts" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SWRConfig>
  );
}

export default App;
