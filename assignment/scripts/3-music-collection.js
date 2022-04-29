console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title,artist,yearPublished) {
    const album = {
        title: title,
        artist: artist,
        year: yearPublished,
    }
    collection.push(album);
    return album;
}//end addToCollection

//test addToCollection

console.log('running addToCollection');
console.log(addToCollection('Give it All', 'Rise Against', 2011));
console.log(`Show collection ${JSON.stringify(collection)} `);