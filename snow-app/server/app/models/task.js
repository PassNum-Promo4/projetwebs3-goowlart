const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

//Schem c'est comme les champs de données de ma base de données
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true, //definido como obrigatorio
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    require: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  completed: {
    type: Boolean,
    require: true,
    default: false,
  },
  createdAt: {
    type: Date, //por defeiuto o momento em que ela for criada
    default: Date.now,
  },
});


const Task = mongoose.model('Task', TaskSchema); //definir o model

module.exports = Task; //export do model
