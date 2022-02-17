const readline = require('readline-sync')

function start(){
    const prefixes = ['Who is','What is','The history of']
    const content = {}
    
    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm(){
        return readline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix(){
        const selectedPrefixIndex = readline.keyInSelect(prefixes)

        return prefixes[selectedPrefixIndex]
    }

    console.log(content)
}

start()