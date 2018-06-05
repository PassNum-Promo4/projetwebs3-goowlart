const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

//Schem c'est comme les champs de données de ma base de données
const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true, //definido como obrigatorio
  },
  description: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  }],
  createdAt: {
    type: Date, //por defeiuto o momento em que ela for criada
    default: Date.now,
  },
});


const Project = mongoose.model('Project', ProjectSchema); //definir o model

module.exports = Project; //export do model
