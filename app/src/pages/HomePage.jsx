import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import estudio from "../assets/estudio.png";
import tatuando from "../assets/tatuando.jpg";
import Ren from "../assets/Ren.jpg";
import Hana from "../assets/Hana.jpg";
import Kai from "../assets/Kai.jpg";
import espacio from "../assets/espacio.png"

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

                            {/*++++++++No sirve temporalmente+++++++++*/}
                            <button
                                type="button"
                                onClick={() => {
                                    document.getElementById("artistas")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="group flex items-center gap-3 text-base font-semibold uppercase tracking-wide text-white">
                                <span className="border-b border-white pb-1 transition-colors group-hover:border-[#C8655B] group-hover:text-[#C8655B]">
                                    Ver artistas
                                </span>


                                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                            </button>


                        </div>
                    </div>
                </div>
            </section>

            {/* =============Segunda sección==============*/}
            <section className="grid  grid-cols-1 bg-[#F4EFE7] lg:grid-cols-2">

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

            {/* =======Tercera sección=========== */}

            {/* ++++++++Parte de lo que no sirve+++++++++ */}
            <section
                id="artistas"
                className="scroll-mt-28 bg-[#F4EFE7] px-6 py-16 lg:px-12"
            >
                {/* Encabezado */}
                <div className="mx-auto mb-8 flex max-w-7xl items-end justify-between gap-6">

                    <div>
                        <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#B6423C]">
                            Nuestros artistas
                        </p>

                        <h2 className="font-serif text-5xl leading-none text-[#171717] md:text-6xl">
                            Conoce a los artistas.
                        </h2>
                    </div>

                </div>

                {/* Tarjetas */}
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

                    {/* Artista 1 */}
                    <article className="overflow-hidden border border-[#D8D1C7] bg-[#F4EFE7]">

                        <img
                            src={Ren}
                            alt="Ren, artista de Okinawa"
                            className="h-[360px] w-full object-cover"
                        />

                        <div className="flex items-center justify-between px-5 py-4">

                            <div>
                                <h3 className="text-2xl font-bold uppercase text-[#171717]">
                                    Ren
                                </h3>

                                <p className="mt-1 text-sm text-[#292929]">
                                    Fine Line · Minimalismo
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Artista 2 */}
                    <article className="overflow-hidden border border-[#D8D1C7] bg-[#F4EFE7]">

                        <img
                            src={Hana}
                            alt="Hana, artista de Okinawa"
                            className="h-[360px] w-full object-cover"
                        />

                        <div className="flex items-center justify-between px-5 py-4">

                            <div>
                                <h3 className="text-2xl font-bold uppercase text-[#171717]">
                                    Hana
                                </h3>

                                <p className="mt-1 text-sm text-[#292929]">
                                    Floral · Black & Grey
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Artista 3 */}
                    <article className="overflow-hidden border border-[#D8D1C7] bg-[#F4EFE7]">

                        <img
                            src={Kai}
                            alt="Kai, artista de Okinawa"
                            className="h-[360px] w-full object-cover"
                        />

                        <div className="flex items-center justify-between px-5 py-4">

                            <div>
                                <h3 className="text-2xl font-bold uppercase text-[#171717]">
                                    Kai
                                </h3>

                                <p className="mt-1 text-sm text-[#292929]">
                                    Realismo · Japonés
                                </p>
                            </div>

                        </div>
                    </article>

                </div>
            </section>

            {/* ======= Cuarta sección ======= */}
            <section className="bg-[#F4EFE7] px-6 py-2 lg:px-12">
                <div className="mx-auto mb-10 max-w-7xl border-t border-[#D8D1C7]"></div>


                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

                    {/* Imagen */}
                    <div>
                        <img
                            src={espacio}
                            alt="Estudio Okinawa"
                            className="w-full rounded-lg object-cover"
                        />
                    </div>

                    {/* Información */}
                    <div>

                        <p className="mb-4 text-sm font-bold uppercase tracking-wide text-[#B6423C]">
                            VISITA NUESTRO ESTUDIO
                        </p>

                        <h2 className="mb-6 font-serif text-5xl leading-tight text-[#171717]">
                            Un espacio creado
                            <br />
                            para inspirar.
                        </h2>

                        <p className="mb-8 text-lg leading-relaxed text-[#292929]">
                            Diseñado para que te sientas cómodo,
                            seguro y en buenas manos.
                        </p>

                    </div>

                </div>

            </section>

        </main>
    );
}