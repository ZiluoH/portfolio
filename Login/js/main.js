$(document).ready(function() {
  $('#signuptab').click(function(){
    $('#signup').show();
    $('#signuptab').addClass('active')
    $('#login').hide();
    $('#logintab').removeClass('active')
  });
  $('#logintab').click(function(){
    $('#signup').hide();
    $('#signuptab').removeClass('active')
    $('#login').show();
    $('#logintab').addClass('active')
  })
})



$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

    if (e.type === 'keyup') {
      if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
      if( $this.val() === '' ) {
        label.removeClass('active highlight'); 
      } else {
        label.removeClass('highlight');   
      }   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
        label.removeClass('highlight'); 
      } 
      else if( $this.val() !== '' ) {
        label.addClass('highlight');
      }
    }

});
