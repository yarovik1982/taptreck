export const replaceQuotes = (text) => {
   return text.replace(/(['"])(.*?)\1/g, '«$2»')
}
