<template>
  <div class="container">
    <form class="form">
      <p type="Codigo Token:">
        <input v-model="token" type="text" />
      </p>

      <p type="Nombre:">
        <input v-model="nombre" type="text" />
      </p>
      <p type="Apellido:">
        <input v-model="apellido" type="text" />
      </p>
      <p type="Cedula:">
        <input v-model="cedula" type="text" />
      </p>

      <button class="button" @click="guardarEstudiante">Guardar</button>
    </form>
  </div>
</template>
  
  <script>
import { ingresarEstudianteFachada } from "../helpers/Estudiante";
import { obtenerTokenFachada } from "../helpers/TokenCliente";

export default {
  data() {
    return {
      nombre: null,
      apellido: null,
      cedula: null,
      token: null,
    };
  },

  methods: {
    async guardarEstudiante() {
      const estudiante = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
      };
      const usuario = {
        username: "usuario",
        password: "123456",
      };

      let token = await obtenerTokenFachada(usuario);

      await ingresarEstudianteFachada(estudiante, token);
    },
  },
};
</script>
  
  
  <style scoped>
body {
  background-color: #233b5d;
}
.container {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  width: 340px;
  height: 450px;
  background: #1d6de4;
  border-radius: 8px;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  box-shadow: 0 0 40px -10px black;
  font-family: Georgia, Times, "Times New Roman", serif;
}

p::before {
  content: attr(type);
  display: block;
  margin: 5px 2px;
  font-size: 14px;
  color: #ffcf0f;
}

input {
  width: 100%;
  border: 0;
  border-bottom: 2px solid #ffcf0f;
  background: none;
}

::placeholder {
  color: #ffcf0f;
}
input:focus {
  border-bottom: 2px solid #d8dad4;
  outline: none;
}

button {
  width: auto;
  height: auto;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 2px;
  margin-bottom: 2px;

  background-color: #ffcf0f;

  font-size: 20px;
  border: 2px solid #000;
  border-radius: 5px;
}

button:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(28, 158, 110);
}
</style>