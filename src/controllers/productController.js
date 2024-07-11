import ProductsModel from "../models/productmodels";

const userControlller = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await ProductsModel.findById(id);
    if (!user) {
      return res.status(500).json({
        status: "failed",
        message: "Unable to find user",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

export default userControlller;
