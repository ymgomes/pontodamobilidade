$(function() {

    $('.wsmenu-list li:last-child')
       .after('<li><span class="wsmenu-click"><i class="wsmenu-arrow icon angle down"></i></span><a href="/institucional/323/2684" class="item item-plataformas" title="Plataformas e Elevadores">Plataformas e Elevadores</a></li>');

	//$(".three.fields, .ui.form .three.fields > .fields, .ui.form .three.fields > .field").removeAttr("style")

	//$(".ui.form .fields .field .ui.input input, .ui.form .field .ui.input input").removeAttr('disabled');

/*
	 $('#checkoutRegister .cnpj_checkout').change(function(e){
 		alert('change'); 
   		e.stopImmediatePropagation();
   		$(this).off("blur");
 	});

	$('#checkoutRegister .cnpj_checkout').blur(function(e){

	   e.stopImmediatePropagation();
	   e.preventDefault();
	  alert('blur');
	});

*/

});

$('#MiniCartTitle').text(function(_, text) {
    return text.replace(/\(|\)/g, '');
});