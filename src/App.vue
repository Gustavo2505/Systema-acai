<template>
  <div id="app">
    <v-flex xs12 sm6 md3>
      <img src="https://www.oggisorvetes.com.br/images/acai.png" alt="avatar">

      <v-text-field color="white" placeholder="Usuário" autofocus="true"></v-text-field>

      <v-text-field
        :append-icon="show2 ? 'visibility' : 'visibility_off'"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'password' : 'text'"
        name="input-10-2"
        label="Senha"
        hint="Senha de 8 digitos"
        value
        class="input-group--focused"
        @click:append="show2 = !show2"
      ></v-text-field>
      <v-btn color="blue" 
      left 
      href="index.html"
      >Entrar</v-btn>
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
      password: "Password",
      rules: {
        required: value => !!value || "Digite a senha.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  }
};
</script>

<style>
#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

body {
  font-family: "lato", sans-serif;
  color: aliceblue;
background: #a8c0ff;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #3f2b96, #a8c0ff);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #3f2b96, #a8c0ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>
