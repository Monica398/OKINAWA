const API_URL=import.meta.env.VITRE_API_URL;

/**
===============================
INICIAR SESION
===============================
*/
export async function login(email,password){
    const res= await fetch(`${API_URL}/usuarios/login`,{
        method:`POST`,
        headers:{"Content-Type":"application/json"}, 
        body:JSON.stringify({email,password}),
    })
const data = await res.json();
//Si el backend respondio con un error
if (!res.ok || !data.success) {
    throw new Error(data.message || "Error al iniciar sesión")
}
//si todo sale bien
return data.data.token;
}
/**
===============================
USUARIO LOGUEADO
===============================
*/

export async function getPerfil(token){
    const res = await fetch(`${API_URL}/usuarios/perfil`,{
headers:{Authorization:`Bearer ${token}`}, // se envia el token

    })

    const data=await res.json();

if(!res.ok || !data.success){
    throw new Error(data.message ||"Error al obtener el perfil")

}
return data.data; //se devuelve la informacion del usuario logueado

}
