import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já cadastrado.',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido.',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: {
            msg: 'Idade precisa ser numero inteiro.',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um numero.',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um numero.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.File, { foreignKey: 'aluno_id' });
  }
}
