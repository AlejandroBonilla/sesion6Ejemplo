<template>
    <div>
        <h1>Comentarios comida {{id}}</h1>
        <ol>
            <li>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti aperiam asperiores. Nostrum officia autem non, architecto beatae ipsam dolore aperiam magnam! Ullam dolor incidunt ad nam est quisquam accusamus.
                    Ipsum, quaerat non reiciendis maxime dicta incidunt quibusdam ex totam voluptatibus similique dignissimos natus unde? Earum aliquam explicabo modi provident distinctio nobis, obcaecati placeat at dolorem exercitationem optio debitis tempore!
                    Quas sint assumenda, quisquam unde est earum alias debitis architecto tempora commodi, quidem dicta illum magni nisi veniam et vero tempore suscipit! Optio facere, reiciendis deleniti blanditiis ab neque iusto.
                </p>
            </li>
            <li>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti aperiam asperiores. Nostrum officia autem non, architecto beatae ipsam dolore aperiam magnam! Ullam dolor incidunt ad nam est quisquam accusamus.
                    Ipsum, quaerat non reiciendis maxime dicta incidunt quibusdam ex totam voluptatibus similique dignissimos natus unde? Earum aliquam explicabo modi provident distinctio nobis, obcaecati placeat at dolorem exercitationem optio debitis tempore!
                    Quas sint assumenda, quisquam unde est earum alias debitis architecto tempora commodi, quidem dicta illum magni nisi veniam et vero tempore suscipit! Optio facere, reiciendis deleniti blanditiis ab neque iusto.
                </p>
            </li>
            <li>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti aperiam asperiores. Nostrum officia autem non, architecto beatae ipsam dolore aperiam magnam! Ullam dolor incidunt ad nam est quisquam accusamus.
                    Ipsum, quaerat non reiciendis maxime dicta incidunt quibusdam ex totam voluptatibus similique dignissimos natus unde? Earum aliquam explicabo modi provident distinctio nobis, obcaecati placeat at dolorem exercitationem optio debitis tempore!
                    Quas sint assumenda, quisquam unde est earum alias debitis architecto tempora commodi, quidem dicta illum magni nisi veniam et vero tempore suscipit! Optio facere, reiciendis deleniti blanditiis ab neque iusto.
                </p>
            </li>
        </ol>
        <router-link :to="{path:`/comidas/${id}`}">Volver</router-link>
    </div>
</template>

<script>
export default {
    name: 'food-comments',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        id(){
            return this.$route.params.id
        }
    },
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