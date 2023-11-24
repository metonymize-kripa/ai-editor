$(document).ready(function() {
    var stackedit = new Stackedit();

    // LaTeX formula you want to initialize the textarea with
    var initialContent = '$$\\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)$$';

    // Initialize StackEdit fileChange event listener
    stackedit.on('fileChange', function(file) {
        // Update the output area with the HTML content
        $('#output').html(file.content.html);
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

    // Event handler for new input in the textarea
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
