const { builtinModules } = require( "module" );

const addMovie = async ( collection, dataObj ) => {
    try {
        await collection.insertOne( dataObj );
        console.log( "sucessfully added movie" )
    } catch ( error ) {
        console.log( error )
    }
};

module.exports = addMovie;