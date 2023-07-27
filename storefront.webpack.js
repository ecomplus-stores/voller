// storefront.webpack.js
const path = require('path')

const dirSearchAlias = path.resolve(__dirname, 'template/js/lib/search-engine')
const pathDslAlias = path.resolve(dirSearchAlias, 'dsl')

module.exports = () => ({
  resolve: {
    alias: {
      './methods/set-search-term': path.resolve(dirSearchAlias, 'set-search-term'),
      './html/PaymentOption.html': path.resolve(__dirname, 'template/js/custom-js/html/PaymentOption.html'),
      './js/PaymentOption.js': path.resolve(__dirname, 'template/js/custom-js/js/PaymentOption.js'),
      './base-config': path.resolve(__dirname, 'template/js/netlify-cms/base-config')
      //'./js/SearchEngine.js': path.resolve(__dirname, 'template/js/custom-js/js/SearchEngine.js')
      //'./js/Checkout.js': path.resolve(__dirname, 'template/js/views/js/Checkout.js')
    }
  }
})
