import type { StrapiApp } from "@strapi/strapi/admin";

const config = {
  locales: ["ru"],
};

const bootstrap = (app: StrapiApp) => {
  //console.log(app);
};

export default {
  config,
  bootstrap,
};
