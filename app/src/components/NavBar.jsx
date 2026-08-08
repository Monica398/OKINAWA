import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <header className="sticky top-0 z-50 border-b border-[#d8d1c7] bg-[#f4efe7]">
            <nav className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-6 py-4">

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
                <div className="flex items-center gap-1">

                    <Link to="/">
                        <Button
                            variant="ghost"
                            className="relative rounded-none px-3 text-sm font-semibold text-[#222222] hover:bg-transparent hover:text-[#c8655b]"
                        >
                            Inicio
                            <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#c8655b]" />
                        </Button>
                    </Link>

                    <Link to="/tattoos">
                        <Button
                            variant="ghost"
                            className="rounded-none px-3 text-sm font-semibold text-[#222222] hover:bg-transparent hover:text-[#c8655b]"
                        >
                            Servicios
                        </Button>
                    </Link>

                    <Link to="/adicionales">
                        <Button
                            variant="ghost"
                            className="rounded-none px-3 text-sm font-semibold text-[#222222] hover:bg-transparent hover:text-[#c8655b]"
                        >
                            Adicionales
                        </Button>
                    </Link>

                    <Link to="/empleados">
                        <Button
                            variant="ghost"
                            className="rounded-none px-3 text-sm font-semibold text-[#222222] hover:bg-transparent hover:text-[#c8655b]"
                        >
                            Empleados
                        </Button>
                    </Link>

                    <Link to="/citas">
                        <Button
                            variant="ghost"
                            className="rounded-none px-3 text-sm font-semibold text-[#222222] hover:bg-transparent hover:text-[#c8655b]"
                        >
                            Citas
                        </Button>
                    </Link>

                    <Link to="/horarios">
                        <Button
                            variant="ghost"
                            className="rounded-none px-3 text-sm font-semibold text-[#222222] hover:bg-transparent hover:text-[#c8655b]"
                        >
                            Horarios
                        </Button>
                    </Link>

                    <Link to="/restricciones">
                        <Button
                            variant="ghost"
                            className="rounded-none px-3 text-sm font-semibold text-[#222222] hover:bg-transparent hover:text-[#c8655b]"
                        >
                            Restricciones
                        </Button>
                    </Link>

                    <Link to="/agenda">
                        <Button
                            variant="ghost"
                            className="rounded-none px-3 text-sm font-semibold text-[#222222] hover:bg-transparent hover:text-[#c8655b]"
                        >
                            Agenda diaria
                        </Button>
                    </Link>

                    <Button
                        variant="ghost"
                        className="rounded-none px-4 font-semibold text-[#222222] hover:bg-transparent hover:text-[#c8655b]"
                    >
                        <Link to="/login">
                            Registrarse
                        </Link>
                    </Button>

                    <Link to="/perfil">
                        <Button
                            variant="ghost"
                            className="rounded-none px-3 text-sm font-semibold text-[#222222] hover:bg-transparent hover:text-[#c8655b]"
                        >
                            Perfil
                        </Button>
                    </Link>

                    <Button
                        variant="ghost"
                        className="rounded-none px-3 text-sm font-semibold text-[#222222] hover:bg-transparent hover:text-[#c8655b]"
                    >
                        Cerrar sesión
                    </Button>

                </div>
            </nav>
        </header>
    );
}