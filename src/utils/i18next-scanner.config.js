module.exports = {
  options: {
    debug: true,
    func: {
      list: ['t'],
      extensions: ['.js', '.vue'],
    },
    trans: {
      extensions: ['.js', '.vue'],
      fallbackKey: (ns, value) => {
        return value;
      },
    },
    lngs: ['en', 'ru'],
    ns: ['locale', 'resource'],
    defaultNs: 'resource',
    defaultValue: '__STRING_NOT_TRANSLATED__',
    resource: {
      loadPath: 'src/locales/{{lng}}/{{ns}}.json',
      savePath: 'src/locales/{{lng}}/{{ns}}.json',
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
};
