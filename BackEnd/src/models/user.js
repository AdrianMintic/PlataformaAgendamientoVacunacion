const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
   nombresyapellidos: {
       type: String,
       required: true, 
    },
   rol: {
      type: Number,
      required: true, 
   },
   usuario: {
      type: String,
      required: true, 
   },
   contraseña: {
    type: String,
    required: true, 
 },
   documento: {
      type: Number,
      required: true, 
   },
   age: {
      type: Number,
      required: true,  
    },
   HepatitisB: {
      type: Boolean,
      required: true,  
    },
   Pentavalente: {
      type: Boolean,
      required: true,  
    },
   BCG: {
      type: Boolean,
      required: true,  
    },
   Rotavirus: {
      type: Boolean,
      required: true,  
    },
   Polio: {
      type: Boolean,
      required: true,  
    },
   Neumococo: {
      type: Boolean,
      required: true,  
    },
   Influenzaestacional: {
      type: Boolean,
      required: true,  
    },
   SRP: {
      type: Boolean,
      required: true,  
    },
   Varicela: {
      type: Boolean,
      required: true,  
    },
   HepatitisA: {
      type: Boolean,
      required: true,  
    },
    FiebreAmarilla: {
      type: Boolean,
      required: true,  
    },
    email: {
        type: String,
        required: true,  
    }
});

module.exports = mongoose.model('User', userSchema);


