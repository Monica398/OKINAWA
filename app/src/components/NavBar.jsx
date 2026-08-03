import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <header className="sticky top-0 z-50 border-b border-[#d8d1c7] bg-[#f4efe7]">
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">

                {/* Logo */}
                <div className="flex min-w-fit items-center gap-4">
                    <div className="text-4xl font-light text-[#c8655b]">
                        ✦
                    </div>

                    <div className="leading-none">
                        <h1 className="font-serif text-3xl font-bold tracking-wide text-[#171717]">
                            OKINAWA
                        </h1>

                        <p className="mt-2 text-[10px] font-semibold tracking-[0.45em] text-[#4b4b4b]">
                            TATTOO STUDIO
                        </p>
                    </div>
                </div>

                {/* Menú */}
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        className="relative rounded-none px-4 font-semibold text-[#222222] hover:bg-transparent hover:text-[#c8655b]"
                    >
                        Inicio
                        <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#c8655b]" />
                    </Button>

                    <Button
                        variant="ghost"
                        className="rounded-none px-4 font-semibold text-[#222222] hover:bg-transparent hover:text-[#c8655b]"
                    >
                        Artistas
                    </Button>

                    <Link to="/tattoos">
                        <Button
                            variant="ghost"
                            className="rounded-none px-4 font-semibold text-[#222222] hover:bg-transparent hover:text-[#c8655b]"
                        >
                            Tattoos
                        </Button>
                    </Link>

                    <Button
                        variant="ghost"
                        className="rounded-none px-4 font-semibold text-[#222222] hover:bg-transparent hover:text-[#c8655b]"
                    >
                        Nosotros
                    </Button>

                    <Button
                        variant="ghost"
                        className="rounded-none px-4 font-semibold text-[#222222] hover:bg-transparent hover:text-[#c8655b]"
                    >
                        <Link to="/login">
                            Registrarse
                        </Link>
                    </Button>
                </div>

                {/* Buscador y botón */}
                <div className="flex min-w-fit items-center gap-4">
                    <div className="relative">
                        <Input
                            placeholder="Buscar..."
                            className="h-10 w-64 rounded-full border-[#555555] bg-transparent px-5 pr-11 text-[#222222] placeholder:text-[#777777] focus-visible:ring-[#c8655b]"
                        />

                        <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#222222]" />
                    </div>

                    <Button
                        className="h-10 rounded-none bg-[#171717] px-4 text-sm font-semibold uppercase tracking-wide text-white hover:bg-[#333333]"
                    >
                        Reservar cita
                        {/*El plus es para que aparezcael + en reservar cita*/}
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>

            </nav>
        </header>
    );
}