$(document).ready(function() {
    var stackedit = new Stackedit();

    // LaTeX formula you want to initialize the textarea with
    var initialContent = '$$\\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)$$';

    stackedit.on('fileChange', function(file) {
        $('#output').html(file.content.html);
        // Update the textarea with the original Markdown content
        $('#markdown').val(file.content.text);
    });

    // Set the initial content to the textarea
    $('#markdown').val(initialContent);

    // Open StackEdit with the initial content
    stackedit.openFile({
        name: 'Filename', // Optional
        content: {
            text: initialContent
        }
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
