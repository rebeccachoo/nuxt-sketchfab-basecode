<script setup>
import { onMounted, ref } from "vue";
import player from "~/tools/sketchfab/player";

const viewerIframeRef = ref(null);

onMounted(() => {
  const nuxtApp = useNuxtApp();
  nuxtApp.$sketchfab.render(viewerIframeRef.value, (client) => {
    console.log("Sketchfab client loaded", client);
    const sceneUid = "c2fb3b0dbd4c4071bf9b4656ed41a432";
    // You can now use the client object to interact with the Sketchfab viewer
    player.initPlayer(client, sceneUid);
  });
});
</script>

<template>
  <div class="w-full h-full flex flex-row">
    <iframe
      ref="viewerIframeRef"
      class="w-[80%] h-full"
      allow="autoplay; fullscreen; accelerometer; gyroscope; xr-spatial-tracking"
    ></iframe>
    <div>
      <button>Red</button>
      <button>Blue</button>
    </div>
  </div>
</template>
