import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Explore from "./Explore";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/create" element={<h1>Create Page</h1>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/community" element={<h1>Community Page</h1>} />
        <Route path="/stats" element={<h1>Stats Page</h1>} />
        {/* You can add more dropdown subpages later */}
      </Routes>
    </>
  );
}

export default App;
