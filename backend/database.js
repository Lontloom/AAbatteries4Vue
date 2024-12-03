const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "RfCqj3J73No4Mk6k8UTzRp5359MHYtdelfj4MSjrqp",
    database: "testWad",
    host: "localhost",
    port: "5432"
});

const execute = async(query) => {
    try {
        await pool.connect();
        await pool.query(query);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

execute(createTblQuery).then(result => {
    if (result) {
        console.log('Table "users" is created');
    }
});

module.exports = pool;