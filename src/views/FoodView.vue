<template>
    <div>
        <card-food :id="id" :src="src_image"></card-food>
        <router-link :to="{path:`/comidas/${id}/comentarios`}">Ver comentarios</router-link>
        <router-view></router-view>
    </div>
    
</template>

<script>
import CardFood from '@/components/CardFood.vue'
export default {
    name: 'food-view',
    // props: {},
    data: function(){
        return {
            src_image:'',
        }
    },
    computed: {
        id(){
            return this.$route.params.id
        }
    },
    //methods: {}
    // watch: {},
    components: {
        'card-food':CardFood
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.src_image = require(`@/assets/foods/${this.id}.jpeg`);
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>