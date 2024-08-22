import { readDatabase } from './utils';
import { argv } from 'process'


async function main () {
    readDatabase(argv[2])
    .then((data) => {
        console.log(data)
    });
}

main()