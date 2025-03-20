//Do not come in this file and change anything unless you know Web-based Javascript or you are Jack Konar

//JAVASCRIPT
window.addEventListener('load', function() {
    document.button.style.transition = 0
})


//JQUERY JS
$(document).ready(() => {
    $('.year-in-review').on('mouseenter', (event) => {
        $(event.currentTarget).css('background-image', 'url(img/media/yirhover.png)')
      }).on('mouseleave', (event) => {
        $(event.currentTarget).css('background-image', 'url(img/media/yirimg.png)')
      });

    $('.practiceimg').on('mouseenter', (event) => {
        $(event.currentTarget).css('background-image', 'url(img/media/practicehover.png)')
      }).on('mouseleave', (event) => {
        $(event.currentTarget).css('background-image', 'url(img/media/practiceimg.png)')
      });
      
    $('.ddayimg').on('mouseenter', (event) => {
        $(event.currentTarget).css('background-image', 'url(img/media/ddayhover.png)')
      }).on('mouseleave', (event) => {
        $(event.currentTarget).css('background-image', 'url(img/media/ddayimg.png)')
      });

    $('.paypalButton').on('mouseenter', (event) => {
      $(event.currentTarget).removeClass('paypalButton').addClass('paypalButtonHover')
    }).on('mouseleave', (event) => {
      $(event.currentTarget).removeClass('paypalButtonHover').addClass('paypalButton')
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
          // This holds storedata.json data.
          shop: [],
    }
  },
    methods: {
        
    }
})

vue_app.mount("#vue_app")
