import { useEffect, useState } from "react";
import { TattooList } from "../components/TattooList";
import { getServices } from "../services/servicesService";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox";

const orderOptions = [
    {
        value: "menor",
        label: "Precio menor",
    },
    {
        value: "mayor",
        label: "Precio mayor",
    },
];

export function TattoosPage() {
    const [services, setServices] = useState([]);
    const [style, setStyle] = useState("todos");
    const [order, setOrder] = useState("");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchServices() {
            try {
                setLoading(true);
                setError(null);

                const data = await getServices();

                console.log(data);
                setServices(data.data);
            } catch (error) {
                console.error("Error al cargar servicios", error);
                setError("Error al cargar los tatuajes");
            } finally {
                setLoading(false);
            }
        }

        fetchServices();
    }, []);

    const filteredServices = services
        .filter((service) => {
            if (style === "todos") {
                return true;
            }

            return service.nombre === style;
        })
        .sort((a, b) => {
            if (order === "menor") {
                return Number(a.precioBase) - Number(b.precioBase);
            }

            if (order === "mayor") {
                return Number(b.precioBase) - Number(a.precioBase);
            }

            return 0;
        });

    if (loading) {
        return (
            <p className="py-10 text-center text-gray-500">
                Cargando tatuajes...
            </p>
        );
    }

    if (error) {
        return (
            <p className="py-10 text-center text-red-500">
                {error}
            </p>
        );
    }

    return (
        <section className="bg-[#f4efe7] px-6 py-12">
            <div className="mx-auto max-w-7xl">

                <div className="mb-10 text-center">
                    <h1 className="font-serif text-5xl font-bold text-[#171717]">
                        Nuestros tatuajes
                    </h1>

                    <div className="mt-4 flex items-center justify-center gap-2">
                        <span className="h-px w-10 bg-[#b74335]" />
                        <span className="h-3 w-3 rotate-45 bg-[#b74335]" />
                        <span className="h-px w-10 bg-[#b74335]" />
                    </div>

                    <p className="mt-4 text-sm text-[#555555]">
                        Explora los estilos de tatuajes que ofrecemos en Okinawa.
                    </p>
                </div>

                <div className="mb-8 flex items-center justify-between gap-4">

                    <Select
                        value={style}
                        onValueChange={setStyle}
                    >
                        <SelectTrigger className="w-72 border-[#cfc7bb] bg-transparent">
                            <SelectValue placeholder="Todos los estilos" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="todos">
                                Todos los estilos
                            </SelectItem>

                            {services.map((service) => (
                                <SelectItem
                                    key={service.id}
                                    value={service.nombre}
                                >
                                    {service.nombre}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Combobox
                        items={orderOptions}
                        value={order}
                        onValueChange={setOrder}
                    >
                        <ComboboxInput
                            placeholder="Ordenar por precio"
                            className="w-56 border-[#cfc7bb] bg-transparent"
                            showClear
                        />

                        <ComboboxContent>
                            <ComboboxEmpty>
                                No hay opciones
                            </ComboboxEmpty>

                            <ComboboxList>
                                {(option) => (
                                    <ComboboxItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </ComboboxItem>
                                )}
                            </ComboboxList>
                        </ComboboxContent>
                    </Combobox>

                </div>

                {filteredServices.length === 0 ? (
                    <p className="text-center text-gray-400">
                        No hay tatuajes disponibles
                    </p>
                ) : (
                    <TattooList services={filteredServices} />
                )}

            </div>
        </section>
    );
}