import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import estudio from "../assets/estudio.png";
import tatuando from "../assets/tatuando.jpg";

export function HomePage() {
    return (
        <main>

            {/* =======Primera sección=========== */}
            <section
                className="relative flex min-h-[750px] items-center bg-cover bg-center"
                style={{ backgroundImage: `url(${estudio})` }}
            >
                {/* Capa para oscurecer un poquito la imagen */}
                <div className="absolute inset-0 bg-black/35"></div>

                {/* Contenido */}
                <div className="relative z-10 mx-auto w-full max-w-7xl px-8 lg:px-16">
                    <div className="max-w-xl text-white">

                        <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-[#C8655B]">
                            TATUAJES CON IDENTIDAD
                        </p>

                        <h1 className="font-serif text-6xl leading-[0.9] md:text-7xl lg:text-8xl">
                            Arte que
                            <br />
                            se queda
                            <br />
                            contigo.
                        </h1>

                        <p className="mt-8 text-lg leading-relaxed text-white/90">
                            Tatuajes únicos, diseñados especialmente para ti.
                            <br />
                            Convierte tu idea en una obra de arte.
                        </p>

                        <div className="mt-10 flex items-center gap-10">

                            <Button className="h-14 rounded-none bg-[#171717] px-10 text-base font-semibold uppercase tracking-wide text-white hover:bg-[#333333]">
                                Reservar cita
                                <Plus className="ml-3 h-5 w-5" />
                            </Button>

                            <a
                                href="#artistas"
                                className="group flex items-center gap-3 text-base font-semibold uppercase tracking-wide text-white"
                            >
                                <span className="border-b border-white pb-1 transition-colors group-hover:border-[#C8655B] group-hover:text-[#C8655B]">
                                    Ver artistas
                                </span>

                                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                            </a>

                        </div>
                    </div>
                </div>
            </section>

            {/* =============Segunda sección==============*/}
            <section className="grid min-h-[560px] grid-cols-1 bg-[#F4EFE7] lg:grid-cols-2">

                {/* Imagen */}
                <img
                    src={tatuando}
                    alt="..."
                    className="h-[500px] w-full object-cover object-top"
                />

                {/* Texto */}
                <div className="flex items-center px-8 py-8 lg:px-20">
                    <div className="max-w-xl">

                        <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#171717]">
                            OKINAWA
                        </p>

                        <h2 className="font-serif text-5xl leading-[0.95] text-[#171717] md:text-6xl">
                            Más que tinta,
                            <br />
                            <span className="italic">es una historia.</span>
                        </h2>

                        <p className="mt-10 text-lg leading-relaxed text-[#292929]">
                            Creemos que cada tatuaje tiene una historia, un recuerdo
                            y un momento que no se desea olvidar. Por eso cada diseño
                            es único.
                        </p>

                        <p className="mt-7 text-lg leading-relaxed text-[#292929]">
                            OKINAWA es un espacio creativo, honesto y real, donde la
                            piel se convierte en un lienzo
                        </p>

                    </div>
                </div>

            </section>

        </main>
    );
}