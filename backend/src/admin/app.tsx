import ru from "../admin/src/translations/ru.json"; // Там крайне много мусора

export default {
  config: {
    locales: ["ru"],
    translations: {
      ru: {
        ...ru,
      },
    },
  },

  bootstrap() {},
};
