//JAVASCRIPT
window.addEventListener('load', function() {
    document.button.style.transition = 0
})


//JQUERY JS
$(document).ready(() => {
    $('.mainMediaLink').on('mouseenter', (event) => {
        $(event.currentTarget).addClass('hover-multimedia')
      }).on('mouseleave', (event) => {
        $(event.currentTarget).removeClass('hover-multimedia')
      });

      $('.product-item').on('mouseenter', (event) => {
        $(event.currentTarget).addClass('product-hover')
      }).on('mouseleave', (event) => {
        $(event.currentTarget).removeClass('product-hover')
      });
});

//VUE JS
const vue_app = Vue.createApp({
    created () {
          fetch('storedata.json').then(response => response.json()).then(json => {
                this.shop = json
          })
    },
    data() {
      return {
          // This holds your storedata.json data.
          shop: [],
    }
  },
    methods: {
        
    }
})

vue_app.mount("#vue_app")
