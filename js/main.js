// Init Flickity - Find out more at https://github.com/metafizzy/flickity
// =============================================================================
var galleryCount = 0;

$(".js-gallery").each(function () {
    $(this).attr("id", "gallery" + galleryCount);

    $('#gallery' + galleryCount).flickity({
      autoPlay: 5000,
      prevNextButtons: false,
      pageDots: true,
      wrapAround: true
    });

    galleryCount++;
});
