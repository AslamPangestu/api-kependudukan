/**
 * Penduduk.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nik:{
      type:"string",
      unique:true,
      minLength:16,
      maxLength:16,
      notNull:true
    },
    name:{
      type:"string",
      notNull:true
    },
    gender:{
      type:"string",
      minLength:1,
      maxLength:1,
      notNull:true
    }
  }
};

