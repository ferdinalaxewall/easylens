import { getAllProducts } from "../../../utils/dummy-data"

export default function handler(req, res) {
    try {
        res.status(200).json(getAllProducts())
    } catch (error) {
        res.status(500).json({ message : error.response})
    }
}
  