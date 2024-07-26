let sketchfabApi;
let eventListeners;

const playerSuccess = function (api) {
  sketchfabApi = api;
  sketchfabApi.start();

  const viewerready = sketchfabApi.addEventListener("viewerready", () => {
    initViewer().then(() => {});
  });

  const click = api.addEventListener(
    "click",
    (info) => {
      console.log("Click ==> ", info);
    },
    { pick: "fast" }
  );
  const camerastart = api.addEventListener("camerastart", () => {
    // console.log("camerastart");
  });
  const camerastop = api.addEventListener("camerastop", () => {});

  eventListeners = [viewerready, click, camerastart, camerastop];
};

const initViewer = function () {
  return new Promise(async (resolve) => {});
};

const destroyPlayer = () => {
  if (sketchfabApi) {
    for (const listener of eventListeners) {
      sketchfabApi.removeEventListener(listener);
    }
    sketchfabApi = null;
  }
};

const initPlayer = (client, sceneuid) => {
  //   console.log("init 3D");
  client.init(sceneuid, {
    success: playerSuccess,
    error: () => {
      //   console.log("viewer error");
    },
  });
};

export default {
  get api() {
    return sketchfabApi;
  },
  initPlayer,
  destroyPlayer,
};
