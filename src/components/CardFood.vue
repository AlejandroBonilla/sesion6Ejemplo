<template>
    <div>
        <h1>Comida {{id}}</h1>
        <img :src="src" alt="img">
    </div>
</template>

<script>
export default {
    name: 'card-food',
    props: {
        id:{
            type:String,
            required:true,
        },
        src:{
            type:String,
            required:true,
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>