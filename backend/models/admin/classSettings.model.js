import mongoose from 'mongoose';

const classSettingsSchema = new mongoose.Schema(
  {
    stream: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Stream',
      required: true,
    },
    classDuration: { type: Number, required: true },
    break: { start: String, end: String }, //13:00 - 13:30
    classDays: [
      { type: String, enum: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    ],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

const ClassSettings = mongoose.model('ClassSettings', classSettingsSchema);
export default ClassSettings;
