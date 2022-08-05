import $ from "jquery";

$(document).ready(function(){



    $('#exampleSelect').on('change', function(){
      
        var selectValor = $(this).val();
        $('#pai').children('div').hide();
    });
});
