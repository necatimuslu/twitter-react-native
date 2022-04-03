import { Provider } from "react-redux";
import AppNavigation from "./navigator";

import store from "./redux";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </>
  );
}
