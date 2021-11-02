const { ObjectId } = require( "bson" );
const { builtinModules } = require( "module" );

const updateMovie = async ( collection, dataObj ) => {
    try {
        const items = await collection.deleteOne({'_id': ObjectId(dataObj.id)})
        console.log(items)
    } catch ( error ) {
        console.log( error )
    }
};

module.exports = updateMovie;