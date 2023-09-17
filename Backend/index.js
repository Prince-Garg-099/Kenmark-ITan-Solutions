const express = require('express');
const app = express();
const cors = require("cors");


const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'tododb',
    'PrinceGarg',
    'Pri8442@#',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const authRoutes = require('./Routes/Auth');
const tasksRoutes = require('./Routes/Taskss');

app.use('/api', authRoutes); // Define authentication routes
app.use('/api', tasksRoutes); // Define task-related routes

// Handle errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});