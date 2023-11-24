$(document).ready(function() {
    var stackedit = new Stackedit();

    // Initialize StackEdit fileChange event listener
    stackedit.on('fileChange', function(file) {
        // Update the output area with the HTML content
        $('#output').html(file.content.html);
        // Update the textarea with the Markdown content
        $('#markdown').val(file.content.text);
    });

    $('#markdown').on('input', function() {
        var markdownText = $(this).val();
        
        // Open or update the file in StackEdit with the new Markdown content
        stackedit.openFile({
            name: 'Filename', // Optional
            content: {
                text: markdownText
            }
        });
    });
});
