jQuery(document).ready(function(){
$('.description').hide();


function hideDescriptions() {
	$('.description').hide();
};


function showDescription (id) {
   		var numberId = id.charAt(id.length - 1)
   		hideDescriptions();
      	$('#description'+ numberId).show();
}



	$('li').click(function () {
		var id = $(this).attr('id');
		showDescription(id);
		
	})


});





