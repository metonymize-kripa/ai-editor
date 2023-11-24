$(document).ready(function() {
    var stackedit = new Stackedit();

    // LaTeX formula you want to initialize the textarea with
    var initialContent = `
# Welcome to the AI Editor

This editor is designed to help you explore and understand complex mathematical concepts with ease. One of the key features of this editor is its ability to handle and display mathematical expressions in a clear and visually appealing way.

For example, consider the following inequality, known as the Cauchy-Schwarz Inequality:

$$\\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)$$

This inequality is a fundamental result in linear algebra, and it plays a crucial role in various mathematical and scientific applications. With this editor, you can delve into such equations, manipulate them, and explore their implications in a user-friendly environment.

Feel free to experiment and learn more about the fascinating world of mathematics!
`;

    stackedit.on('fileChange', function(file) {
        $('#output').html(file.content.html);
        // Update the textarea with the original Markdown content
        $('#markdown').val(file.content.text);
    });

    // Set the initial content to the textarea
    $('#markdown').val(initialContent);
    
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
