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

    // Function to get OpenAI's response to the final transcript
    async function getOpenAIResponse(text, instructions) {
        const OPENAI_API_KEY = $('#api-key').val();
        if (text.length < 5 || !OPENAI_API_KEY) {
            return `<!-- Word Count: ${text.split(' ').length} -->\n${text}`;
            //return text;
        }

        const prompt = `${instructions}: ${text}`;
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }]
            })
        });

        const data = await response.json();
        return data.choices[0].message["content"];
    }

    // Event handler for the AI iterate button
    $('#ai-iterate').click(async function() {
        var text = $('#markdown').val();
        var instructions = $('#instructions').val();

        // Call OpenAI API
        var aiResponse = await getOpenAIResponse(text, instructions);
        
        // Update the markdown text area with the AI's output
        $('#markdown').val(aiResponse);

        // Update the StackEdit viewer
        stackedit.openFile({
            name: 'Filename',
            content: {
                text: aiResponse
            }
        });
    });
});
