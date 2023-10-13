import { createConnection } from "mysql";

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

async function getNames() {
    return new Promise((resolve, reject) => {
        const connection = createConnection(config);
        connection.query(`select name from people;`, (error, results) => {
            if(error) {
                reject(error);
            }
            resolve(results.map(n => n.name));
        });
        connection.end();
    });
}

async function newName(name) {
    return new Promise((resolve, reject) => {
        const connection = createConnection(config);
        connection.query(`insert into people(name) values('${name}')`, (error, results) => {
            if(error) {
                reject(error);
            }
            resolve();
        });
        connection.end();
    });
}

export default { newName, getNames };