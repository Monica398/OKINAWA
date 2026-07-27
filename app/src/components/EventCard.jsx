import propTypes from "prop-types"

export function EventCard({ event }) {
    const URL = import.meta.env.VITE_IMAGE_URL;
    return (
        <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
            <div className="h-48 overflow-hidden">
                <img
                    src={`${URL}/${event.imageUrl}`}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>
            <div className="p-4">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {event.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                    <p>
                        <strong>Fecha:</strong> {event.date}
                    </p>
                    <p>
                        <strong>Lugar:</strong> {event.location}
                    </p>
                </div>
                <button
                    className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                >
                    Ver detalles
                </button>
            </div>
        </article>
    );
}

EventCard.propTypes={
    event: propTypes.shape({
        title:propTypes.string.isRequired,
        date: propTypes.string.isRequired,
        location: propTypes.string.isRequired,
        imageUrl:propTypes.string,
        category: propTypes.object.isRequired
    }).isRequired
}
