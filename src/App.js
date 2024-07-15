import { Routes,BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home' 
import About from './pages/About'
import Settings from './pages/Settings'
import Books from './pages/Books'
import Download from './pages/Download'
import Profile from './pages/Profile'
import Timetable from './pages/Timetable'
//import Attendance from './pages/Attendance'
import FileUploader from './pages/FileUploader'
import FileDownloader from './pages/FileDownloader'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/about' exact element={<About/>}></Route>
          <Route path='/settings' exact element={<Settings/>}></Route>
          <Route path='/books' exact element={<Books/>}></Route>
          <Route path='/download' exact element={<Download/>}></Route>
          <Route path='/profile' exact element={<Profile/>}></Route>
          <Route path='/timetable' exact element={<Timetable/>}></Route>
          <Route path='/fileuploader' exact element={<FileUploader/>}></Route>
          <Route path='/filedownloader' exact element={<FileDownloader/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

/*import './App.css';

import Header from './components/Header';
import MyDialogflowComponent from './components/MyDialogflowComponent';
import SlidingCardUpdates from './components/SlidingCardUpdates';

function App() {
  return (
    <div className="App">
      <Header />
      <MyDialogflowComponent/>
    </div>
  );
}

export default App;*/