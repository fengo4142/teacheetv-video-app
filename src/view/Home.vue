<template>
  <div class="home pt-0 fill-height">
    <v-container class="px-5 h-100 home__container">
      <v-layout class="px-5 my-10">
        <v-flex text-xs-center class="d-flex">
          <div class="home__container-headline title-header">Teachee TV</div>
          <v-spacer />
          <div class="home__container-contact">rolandsong328@gmail.com</div>
        </v-flex>
      </v-layout>

      <v-divider class="my-5" />
      <v-layout class="justify-center home__container-main flex-column">
        <v-btn class="col-3 mx-auto primary" to="/call">JOIN</v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',

  data: () => ({
    
  }),
};
</script>

<style lang="scss" scoped>
.home__container {
  height: 100%;
  &-headline {
    font-size: 28px;
  }
  &-main {
    height: calc(100% - 150px);
    width: 100%;
  }
  &-contact {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}

</style>
