import { Schema } from 'mongoose';

export const ProductsSchema = new Schema({
  id: Number,
  name: String,
  price: String,
  quantity: Number,
  description: String,
  currency: String,
  type: String,
});
