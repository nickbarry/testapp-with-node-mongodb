/**
 * Created by Nicholas on 1/6/2016.
 */
$(function(){
    $('#post-comment').hide();
    $('#btn-comment').on('click', function(event){
        event.preventDefault();

        $('#post-comment').show();
    });

    $('#btn-like').on('click', function(event){
        event.preventDefault();

        var imgId = $(this).data('id');

        $.post('/images/' + imgId + '/like').done(function(data){
            $('.likes-count').text(data.likes);
        })
    })
});