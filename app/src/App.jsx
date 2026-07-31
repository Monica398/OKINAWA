import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f2eb]">
      <NavBar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
{/*import Login from './pages/login'
function App(){
return<Login/>
}
export default App*/}