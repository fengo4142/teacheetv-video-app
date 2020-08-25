<template>
   <div class="fill-height">
    <v-container class="px-5 h-100">
      <v-layout class="flex-start">
        <v-btn icon @click="backToHome()"><v-icon color="blue">mdi-arrow-left</v-icon></v-btn>
      </v-layout>
      <v-layout class="p-5 my-12 border-black justify-center">
        <v-card>
            <div class="canvas-holder">
                <div class="silhouette"></div>
                <video hidden id="webcam" width="640" height="480"></video>
                <canvas class="videoFeed" id="canvas" width="640" height="480"></canvas>
            </div>
            <v-card-title>Camera Status: {{ !isPlaying ? 'ON' : 'OFF'}}</v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon outlined v-show="!isPlaying" @click="toggle">
                <v-icon color="blue">mdi-pause</v-icon>
              </v-btn>
              <v-btn icon outlined v-show="isPlaying" @click="toggle">
                <v-icon color="blue">mdi-play</v-icon>
              </v-btn>
            </v-card-actions>
        </v-card>
      </v-layout>
      <v-layout class="p-5 flex-column">
        <h4>Comments</h4>
        <v-list three-line>
          <template v-for="(item, index) in comments">
            <v-divider :key="index" />
            <v-list-item
              :key="item.name"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
                <v-list-item-subtitle class="text--primary" v-text="item.email"></v-list-item-subtitle>
                <v-list-item-subtitle v-text="item.body"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-layout>
    </v-container>
   </div>
</template>

<script>

import axios from '../plugin/axios';
import StreamUtil from '../utils/streamUtil';
import { COMMENTS_URL } from '../utils/constants';

export default {
  name: 'Call',

  data: () => ({
    comments: [],
    isPlaying: false,
    webcam: null,
  }),

  methods: {
    toggle() {
      this.isPlaying = !this.isPlaying
      if (this.isPlaying) {
        this.webcam.stop()
      }
      else {
        this.webcam.init()
      }
    },
    backToHome() {
      this.webcam.stop()
      this.$router.push('/')
    }
  },

  mounted() {
    this.webcam = new StreamUtil("webcam", "canvas");

    axios.get(COMMENTS_URL).then(response => {
      this.comments = response.data;
      this.webcam.init()
    })
  }
}
</script>

<style scoped>
  .videoFeed {
    background: #000;
  }
</style>