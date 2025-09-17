import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/layouts/Navbar';
import Sidebar from '@/layouts/Sidebar';
import Topbar from '@/layouts/Topbar';

//import Universities from '@/pages/Universities';
import Programs from '@/pages/programPage';
import Streams from '@/pages/streamPage';
//import Sections from './pages/Sections';
//import Subjects from './pages/Subjects';
//import ClassSettings from './pages/ClassSettings';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen  flex flex-col bg-background text-foreground">
        {/* Navbar at the top */}
        <Navbar />

        {/* Main content area */}
        <div className="flex flex-1 h-screen w-full">
          {/* Sidebar on the left */}
          <Sidebar />

          {/* Right side: Topbar + Main content */}
          <div className="flex-1 flex flex-col">
            <Topbar />
            <main className="p-6 flex-1 overflow-auto">
              <Routes>
                <Route
                  path="/"
                  element={
                    <h1 className="text-2xl font-bold">
                      Welcome to Admin Dashboard
                    </h1>
                  }
                />
                <Route path="/programs" element={<Programs />} />
                <Route path="/streams" element={<Streams />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
