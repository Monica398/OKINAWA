import { useState } from 'react'
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom'

export default function Login() {
  //muestra y oculta la contraseña con el ojo
  const [mostrarPassword, setMostrarPassword] = useState(false)

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#F5F1EA]">

      {/* lado izquierdo*/}
      <div className="hidden md:flex flex-col items-center justify-center p-3 border-r border-black/10">
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

      {/* lado derecho */}
      <div className="flex flex-col justify-start pt-15 px-8 md:px-20 py-12">


        {/* Titulo */}
        <p className="text-red-600 text-sm font-semibold tracking-wide mb-2">
          Bienvenido de nuevo
        </p>
        <h2 className="font-serif text-5xl mb-2">Inicia sesión</h2>
        <p className="text-red-600 mb-5 "> reserva tu próxima obra de arte.</p>

        {/* formulario*/}
        <form className="space-y-6 max-w-md">

          {/* Campo Correo */}
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

          {/* Campo Contraseña */}
          <div className="space-y-2">
            <Label htmlFor="password" className="uppercase text-xs tracking-wide">
              Contraseña
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <Input
                id="password"
                type={mostrarPassword ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
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

          {/* Botón de enviar */}
          <Button type="submit" className="w-full bg-black hover:bg-neutral-800 py-6 uppercase tracking-wide">
            Iniciar sesión
          </Button>
        <p className="text-center text-sm text-neutral-600">
          ¿No tienes una cuenta?
          <Link to ="/registro" className="text-red-600 font-semibold hover:underline"> Regístrate aquí</Link>
        </p>
        </form>
      </div>
    </div>
  )
} 