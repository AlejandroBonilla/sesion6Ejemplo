<template>
    <div>
        <h1>Nuestras comidas</h1>
        <div class="grid_food">
            <div v-for="i in 6" :key="i">
                <h3>Comidas {{i}}</h3>
                <a @click="redirectTo(i)">
                    <img :src="srcImage(i)" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'foods-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        srcImage(i){
            return require('@/assets/foods/'+i+'.jpeg')
        },
        redirectTo(i){
           this.$router.push('/comidas/'+i)
        }
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .grid_food{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    img{
        width:300px;
        height: 300px;
    }
</style>