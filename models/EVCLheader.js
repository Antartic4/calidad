import mongoose from 'mongoose';

const eVCLheaderSchema = new mongoose.Schema(
  {
    datenow: { type: String, required: true },
    tipolata: { type: String, required: true },
    producto: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const EVCLheader =
  mongoose.models.EVCLheader || mongoose.model('EVCLheader', eVCLheaderSchema);

export default EVCLheader;
