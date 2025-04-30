var input = document.querySelectorAll('textarea')[0],
characterCount = document.querySelector('#characterCount'),
wordCount = document.querySelector('#wordCount'),
sentenceCount = document.querySelector('#sentenceCount'),
paragraphCount = document.querySelector('#paragraphCount'),
readingTime = document.querySelector('#readingTime'),
readability = document.querySelector('#readability'),
keywordsDiv = document.querySelectorAll('.keywords')[0],
topKeywords = document.querySelector('#topKeywords');

input.addEventListener('keyup', function() {
    console.clear();

    characterCount.innerHTML = input.value.length;

    const words = input.value.split(/\s+/).filter(word => word.length > 0);

    wordCount.innerHTML = words.length;

    const sentences = input.value.split(/[.!?]+/g).map(s => s.trim()).filter(s => s.length > 0);

    sentenceCount.innerHTML = sentences.length;

    const paragraphs = input.value.split(/\n+/).map(p => p.trim()).filter(p => p.length > 0);

    paragraphCount.innerHTML = paragraphs.length;
})