$('#text-layout-properties').hide(); 
$('#shape-layout-properties').hide();

  // Make the dashboard widgets sortable Using jquery UI
  $('.connectedSortable').sortable({
    placeholder         : 'sort-highlight',
    connectWith         : '.connectedSortable',
    handle              : '.box-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex              : 999999
  });
  $('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');

 // jQuery UI sortable for the todo list
  var sorted = $('.todo-list').sortable({
    placeholder         : 'sort-highlight',
    handle              : '.handle',
    forcePlaceholderSize: true,
    zIndex              : 999999
  });
  console.log(sorted);

  $('.layout-item').on('click', function(e) {
	  this.togg
  })

  $(".layout-item").click(function(){
	  $(".layout-item").removeClass("active-layout");
	$(this).toggleClass("active-layout");
	var type = $(this).attr('layoutType');
	if(type == 'image') {
		$('#text-layout-properties').hide();
		$('#image-layout-properties').show();
		$('#shape-layout-properties').hide();
	} else if (type == 'text') {
		$('#text-layout-properties').show();
		$('#image-layout-properties').hide();
		$('#shape-layout-properties').hide();
	} else if (type == 'shape') {
		$('#text-layout-properties').hide();
		$('#image-layout-properties').hide();
		$('#shape-layout-properties').show();
	}
  });
/* BOOTSTRAP SLIDER */
$('.slider').bootstrapSlider();

//Initialize Select2 Elements
$('.select2').select2();

//color picker with addon
$('.my-colorpicker2').colorpicker()