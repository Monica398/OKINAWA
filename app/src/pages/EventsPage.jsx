import { useEffect, useState } from "react"
import { EventList } from "../components/EventList"
import { getCategories } from "../services/categoryService"
import { getEvents } from "../services/eventService"

export function EventPage() {
    const [events, setEvents] = useState([])
    const [categories, setCategories] = useState([])
    const [search, setSearch] = useState("")
    const [categoryId, setCategoryId] = useState("")

    const [currentPage,setCurrentPage] = useState(1)
    const eventsPerPage = 6

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchEvents() {
            try {
                setLoading(true)
                const data = await getEvents()
                console.log(data)
                setEvents(data.data)
            } catch (error) {
                console.error("Error al cargar eventos", error)
                setError("Error al cargar eventos")
            } finally {
                setLoading(false)
            }
        }
        fetchEvents()
        async function fetchCategories() {
            try {
                // Nuevo: carga las categorías una sola vez al abrir la página.
                const data = await getCategories()
                setCategories(data.data)
            } catch (error) {
                console.error("Error al cargar categorías", error)
                setError("Error al cargar categorías")
            }
        }
        fetchCategories()
    }, [])

    // Nuevo: combina búsqueda por título y categoría en el frontend.
    const filteredEvents = events.filter((event) => {
        const matchesTitle = event.title
            .toLowerCase()
            .includes(search.toLowerCase())
        const matchesCategory =
            categoryId === "" ||
            event.categoryId === Number(categoryId)
        return matchesTitle && matchesCategory
    })
    //total paginas:calcular la cantidad total de paginas 
    const totalPages = Math.ceil(filteredEvents.length / eventsPerPage)

//cambia la busqueda y regresa automaticamente 
    function handleSearchChange(event){
        setSearch(event.target.value);
        setCurrentPage(1);
    }
    //Numeros de pagina
    const pageNUmbers=Array.from(
        {
            length:totalPages
        },
        (_,index)=>index+1)
    
    if (loading) return <p className="text-center text-gray-500">Cargando eventos...</p>
    if (error) return <p className="text-center text-red-500">{error}</p>
    if (filteredEvents.length === 0)  {
        return <p className="text-center text-gray-400">No hay eventos</p>

    }

    

    return (
        <section>
            <header className="flex items-center justify-between mb-4">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
                    Eventos
                    <span className="rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-bold text-blue-800 ring-1 ring-inset ring-blue-700/10">
                        {filteredEvents.length}
                    </span>
                </h2>
            </header>

            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                <input
                    type="text"
                    placeholder="Buscar evento..."
                    value={search}
                    onClick={()=> setCurrentPage(pagenumber)}
                    onChange={(event) => setSearch(event.target.value)}
                    className="w-full p2 border rounded-md mb-4"
                />
                <select
                    value={categoryId}
                    onChange={(event) => setCategoryId(event.target.value)}
                    className="w-full p2 border rounded-md mb-4"
                >
                    <option value="">Todas las categorías</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                    
                </select>
            </div>
            
            {filteredEvents.length === 0 ? (
                <p>No hay resultados</p>
            ) : (
                <>
                <EventList events={filteredEvents} />
                <nav className="flex justify-center items-center gap-2 mt-6"></nav>
                <button type="button">Anterior</button>
                {pageNUmbers.map((pNumber)=>(
                    <button
                    type="button"
                    className="px-3 py-2 border rounded-md"
                    key={pNumber}
                    >
                        {pNumber}
                    </button>
                ))}
                <button type="button">Siguietne</button>
                </>
                
                
            )}
        </section>
    )
}