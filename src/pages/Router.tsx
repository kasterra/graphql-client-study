import { Route, BrowserRouter as ReactRouter, Routes } from "react-router-dom";
import Movie from "./Movie";
import Movies from "./Movies";

const Router = () => (
  <ReactRouter>
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/movies/:id" element={<Movie />} />
    </Routes>
  </ReactRouter>
);

export default Router;
