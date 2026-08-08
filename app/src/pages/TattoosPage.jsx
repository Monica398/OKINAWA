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

const tattooNames = [
    "Acuarela",
    "Blackwork",
    "Fine Line",
    "Minimalista",
    "Neo Tribal",
    "Realismo",
];

const piercingNames = [
    "Septum",
    "Hélix",
    "Nostril",
];

export function TattoosPage() {
    const [services, setServices] = useState([]);

    const [category, setCategory] = useState("todos");
    const [selectedService, setSelectedService] = useState("");

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
                setError("Error al cargar los servicios");
            } finally {
                setLoading(false);
            }
        }

        fetchServices();
    }, []);

    function handleCategoryChange(value) {
        setCategory(value);

        // Limpia el servicio elegido cuando cambia la categoría
        setSelectedService("");
    }

    const categoryServices = services.filter((service) => {
        if (category === "todos") {
            return true;
        }

        if (category === "tatuajes") {
            return tattooNames.includes(service.nombre);
        }

        if (category === "piercings") {
            return piercingNames.includes(service.nombre);
        }

        return false;
    });

    const comboboxOptions = [
        {
            value: "todos",
            label:
                category === "todos"
                    ? "Todos los servicios"
                    : category === "tatuajes"
                        ? "Todos los tatuajes"
                        : "Todos los piercings",
        },

        ...categoryServices.map((service) => ({
            value: service.nombre,
            label: service.nombre,
        })),
    ];

    const filteredServices = categoryServices.filter((service) => {
        if (
            selectedService === "" ||
            selectedService === "todos"
        ) {
            return true;
        }

        return service.nombre === selectedService;
    });

    if (loading) {
        return (
            <p className="py-10 text-center text-gray-500">
                Cargando servicios...
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

                {/* Encabezado */}
                <div className="mb-10 text-center">
                    <h1 className="font-serif text-5xl font-bold text-[#171717]">
                        Nuestros servicios
                    </h1>

                    <div className="mt-4 flex items-center justify-center gap-2">
                        <span className="h-px w-10 bg-[#b74335]" />
                        <span className="h-3 w-3 rotate-45 bg-[#b74335]" />
                        <span className="h-px w-10 bg-[#b74335]" />
                    </div>

                    <p className="mt-4 text-sm text-[#555555]">
                        Explora los diferentes servicios que tenemos para ofrecerte.
                    </p>
                </div>

                {/* Filtros */}
                <div className="mb-8 flex flex-wrap items-center gap-4">

                    {/* Categoría */}
                    <Select
                        value={category}
                        onValueChange={handleCategoryChange}
                    >
                        <SelectTrigger className="w-72 border-[#cfc7bb] bg-transparent">
                            <SelectValue placeholder="Selecciona una categoría" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="todos">
                                Todos
                            </SelectItem>

                            <SelectItem value="tatuajes">
                                Tatuajes
                            </SelectItem>

                            <SelectItem value="piercings">
                                Piercings
                            </SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Servicio */}
                    <Combobox
                        items={comboboxOptions}
                        value={selectedService}
                        onValueChange={setSelectedService}
                    >
                        <ComboboxInput
                            placeholder={
                                category === "todos"
                                    ? "Seleccionar servicio"
                                    : category === "tatuajes"
                                        ? "Seleccionar tipo de tatuaje"
                                        : "Seleccionar tipo de piercing"
                            }
                            className="w-72 border-[#cfc7bb] bg-transparent"
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

                {/* Cards */}
                {filteredServices.length === 0 ? (
                    <p className="text-center text-gray-400">
                        No hay servicios disponibles
                    </p>
                ) : (
                    <TattooList services={filteredServices} />
                )}

            </div>
        </section>
    );
}