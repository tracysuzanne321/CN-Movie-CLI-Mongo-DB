const connection = require( "./db/connection" );
const yargs = require( "yargs" )
const addMovie = require( './utils/addMovie' )
const readMovie = require( './utils/readMovie' )
const updateMovie = require( './utils/updateMovie' )
const deleteMovie = require ('./utils/deleteMovie')


const app = async () => {
    try {
        switch ( process.argv[2] ) {
            case "add": {
                await connection( addMovie, {
                    title: yargs.argv.title,
                    actor: yargs.argv.actor,
                } );
                break;
            }
            case "read": {
                await connection( readMovie, {
                    title: yargs.argv.title,
                    actor: yargs.argv.actor,
                } );
                break;
            }
            case "update": {
                await connection( updateMovie, {
                    id: yargs.argv.id,
                    title: yargs.argv.title,
                    actor: yargs.argv.actor,
                } );
                break;
            }
            case "delete": {
                await connection( deleteMovie, {
                    id: yargs.argv.id,
                } );
                break;
            }
            default:
                break;
        }
        
    } catch ( console ) {
        console.log( error )
    }
};
app();