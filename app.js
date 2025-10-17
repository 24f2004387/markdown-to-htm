document.getElementById('convert-btn').addEventListener('click', function() {
    const markdownInput = document.getElementById('markdown-input').value;
    const htmlOutput = marked(markdownInput);
    document.getElementById('markdown-output').innerHTML = htmlOutput;
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
});