$(document).ready(function() {
    var stackedit = new Stackedit();

    // LaTeX formula you want to initialize the textarea with
    var initialContent = `
# Advanced Features of the AI Editor

Welcome to the AI Editor, a versatile tool designed to enhance your understanding of complex concepts. Below are examples of some of the advanced features you can use:
1. QC scoring based on rubric pasted in instructions
2. Recommendations to make content more readable
3. Custom processing based on instructions
Feel free to explore these features and more to enhance your learning and documentation experience!
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
