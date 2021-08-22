<template>
    <div class="not-found">
      <h1> 404 </h1>
      <p>Oops! Page not Found</p>
      <button @click="inicio" class="btn btn-light " >Volver a Inicio</button>
      
    </div>
</template>

<script>
export default {
  name: 'Error',
  methods: {
    inicio(){
      this.$router.push('/')
    }
  },
}
</script>

<style>
.not-found{
    text-align:center;
    color: white;
    background-color: black; 
    opacity: 0.8; 
    margin-top: 5%; 
    padding: 30px;
}

body{
    background-image: url(https://www.eneba.com/blog/wp-content/uploads/2019/04/Sekiro-guide.jpg);
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
}
.btn{
  display:block;
  margin-left: auto;
  margin-right: auto;
  color: white;
  background: transparent;
}
</style>