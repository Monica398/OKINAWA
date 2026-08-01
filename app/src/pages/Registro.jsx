import { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

export default function Registro() {
  // Muestra u oculta la contraseña 
const [mostrarPassword, setMostrarPassword] = useState(false)

return (
    <div className="min-h-[calc(100vh-88px)] grid grid-cols-1 md:grid-cols-2 bg-[#F5F1EA]">

      {/* lado izquierdo */}
    <div className="hidden md:flex flex-col items-center justify-center p-12der-r border-black/10">
        <img
        src="/src/assets/casa.png"
        alt="Okinawa Tattoo Studio"
        className="max-w-sm"
        />
        <p className="font-serif text-2xl mt-8">Arte que se queda contigo.</p>
        <p className="text-center text-neutral-600 mt-2">
        Tatuajes con historia.<br />Hechos con intención en Okinawa.
        </p>
        </div>

      {/* lado derecho  */}
    <div className="flex flex-col justify-start pt-20x-8 md:px-20 py-12">

        {/* Titulo */}
    
        <h2 className="font-serif text-5xl mb-2">Crea tu cuenta</h2>


        {/* Formulario */}
        <form className="space-y-5 max-w-md">

          {/* Nombre */}
        <div className="space-y-2">
            <Label htmlFor="nombre" className="uppercase text-xs tracking-wide">
            Nombre
            </Label>
            <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <Input id="nombre" type="text" placeholder="María" className="pl-10" />
            </div>
        </div>

        {/* Primer y segundo apellido*/}
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
            <Label htmlFor="primerApellido" className="uppercase text-xs tracking-wide">
                Primer apellido
            </Label>
            <Input id="primerApellido" type="text" placeholder="López" />
            </div>
            <div className="space-y-2">
            <Label htmlFor="segundoApellido" className="uppercase text-xs tracking-wide">
                Segundo apellido
            </Label>
            <Input id="segundoApellido" type="text" placeholder="Mora" />
            </div>
        </div>

          {/* Correo */}
        <div className="space-y-2">
            <Label htmlFor="correo" className="uppercase text-xs tracking-wide">
            Correo electrónico
            </Label>
            <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <Input
                id="correo"
                type="email"
                placeholder="correo@ejemplo.com"
                className="pl-10"
            />
            </div>
        </div>

          {/* Teléfono */}
        <div className="space-y-2">
            <Label htmlFor="telefono" className="uppercase text-xs tracking-wide">
            Teléfono
            </Label>
            <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <Input
                id="telefono"
                type="tel"
                placeholder="8888-8888"
                className="pl-10"
            />
            </div>
        </div>

          {/* Contraseña */}
        <div className="space-y-2">
            <Label htmlFor="password" className="uppercase text-xs tracking-wide">
            Contraseña
            </Label>
            <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <Input
                id="password"
                type={mostrarPassword ? "text" : "password"}
                placeholder="Crea una contraseña"
                className="pl-10 pr-10"
            />
            <button
                type="button"
                onClick={() => setMostrarPassword(!mostrarPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
            >
                {mostrarPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
            </div>
        </div>

          {/* Confirmar contraseña */}
        <div className="space-y-2">
            <Label htmlFor="confirmarPassword" className="uppercase text-xs tracking-wide">
            Confirmar contraseña
            </Label>
            <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <Input
                id="confirmarPassword"
                type={mostrarPassword ? "text" : "password"}
                placeholder="Repite tu contraseña"
                className="pl-10"
            />
            </div>
        </div>

          {/* Botón de enviar */}
        <Button type="submit" className="w-full bg-black hover:bg-neutral-800 py-6 uppercase tracking-wide">
            Crear cuenta
        </Button>

          {/* Link a login */}
        <p className="text-center text-sm text-neutral-600">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="text-red-600 font-semibold hover:underline">
            Inicia sesión
            </Link> 
        </p>

        </form>
    </div>
    </div>
)
}