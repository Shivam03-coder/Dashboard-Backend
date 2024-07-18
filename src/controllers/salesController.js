import { OverallStatmodel } from "../models/OverallStatmodels.js";

const overviewController = async (req, res) => {
  try {
    const overAllstats = await OverallStatmodel.find();
    res.status(200).json({
      status: "success",
      data: {
        overAllstats,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

export { overviewController };
