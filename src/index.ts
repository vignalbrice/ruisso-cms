

// ==== Export Strapi lifecycle ====
export default {
  register() { },

  async bootstrap({ strapi }: { strapi: any }) {
    strapi.log.info('🚀 Running App bootstrap…');
  },
};
