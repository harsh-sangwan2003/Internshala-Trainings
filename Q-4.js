const fs = require('fs');

fs.readFile('file.txt', (err, data) => {

    if (err) {

        console.log("Error is: ", err);
        return;
    }

    const modifiedData = data.toString();

    fs.writeFile('output.txt', modifiedData, (err) => {

        if (err)
            console.log(err);

        else
            console.log("File created successfully.");
    })
})