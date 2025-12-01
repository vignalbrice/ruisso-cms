export default () => ({
  // Configuration i18n
  i18n: {
    enabled: true,
    config: {
      locales: ['fr', 'en'],
      defaultLocale: 'fr',
    },
  },

  // Configuration upload
  upload: {
    config: {
      provider: 'local',
      providerOptions: { sizeLimit: 10 * 1024 * 1024 },
    },
  },
});
