/*
Example Usecase:
<div dangerouslySetInnerHTML={{ __html: makeUrlsClickable(this.state.content) }}>
 */
function makeUrlsClickable(text: String) {
    const urlRegex = /(http[s]?:\/\/[^\s<]+)/g;
    const transformedText = text.replace(urlRegex, '<a href="$&" target="_blank" rel="noopener noreferrer">$&</a>');
    return transformedText;
}

export default makeUrlsClickable;