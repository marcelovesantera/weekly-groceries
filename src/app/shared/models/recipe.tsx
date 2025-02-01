import { Schema, model, models } from "mongoose";

const RecipeSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required."],
  },
  type: {
    type: String,
    required: [true, "Type is required."],
  },
  portions: {
    type: Number,
    default: 0,
  },
  portionsMax: {
    type: Number,
    required: [true, "PortionsMax is required."],
    default: 1,
  },
  img: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Recipe = models.Recipe || model("Recipe", RecipeSchema);

export default Recipe;
