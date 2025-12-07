const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'stayshire_db',
    user: 'stayshire',
    password: 'stayshire123',
});

async function testConnection() {
    try {
        await client.connect();
        console.log('✅ Successfully connected to PostgreSQL!');
        const res = await client.query('SELECT version()');
        console.log('PostgreSQL version:', res.rows[0].version);
        await client.end();
        process.exit(0);
    } catch (err) {
        console.error('❌ Connection failed:', err.message);
        process.exit(1);
    }
}

testConnection();
