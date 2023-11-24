$(document).ready(function() {
    var stackedit = new Stackedit();

    stackedit.on('fileChange', function(file) {
        var outputDiv = $('#output');
        outputDiv.html(file.content.html);
        // Re-process the mathematical formulas in the output
        MathJax.typesetPromise([outputDiv.get(0)]).catch(function(err) {
            console.error('MathJax rendering error:', err);
        });
    });

    $('#markdown').on('input', function() {
        var markdownText = $(this).val();

        stackedit.openFile({
            name: 'Filename', // Optional
            content: {
                text: markdownText
            }
        });
    });
});
