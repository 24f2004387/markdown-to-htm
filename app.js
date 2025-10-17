document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#markdown-input');
    const output = document.querySelector('#markdown-output');

    input.addEventListener('input', () => {
        const markdownText = input.value;
        output.innerHTML = marked(markdownText);
        const codeBlocks = output.querySelectorAll('pre code');
        codeBlocks.forEach((block) => {
            hljs.highlightElement(block);
        });
    });
});