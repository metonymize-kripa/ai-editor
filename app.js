$(document).ready(function() {
    var stackedit = new Stackedit();

    // LaTeX formula you want to initialize the textarea with
    var initialContent = `
# Advanced Features of the AI Editor

Welcome to the AI Editor, a versatile tool designed to enhance your understanding of complex concepts. Below are examples of some of the advanced Markdown features you can use:

## Mathematical Expressions

As previously mentioned, the editor can beautifully render mathematical expressions:

$$\\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)$$

## Code Blocks

For coding enthusiasts, the editor supports syntax-highlighted code blocks:

\`\`\`javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("World");
\`\`\`

## Tables

Organize data efficiently with tables:

| Syntax    | Description   | Test Text     |
| --------- | ------------- | ------------- |
| Header    | Title         | Here's this   |
| Paragraph | Text          | And more      |

## Lists

Create ordered and unordered lists:

1. First item
2. Second item
   - Subitem 1
   - Subitem 2
3. Third item

## Blockquotes

Use blockquotes for emphasis:

> “The only way to learn mathematics is to do mathematics.” – Paul Halmos

## Images

Embed images to add visual interest:

![Sample Image](https://example.com/sample-image.jpg)

## Hyperlinks

Include hyperlinks for additional resources:

[Click here for more information](https://example.com)

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
