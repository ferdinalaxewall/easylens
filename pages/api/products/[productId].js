import { getProductById } from "../../../utils/dummy-data"

export default function handler(req, res) {
    const product = getProductById(req.query.productId);
    res.status(200).json({ data: product })
  }
  