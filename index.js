function caps(paragraph){
    const sentences = paragraph.split('.')
    const result = sentences.reduce( (paragraph, sentence) => {
        paragraph += (sentence.trim().slice(0, 1).toUpperCase() + sentence.trim().slice(1) + ". ");
        return paragraph;
     }, "")
    return result;
}