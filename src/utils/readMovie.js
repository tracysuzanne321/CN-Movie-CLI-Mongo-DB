const { builtinModules } = require( "module" );

const readMovie = async ( collection, dataObj ) => {
    try {
        const items = await collection.find( {} ).toArray();
        console.log(items)
    } catch ( error ) {
        console.log( error )
    }
};

module.exports = readMovie;