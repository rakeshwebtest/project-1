const config = {
    development: {
        cors: true,
        port: 8001,
        prefixApi: 'api',
        ormtype: {
            "type": "mysql",
            "host": "localhost",
            "port": 3306,
            "username": "root",
            "password": "the@123",
            "database": "nah",
            synchronize: true,
            entities: ['app/entities/*.entity{.ts,.js}'],
        },
    },
    production: {
        cors: false,
        port: 8001,
        ormtype: {
            type: 'mongodb',
            host: 'localhost',
            port: '27017',
            username: 'user',
            password: 'password',
            database: 'my-database',
            authSource: 'admin',
            synchronize: false,                       // <-- recommended by typeorm docs 
            entities: ['dist/app/entities/*.entity{.ts,.js}'], // <-- changed src directory to dist
        },
    },
};

const envConfig = config[process.env.NODE_ENV || 'development'];

export default envConfig;