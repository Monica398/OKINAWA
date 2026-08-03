import PropTypes from "prop-types";
import { TattooCard } from "./TattooCard";

export function TattooList({ services }) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
                <TattooCard
                    key={service.id}
                    service={service}
                />
            ))}
        </div>
    );
}

TattooList.propTypes = {
    services: PropTypes.array.isRequired,
};