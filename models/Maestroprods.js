import mongoose from 'mongoose';

const maestroprodsSchema = new mongoose.Schema({
  material: { type: Number, required: true },
  materialptname: { type: String, required: true },
  tipolata: { type: String, required: true },
  descripcion: { type: String, required: true },
});

const Maestroprods =
  mongoose.models.Maestroprods ||
  mongoose.model('Maestroprods', maestroprodsSchema);

export default Maestroprods;
