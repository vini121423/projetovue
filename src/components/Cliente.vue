<!--
   :value ou {{}} -> Data binding de leitura 
    <input type="text" :value="nome"/>

   v-model -> Data binding de alteração em tempo real 
    <input type="text" v-model="idade" />

    ° Props permite que passe dados para um componente

    ° Diretivas não são atributos presentes no HTML v-if v-for v-show v-model...
     -- V-show (oculta na página mas não destroi) V-if(Destroi a tag)


-->

<template>
  <!-- Adicionar divs para juntar várias tags-->
  <div>
    <h3>Cliente: {{ clientes.nome }}</h3>
    <p>Segue seus relátorios: {{ clientes.relatorio }}</p>
    <small>
      Seu contato <i>{{ clientes.email }}</i>
    </small>
    <button type="button" @click="clientes.email + 'SUBMIT' " id="button">Enviar E-mail</button>
 
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    clientes: Object,
    contato: Boolean,
  },
  methods:{
    alterarNome: function(){

    }
  }
};
</script>


<!-- Scoped: Atribui o css somente para o componente-->
<style scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  color: cadetblue;

  text-align: center;
}

h3 {
  font-weight: bold;
}

#button{
  border-radius: 25px;
  background-color: aliceblue;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif !important;
}
</style>