import mongoose from 'mongoose';

const eVCLdetailSchema = new mongoose.Schema(
  {
    headid: { type: String, required: true },
    horanow: { type: String, required: true },
    codigo: { type: Number, required: true },
    fabricalatas: { type: String, required: true },
    cabeza1: { type: String, required: true },
    cabeza2: { type: String, required: true },
    cabeza3: { type: String, required: true },
    cabeza4: { type: String, required: true },
    cabeza5: { type: String, required: true },
    cabeza6: { type: String, required: true },
    danos: { type: String, required: true },
    estado: { type: String, required: true },
    aceptacion: { type: String, required: true },
    observaciones: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const EVCLdetail =
  mongoose.models.EVCLdetail || mongoose.model('EVCLdetail', eVCLdetailSchema);

export default EVCLdetail;
