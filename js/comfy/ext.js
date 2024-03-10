import { app } from './comfy.js';
import { ComfyPetsStage } from '../game/stage.js';
import { ping } from '../apiClient.js';

/** @typedef {import('../../../web/types/comfy.js').ComfyExtension} ComfyExtension*/
/** @type {ComfyExtension} */
const ext = {
  name: "nathannlu.ComfyPets",

  // ComfyUI extension init
  init() {
    ping()
  },

  registerCustomNodes() {
    LiteGraph.registerNodeType(
      "ComfyPets",
      Object.assign(ComfyPetsStage, {
        title_mode: LiteGraph.NORMAL_TITLE,
        title: "Comfy Pet",
        collapsable: false,
      }),
    );
    ComfyPetsStage.category = "Pets";
  },
};

app.registerExtension(ext);

