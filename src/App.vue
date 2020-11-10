<template>
  <div>
    <h1>Cadastrar Cliente</h1>
    <input type="text" placeholder="Nome" v-model="nomeF" />
    <p v-show="erro">Campo inválido, insira mais caracteres</p>
    <input type="email" placeholder="E-mail" v-model="emailF" />
    <input type="text" placeholder="Relatório" v-model="relaF" />
    <button @click="cadastrarCliente" type="button">Enviar</button>
    <h2>Bem vindo ao VueJs</h2>
    <div id="div" v-for="cliente in listaClientes" :key="cliente.id">
      <Cliente :clientes="cliente" />
    </div>
  </div>
</template>

<script>
import Cliente from "./components/Cliente.vue";

export default {
  name: "App",
  data() {
    return {
      erro:false,
      nomeF: "",
      emailF: "",
      relaF: "",
      cliente: {
        nome: "Vinicius",
        email: "vinicius@vini.com",
        relatorio: "Atividade VueJs 10/11",
      },
      listaClientes: [
        {
          id: 1,
          nome: "Vinicius",
          email: "vinicius@vini.com",
          relatorio: "Atividade VueJs 10/11",
        },
        {
          id: 2,
          nome: "Lucas",
          email: "lucas@lucas.com",
          relatorio: "Mostrar as atividades VueJs 10/11",
        },
        {
          id: 3,
          nome: "Leonardo",
          email: "leonardo@leo.com",
          relatorio: "Ajustar o tamamho dos botões",
        },
      ],
    };
  },
  components: {
    Cliente,
  },
  methods: {
    cadastrarCliente: function () {
      if (this.nomeF.length > 3) {
        this.erro = false;
        this.listaClientes.push({
          nome: this.nomeF,
          email: this.emailF,
          relatorio: this.relaF,
        });

        this.nomeF = "";
        this.emailF = "";
        this.relaF = "";
      } else {
        this.erro = true;
      }
    },
  },
};
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  color: cadetblue;

  text-align: center;
}
#div {
  background-color: ghostwhite;
  border-radius: 20px;
  margin: 5px;
  border: 1px solid black;
}
</style>
