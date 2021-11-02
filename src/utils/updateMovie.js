const { ObjectId } = require( "bson" );
const { builtinModules } = require( "module" );

const updateMovie = async ( collection, dataObj ) => {
    try {
        const items = await collection.updateOne({'_id': ObjectId(dataObj.id)},{$set: {title:dataObj.title}})
        console.log(items)
    } catch ( error ) {
        console.log( error )
    }
};

module.exports = updateMovie;