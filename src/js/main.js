function gotoId(id){
    let heightOfNav = 0;
    if($('.acc-header').length){
        heightOfNav = $('.acc-header').outerHeight(true);
    }
    if($("#"+id).length === 1)
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#"+id).offset().top - heightOfNav,
        }, 1000);
}
function playPause(video) { 
    if (video.paused) 
        video.play(); 
    else 
        video.pause(); 
} 
function submitData(formName){
    let valid = true;
    // console.log("22222")
    $("#"+formName+" :input[required]").each(function(){
      var input = $(this); 
      // console.log(input)
      if ($(this).is(':invalid') || !$(this).val()){
        valid = false;
        $(this).addClass('error').focus();
        $(this).parent().addClass('error');
        // $(this).parent().siblings('.invalid').show()
        // console.log(valid)
      }
    });
    if(valid) {
      console.log("form valid")
      // $('#thankpop').popup('show');
      // $("#formCotainer").toggle();
    }
  }
export { gotoId, playPause, submitData}
