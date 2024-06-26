import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		phoneNumber: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, default: true, required: true },
		resetLink: { type: String, default: "" },
		biography: { type: String, default: "Web Developer" },
		bookmarkedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
		likedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
	},
	{
		timestamps: true,
	},
);

userSchema.methods.toJSON = function () {
	var obj = this.toObject();
	delete obj.password;
	return obj;
};

export default mongoose.model("User", userSchema);
