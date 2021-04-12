import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';

const models = [Aluno];

// criando conexao db
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
