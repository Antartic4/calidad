import { Schema, model, models } from 'mongoose';

const testSchema = new Schema({
  first: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Test = models.Test || model('Test', testSchema);

export default Test;
