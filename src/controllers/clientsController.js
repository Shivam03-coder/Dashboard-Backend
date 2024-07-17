import { ProductsModel } from "../models/Productmodels.js";
import { ProductStatmodel } from "../models/ProductStatmodels.js";
import { Transactionmodel } from "../models/Transactionmodels.js";
import { UserModel } from "../models/Usermodels.js";
import getCountryIso3 from "country-iso-2-to-3";

const ProductsController = async (req, res) => {
  try {
    const products = await ProductsModel.find();

    const ProductsStat = await Promise.all(
      products.map(async (product) => {
        const stats = await ProductStatmodel.find({
          productId: product._id,
        });

        return {
          ...product._doc,
          stats,
        };
      })
    );

    res.status(200).json({
      status: "Success",
      data: ProductsStat,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

const CustomerController = async (req, res) => {
  try {
    const products = await UserModel.find({
      role: "user",
    }).select("-password");

    res.status(200).json({
      status: "Success",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

const TranscationsController = async (req, res) => {
  try {
    const { page = 1, pageSize = 20, search = "" } = req.query;

    const Transactions = await Transactionmodel.find({
      $or: [
        {
          cost: { $regex: new RegExp(search, "i") },
          userId: { $regex: new RegExp(search, "i") },
        },
      ],
    })
      .skip(page * pageSize)
      .limit(pageSize);

    const Toatal = await Transactionmodel.countDocuments({
      name: {
        $regex: search,
        $options: "i",
      },
    });

    res.status(200).json({
      status: "Success",
      data: {
        Transactions,
        Toatal,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

const GeographyController = async (req, res) => {
  try {
    const Users = await UserModel.find();

    const userLocations = Users.reduce((acc, { country }) => {
      const iso3Country = getCountryIso3(country); // renamed variable to avoid shadowing
      if (!acc[iso3Country]) {
        acc[iso3Country] = 0;
      }
      acc[iso3Country]++;
      //{ "USA": 2, "CAN": 1 }
      return acc;
    }, {});

    const formattedLocations = Object.entries(userLocations).map(
      // Object.entries {"AND":12,"SAN":13} ===> [["AND",12],["SAN",13]]
      ([country, count]) => {
        return { id: country, value: count };
      }
    );

    res.status(200).json({
      status: "Success",
      data: {
        formattedLocations,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

export {
  ProductsController,
  CustomerController,
  TranscationsController,
  GeographyController,
};
