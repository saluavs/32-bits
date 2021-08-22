<template>
    <div class="texto-principal">
        <h1 v-text="title"></h1>
        <h2 v-text="subtitle"></h2>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name: 'Inicio',
    data() {
        return {
            
        }
    },
        computed: {
        ...mapState(['title', 'subtitle']),
    },
}
</script>

<style>
h1, h2{
    text-align:center;
    color: white;
}

body{
    background-image: url(https://www.eneba.com/blog/wp-content/uploads/2019/04/Sekiro-guide.jpg);
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
}
.texto-principal{
    background-color: black; 
    opacity: 0.8; 
    margin-top: 5%; 
    padding: 30px;
}

</style>