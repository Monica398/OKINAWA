export function Hero() {
    return (
        <section
            id="inicio"
            className="mx-auto grid min-h-[650px] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2"
        >
            <div>
                <p className="mb-5 text-xs font-bold tracking-[0.3em] text-red-800">
                    TATUAJES CON IDENTIDAD
                </p>

                <h2 className="font-serif text-6xl leading-none md:text-7xl lg:text-8xl">
                    Arte que se queda contigo.
                </h2>

                <p className="mt-8 max-w-xl text-base leading-7 text-neutral-700">
                    Creamos piezas únicas inspiradas en tu historia, trabajadas
                    por artistas que convierten cada idea en algo permanente.
                </p>

                <div className="mt-8 flex items-center gap-6">
                    <button
                        type="button"
                        className="bg-black px-6 py-3 text-xs tracking-widest text-white transition-colors hover:bg-red-800"
                    >
                        RESERVAR CITA
                    </button>

                    <a
                        href="#artistas"
                        className="text-xs font-semibold tracking-widest transition-colors hover:text-red-800"
                    >
                        CONOCER ARTISTAS →
                    </a>
                </div>
            </div>

            <div className="flex min-h-[500px] items-center justify-center border border-black/20 bg-[#e8e0d4]">
                <p className="font-serif text-xl text-neutral-500">
                    Aquí irá la imagen principal
                </p>
            </div>
        </section>
    );
}