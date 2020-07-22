module.exports = () => ({
    map: process.env.NODE_ENV === 'development',
    plugins: {
        stylelint: process.env.NODE_ENV === 'development' ? {} : false,
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-normalize': {},
        'postcss-preset-env': {
            stage: 1,
            importFrom: 'src/assets/styles/utilities/media.css',
        },
        'postcss-reporter': {clearReportedMessages: true},
        cssnano: process.env.NODE_ENV === 'production',
    },
});
