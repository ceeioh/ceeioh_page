module.exports = {
    pwa: {
        workboxOptions: {
            skipWaiting: true
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/ceeioh_page/'
    : '/ceeioh_page/',
 
}