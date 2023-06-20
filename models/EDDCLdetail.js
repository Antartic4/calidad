import mongoose from 'mongoose';

const eDDCLdetailSchema = new mongoose.Schema(
  {
    headid: { type: String, required: true },
    horanow: { type: String, required: true },
    codigo: { type: Number, required: true },
    cabeza: { type: Number, required: true },
    anchomin: { type: Number, required: true },
    anchomax: { type: Number, required: true },
    espesormin: { type: Number, required: true },
    espesormax: { type: Number, required: true },
    profundmin: { type: Number, required: true },
    profundmax: { type: Number, required: true },
    ganchocuerpomin: { type: Number, required: true },
    ganchocuerpomax: { type: Number, required: true },
    ganchotapamin: { type: Number, required: true },
    ganchotapamax: { type: Number, required: true },
    traslapemin: { type: Number, required: true },
    traslapemax: { type: Number, required: true },
    arrugas: { type: String, required: true },
    bandaimp: { type: String, required: true },
    fabricalatas: { type: String, required: true },
    observaciones: { type: String },
  },
  {
    timestamps: true,
  }
);

const EDDCLdetail =
  mongoose.models.EDDCLdetail ||
  mongoose.model('EDDCLdetail', eDDCLdetailSchema);

export default EDDCLdetail;
