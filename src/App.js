import Home from "./routes/home/home.component";

import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/singIn/signIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sing-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
