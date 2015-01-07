$('#c_name').on('click', function(e){
    e.preventDefault();
    $('#main').load('creature-search');
});
$('#location').on('click', function(e){
    e.preventDefault();
    $('#main').html('<object data="location">');
    $('#main object').css('width', '1050px').css('height', '1650px');
});
$('#loc_count').on('click', function(e){
    e.preventDefault();
    $('#main').html('<object data="color">');
    $('#main object').css('width', '1600px').css('height', '1150px');
});