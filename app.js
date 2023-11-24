$(document).ready(function() {
    var stackedit = new Stackedit();

    stackedit.on('fileChange', function(file) {
        $('#output').html(file.content.html);
        // Update the textarea with the original Markdown content
        $('#markdown').val(file.content.text);
    });

    $('#markdown').on('input', function() {
        var markdownText = $(this).val();
        
        stackedit.openFile({
            name: 'Filename',
            content: {
                text: markdownText
            }
        });
    });
});
