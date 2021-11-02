const { MongoClient } = require( 'mongodb' );
require( 'dotenv' ).config();

const connection = async ( crudFunc, dataObj ) => {
    try {
        const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log( "successful connection" );
        const db = client.db( 'm29' );
        const collection = db.collection( 'movies' );
        await crudFunc( collection, dataObj );
        console.log( 'client closed' )
        

        client.close()
        
    } catch ( error ) {
        console.log( error );
    }
};



module.exports = connection;