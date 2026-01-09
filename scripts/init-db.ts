import { pool } from '../lib/db/neon';
import fs from 'fs';
import path from 'path';

async function initDatabase() {
  console.log('🚀 Initializing database schema...');
  
  try {
    // Read schema file
    const schemaPath = path.join(process.cwd(), 'scripts', 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf-8');
    
    // Execute schema
    await pool.query(schema);
    
    console.log('✅ Database schema created successfully!');
    
    // Test connection
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Database connected:', result.rows[0]);
    
  } catch (error) {
    console.error('❌ Error initializing database:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

initDatabase();
