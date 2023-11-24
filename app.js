$(document).ready(function() {
    var stackedit = new Stackedit();

    $('#markdown').on('input', function() {
        var markdownText = $(this).val();
        
        stackedit.openFile({
            name: 'Filename', // Optional
            content: {
                text: markdownText
            }
        });

        stackedit.on('fileChange', function(file) {
            $('#output').html(file.content.html);
        });
    });
});
