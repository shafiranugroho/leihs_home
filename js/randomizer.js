(function($){
  $.randomizer = {
    defaults: {
      altTag: ['Banner Image manssss'],
      fadeInTime:1800,
      TheImages: ['cam1.png', 'cam2.png', 'cam3.png', 'cam4.png', 'cam5.png' ]
    }
  };

  $.fn.extend({
    randomizer:function(options) {
      $.extend({}, $.randomizer.defaults, options);
      return this.each(function() {
        var TheImages = options.TheImages;
        var RandomMath = Math.floor(Math.random()*TheImages.length);
        var SelectedImage = TheImages[RandomMath];
        var imgPath = options.path + SelectedImage;
        var altTag = options.altTag;
        // Fade in Times
        var fadeInTime = options.fadeInTime;
        //Fade In animation - hide first
        $(this).css('display', 'none').fadeIn(fadeInTime);
        if(options.cssBG == 'true'){
          $(this).css('background-image', 'url(' + imgPath + ')');
        } else{
          $(this).attr( {
            src: imgPath,
            alt: altTag
          });
        }
      });
    }
  });
})(jQuery);
