import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: String,
  username_std: String, // normalized user name
  hash: String,
  roles: [String],
  disabled: { type: Boolean, default: false },
  validated: { type: Boolean, default: false },
  profile: {
    name: String,
    stdid: String,
    phone: String,
    email: String,
  },
});

UserSchema.methods.isContester = function () {
  return this.roles.indexOf('CONTESTER') !== -1;
};

UserSchema.methods.isAdmin = function () {
  return this.roles.indexOf('ADMIN') !== -1;
};

UserSchema.index({ username_std: 1 }, { unique: true });

mongoose.model('User', UserSchema);