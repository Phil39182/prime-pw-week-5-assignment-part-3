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

console.log(addToCollection('Siren Song of the Counter Culture', 'Rise Against', '2011'));
console.log(addToCollection('Tenacious D', 'Tenacious D', '2001'));
console.log(addToCollection('Stadium Arcadium', 'Red Hot Chili Peppers', '2006'));
console.log(addToCollection('Appeal to Reson', 'Rise Against', '2008'));
console.log(addToCollection('The Question', 'Emery', '2005'));
console.log(addToCollection('Fight With Tools', 'Flobots', '2008'));

console.log(collection);

//function to show number of albums in collection and list each album
function showCollection( collection ) {
    console.log('Number of Albums in Collection: ' + collection.length);
    for( let i = 0; i < collection.length; i++) {
        console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].year} `);
    }
}//end showCollection

console.log(`Running showCollection`);
console.log(`${showCollection(collection)}`);

function findByArtist( artistSearch ) {
    let results = [];
    for( let i = 0; i < collection.length; i++) {
        if ( collection[i].artist === artistSearch ) {
            //console.log('Artist Found')
            //console.log(collection[i]);
            results.push(collection[i]);
        }
    }
    return results;
}//end findByArtist

