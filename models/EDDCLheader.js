import mongoose from 'mongoose';

const eDDCLheaderSchema = new mongoose.Schema(
  {
    datenow: { type: String, required: true },
    tapadora: { type: Number, required: true },
    tipolata: { type: String, required: true },
    producto: { type: String, required: true },
    descripcion: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const EDDCLheader =
  mongoose.models.EDDCLheader ||
  mongoose.model('EDDCLheader', eDDCLheaderSchema);

export default EDDCLheader;
