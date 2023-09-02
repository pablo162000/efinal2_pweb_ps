import axios from "axios";

export const obtenerEstudiantesFachada = async (codigo, bodyProducto, valor) => {
    return await obtenerEstudiantes(codigo, bodyProducto, valor)
}


export const ingresarEstudianteFachada= async (bodyEstudiante, valor) => {
   await ingresarEstudiante(bodyEstudiante, valor)
}


const obtenerEstudiantes = async ( valor) => {
    const headers = {
        "Authorization": "Bearer "+ valor ,
        "Mensaje": "Valor1"
    }
    const data = await axios.get(`http://localhost:8081/API/V1.0/Inscripcion/estudiantes`,{headers:headers}).then(r => r.data);
    return data;
}

const ingresarEstudiante =async (bodyEstudiante, valor) => {

    const headers = {
        "Authorization": "Bearer "+ valor ,
        "Mensaje": "Valor1"
    }
    await axios.post(`http://localhost:8081/API/V1.0/Inscripcion/estudiantes`, bodyEstudiante, {headers:headers}).then(r => r.data);
    console.log("estudiante insertado")


}


