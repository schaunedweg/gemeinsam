const fs = require('fs')

function traverseDirectory(directoryPath) {
    const files = fs.readdirSync(directoryPath)

    const filePaths = []

    files.forEach((file) => {
        const filePath = directoryPath + '/' + file
        const stats = fs.statSync(filePath)

        if (!stats.isDirectory()) {
            filePaths.push(filePath) // output file path
        }
    })
    return filePaths
}

export { traverseDirectory }
