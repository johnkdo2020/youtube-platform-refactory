import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import AnalysisPage from './pages/AnalysisPage';
import ChannelDetailPage from './pages/ChangeDetailPage';
import ChannelListPage from './pages/ChannelListPage';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';
import VideoListPage from './pages/VideoListPage';
function App() {
    return (
        <div>
            {/* <Routes>
                <Route path="/" element={<PostListPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/@:username">
                    <Route index element={<PostListPage />} />
                    <Route path=":postId" element={<PostPage />} />
                </Route>
            </Routes> */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ChannelListPage />} />
                    <Route path="/video" element={<VideoListPage />} />
                    <Route path="/market" element={<PostListPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/analysis/:id" element={<ChannelDetailPage />}>
                        <Route path=":type" element={<AnalysisPage />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
