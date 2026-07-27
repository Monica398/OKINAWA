export function NavBar() {
    return (
        <header className="border-b border-black/30 bg-[#f2ede3]">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                <div>
                    <h1 className="font-serif text-2xl font-bold tracking-[0.20em]">
                        OKINAWA
                    </h1>

                    <p className="text-[10px] tracking-[0.35em]">
                        TATTOO STUDIO
                    </p>
                </div>

                <div className="flex items-center gap-8 text-sm">
                    <a
                        href="#inicio"
                        className="transition-colors hover:text-red-700"
                    >
                        Inicio
                    </a>

                    <a
                        href="#artistas"
                        className="transition-colors hover:text-red-700"
                    >
                        Artistas
                    </a>

                    <a
                        href="#tatuajes"
                        className="transition-colors hover:text-red-700"
                    >
                        Tattoos
                    </a>

                    <a
                        href="#nosotros"
                        className="transition-colors hover:text-red-700"
                    >
                        Nosotros
                    </a>
                </div>

                <button
                    type="button"
                    className="bg-black px-5 py-3 text-xs tracking-widest text-white transition-colors hover:bg-red-800"
                >
                    RESERVAR CITA
                </button>

            </nav>
        </header>
    );
}