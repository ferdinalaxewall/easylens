import { getProductById } from "../../../utils/dummy-data"

export default function handler(req, res) {
    try {
      const product = getProductById(req.query.productId);
      res.status(200).json(product)
    } catch (error) {
      res.status(200).json({message : error.response})
    }
  }
  