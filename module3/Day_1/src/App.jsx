import { Route, Routes, useRoutes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import NewsDetail from "./pages/NewsDetail";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <HomePage /> },
        {
          path: "about",
          element: <AboutPage />,
          children: [{ path: "me", element: <h1>About Me</h1> }],
        },
        { path: "news", element: <NewsPage /> },
      ],
    },
    { path: "*", element: <h1>404 Not Found</h1> },
  ]);
  return (
    // <Routes>
    //   <Route path="/" element={<MainLayout />}>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/about" element={<AboutPage />}>
    //       <Route path="me" element={<h1>About Me</h1>} />
    //     </Route>
    //     <Route path="/news" element={<NewsPage />}></Route>
    //     <Route path="/news/:id" element={<NewsDetail />} />
    //     <Route path="*" element={<h1>404 Not Found</h1>} />
    //   </Route>
    // </Routes>
    <>{routes}</>
  );
}

export default App;
