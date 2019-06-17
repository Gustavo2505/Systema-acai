<template>
  <div id="App">
    <img
      class="imagem"
      src="https://pngimage.net/wp-content/uploads/2018/06/logo-a%C3%A7a%C3%AD-png-5.png"
      alt="avatar"
    >

    <v-flex xs8 sm6 md3 class="value">
      <v-text-field label="Nome de usuário"></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'visibility' : 'visibility_off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Senha"
        hint="Digitando.."
        counter
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-btn class="btn" color="green" left
      to="menu">Entrar</v-btn>
    </v-flex>
  </div>
</template>



<script>
export default {
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      tile: false,
      password: "Password",
      rules: {
        required: value => !!value || "Required.",

        emailMatch: () => "The email and password you entered don't match"
      }
    };
  }
};
</script>
<style>
.btn {
  width: 30vh;
}
.imagem {
  width: 300px;
}
.value {
  width: 50vh;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.6rem;
}

body {
  background: #314755; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #26a0da,
    #314755
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #26a0da,
    #314755
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-family: "Lato", sans-serif;
}
</style>
