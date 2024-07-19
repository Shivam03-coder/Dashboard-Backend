import { UserModel } from "../models/Usermodels.js";

const adminController = async (req, res) => {
  try {
    const admins = await UserModel.find({
      $or: [{ role: "admin" }, { role: "superadmin" }],
    }).select("-password");

    res.status(200).json({
      status: "success",
      data: {
        admins,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

export { adminController };
