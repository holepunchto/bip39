// note all JSON files in this folder are generated with npm run generate-wordlist

module.exports = function wordList (language) {
  switch (language) {
    case 'chinese_simplified': return require('./chinese_simplified.json')
    case 'chinese_traditional': return require('./chinese_traditional.json')
    case 'czech': return require('./czech.json')
    case 'english': return require('./english.json')
    case 'french': return require('./french.json')
    case 'italian': return require('./italian.json')
    case 'japanese': return require('./japanese.json')
    case 'korean': return require('./korean.json')
    case 'portuguese': return require('./portuguese.json')
    case 'russian': return require('./russian.json')
    case 'spanish': return require('./spanish.json')
    case 'turkish': return require('./turkish.json')
  }

  throw new Error('Unknown language: ' + language)
}
