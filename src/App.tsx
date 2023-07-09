import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Bar/Navbar";
import Sidebar from "./Bar/Sidebar";
import Home from "./pages/Home";
import Shorts from "./pages/Shorts";
import Trending from "./pages/Trending";
import SearchResults from "./pages/SearchResults";
import Video from "./pages/Video";
import ChannelDetails from "./pages/ChannelDetails";
import MusicPage from "./pages/MusicPage";
import GamingPage from "./pages/GamingPage";
import NewsPage from "./pages/NewsPage";
import SportPage from "./pages/SportPage";
import LearningPage from "./pages/LearningPage";
import FashionAndBeauty from "./pages/FashionAndBeautyPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        {/* pages */}
        <Route path="/" element={<Home />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/gaming" element={<GamingPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/sports" element={<SportPage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/fashion-and-beauty" element={<FashionAndBeauty />} />

        {/* Dynamic routes */}
        <Route path="/video/:id" element={<Video />} />
        <Route path="/results/:query" element={<SearchResults />} />
        <Route path="/channel/:channelId" element={<ChannelDetails />} />

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
