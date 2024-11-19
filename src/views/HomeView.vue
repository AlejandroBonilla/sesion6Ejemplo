<template>
  <div class="container_grid">
    <div class="hero"></div>
    <div class="sectionParagraph">
      <h2>Bienvenido</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quis aliquam, ea, ab at, libero qui nam corporis mollitia ratione blanditiis eos laboriosam voluptate incidunt quo neque atque! Quae, labore!
        Eligendi doloribus ad, consequuntur ab assumenda, alias amet sed suscipit quod temporibus optio blanditiis. Iusto dolorem veritatis asperiores dolorum, saepe sunt odit commodi totam ratione nostrum amet possimus deleniti hic!
      </p>
    </div>
    <div>
      <h2>Nuestros productos</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, laborum nesciunt voluptate voluptatem doloribus possimus nulla placeat. Eos excepturi enim quas molestias tempora aut similique harum, et quam facilis! Hic.
        Fuga, maxime nostrum qui eius omnis a quibusdam cum recusandae iure accusamus modi repellendus ullam quaerat et provident officia non. Enim maiores debitis eveniet voluptatum dicta est hic sed modi!
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
  
  }
}
</script>

<style scoped>
  .container_grid{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows:40vh auto;
    grid-gap:20px;
    width:80%;
    margin:0 auto;
  }

  .hero{
    background-image:url("https://picsum.photos/id/686/1000/200");
    background-repeat:no-repeat;
    background-size: cover;
    grid-column:1/3;
    grid-row:1/2;
  }

</style>
