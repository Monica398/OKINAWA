import PropTypes from "prop-types";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

export function TattooCard({ service }) {
    const URL = import.meta.env.VITE_IMAGE_URL;

    function formatPrice(price) {
        return Number(price).toLocaleString("es-CR", {
            style: "currency",
            currency: "CRC",
            maximumFractionDigits: 0,
        });
    }

    return (
        <Card className="relative group overflow-hidden border-[#d8d1c7] bg-[#f8f3eb] text-[#171717] hover:border-[#c8655b]/50 hover:shadow-xl transition-all duration-300">

            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#c8655b]/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative h-48 w-full overflow-hidden">
                <img
                    src={`${URL}/${service.imagen}`}
                    alt={service.nombre}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <CardHeader className="pb-3">
                <CardTitle className="font-serif text-xl font-bold tracking-tight transition-colors group-hover:text-[#b74335]">
                    {service.nombre}
                </CardTitle>
            </CardHeader>

            <CardContent className="grid gap-3">
                <p className="min-h-12 text-sm leading-6 text-[#555555]">
                    {service.descripcion}
                </p>

                <div className="flex items-center justify-between border-t border-[#d8d1c7] pt-3">
                    <div className="flex items-center gap-2 text-sm text-[#555555]">
                        <Clock className="h-4 w-4 text-[#b74335]" />
                        <span>{service.duracionMinutos} minutos</span>
                    </div>

                    <span className="text-sm font-semibold">
                        Desde {formatPrice(service.precioBase)}
                    </span>
                </div>
            </CardContent>

            <CardFooter className="pt-3">
                <Button
                    variant="ghost"
                    className="group/btn w-full bg-[#efe7dc] text-[#b74335] transition-all duration-300 hover:bg-[#ead9cc] hover:text-[#842d28]"
                >
                    <span className="font-semibold">
                        Ver detalles
                    </span>

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </Button>
            </CardFooter>
        </Card>
    );
}

TattooCard.propTypes = {
    service: PropTypes.shape({
        id: PropTypes.number.isRequired,
        nombre: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        precioBase: PropTypes.string.isRequired,
        duracionMinutos: PropTypes.number.isRequired,
        imagen: PropTypes.string.isRequired,
    }).isRequired,
};