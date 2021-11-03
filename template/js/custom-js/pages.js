// Add your custom JavaScript for storefront pages here.
window.$ecomConfig.set('default_img_size', 'zoom')
window.storefront.on('widget:@ecomplus/widget-minicart', function () {
  setTimeout(function () {
    const infoChange = document.querySelector('.info-additional')
    const buy = document.querySelector('.product__buy')
    buy.after(infoChange)
  }, 1000)
})
