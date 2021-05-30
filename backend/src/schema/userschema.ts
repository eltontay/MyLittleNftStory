import { model, Schema, set } from "mongoose";
import bcrypt from "bcryptjs";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<User>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  if (this.isModified("password") || this.isNew) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
  }
});

set('useCreateIndex', true);
export const UserModel = model<User>("User", UserSchema);
