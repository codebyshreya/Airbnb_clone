import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";
import appStore from "./appStore/appStore.js";

const Layout = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

export default Layout;
