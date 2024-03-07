import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";

import { AboutMe } from "./components/AboutMe";
import { Resumen } from "./components/Resumen";
import { Portfolio } from "./components/Portfolio";
import { Contacts } from "./components/Contacts";
import { Translate } from "./components/Translate";

export const CompleteInformation = () => {

  return (
    <div className=" w-full lg:w-[71%] bg-main-containers h-auto rounded-3xl p-8 pt-0 mt-0 ">
    <Router >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutMe />} />
          <Route path="/resumen" element={<Resumen />}/>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/translate" element={<Translate />} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
};
