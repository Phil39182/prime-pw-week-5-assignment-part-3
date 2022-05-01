console.log('***** Music Collection *****')

let collection = [];

function addToCollection (
    //input parameters
    title,artist,yearPublished,
    song0,song0Duration,
    song1,song1Duration,
    song2,song2Duration) {
    const album = {
        //input parameters entered into object 'album'
        title: title,
        artist: artist,
        year: yearPublished,
        tracks: [
            song0, song0Duration,
            song1, song1Duration,
            song2, song2Duration ]
    }
    //push album object into collection array
    collection.push(album);
    return album;
}//end addToCollection

//test addToCollection

console.log(addToCollection('Siren Song of the Counter Culture', 'Rise Against', '2011',
            'Paper Wings','3:43','Give it All','2:50','Swing Life Away','3:20'));
console.log(addToCollection('The Pick of Destiny', 'Tenacious D', '2006',
            'Kickapoo','4:14','Classico','0:58','Master Exploder','2:24'));
console.log(addToCollection('Stadium Arcadium', 'Red Hot Chili Peppers', '2006',
            'Dani California','4:42','Snow (Hey Oh)','5:34','Warlocks','3:25'));
console.log(addToCollection('Appeal to Reason', 'Rise Against', '2008',
            'Collapse','3:19','Re-Education','3:42','Savior','Savior','4:02'));
console.log(addToCollection('The Question', 'Emery', '2005',
            'Stydying Politics','3:30','Listening to Freddie Mercury','2:42','The Weakest','4:04'));
console.log(addToCollection('Fight With Tools', 'Flobots', '2008',
            'Stand Up','4:39','Handlebars','3:26','Rise','4:13'));

console.log(collection);

//function to show number of albums in collection and list each album
function showCollection( collection ) {
    console.log('Number of Albums in Collection: ' + collection.length);
    for( let i = 0; i < collection.length; i++) {
        console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].year} `);
        console.log(` ${collection[i].tracks[0]}: ${collection[i].tracks[1]}`);
        console.log(` ${collection[i].tracks[2]}: ${collection[i].tracks[3]}`);
        console.log(` ${collection[i].tracks[4]}: ${collection[i].tracks[5]}`);
    }
}//end showCollection

//Testing showCollection
console.log(`*****  Testing showCollection  *****`)

console.log(`${showCollection(collection)}`);

function findByArtist( artist ) {
    let findbyArtistresults = [];
    for( let i = 0; i < collection.length; i++) {
        //pushes album object to array if matched criteria
        if ( collection[i].artist === artist ) {
            findbyArtistresults.push(collection[i]);
        }
    }
    return findbyArtistresults;
}//end findByArtist

//Testing findByArtist
console.log(`*****  Testing findByArtist  *****`)
console.log(`Seaching for Rise Against, should return two albums`);
console.log( findByArtist('Rise Against') );
console.log(`Seaching for Eminem, should return empty array`);
console.log( findByArtist('Eminem') );
console.log(`Seaching for Flobots, should return one album`);
console.log( findByArtist('Flobots') );

//end test of findByArtist


function search ( artist,year ) {
    if (artist || year){
        //filters collection array by artist and year based on search parameters
        let searchResults = collection.filter((album) => {
        return album.artist === artist && album.year === year
    })
    return searchResults;
}
    else {
        //returns entire collection if no search parameters entered
        return showCollection(collection);
    }
}

console.log(`*****  Testing search  *****`)
console.log(`search for Tenacious D, 2006 should return The Pick of Destiny album info`)
console.log(search('Tenacious D','2006'));