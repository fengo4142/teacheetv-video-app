<template>
  <v-app id="app">
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex text-xs-center>
            <router-view />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>


<style lang="scss">
* {
  text-decoration: none;
}

.cursor-pointer {
  cursor: pointer;
}

.white-text {
  color: #fff;
}
.divider {
  border: 1px solid rgba(255,255,255,0.20);
}
</style>
