import { NavBar } from "@/components/NavBar";
import { HomePage } from "@/pages/HomePage";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f2eb]">
      <NavBar />

      <main className="flex-1">
        <HomePage />
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