<template>
    <div>
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
}

</style>