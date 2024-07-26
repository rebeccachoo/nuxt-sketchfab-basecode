import { OnDemand } from "~/utils/on-demand";

export default defineNuxtPlugin((NuxtApp) => {
  const loader = new OnDemand(
    "https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js"
  );

  NuxtApp.provide("sketchfab", {
    render(el: HTMLIFrameElement, onLoaded: (client: any) => void) {
      loader.load(() => {
        const client = new (window as any).Sketchfab(el);
        onLoaded(client);
      });
    },
  });
});
