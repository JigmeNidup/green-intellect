import { connectToDB } from "@/utils/database/mongodb";
import Disease from "@/models/diseases";

export const POST = async (req, res) => {
  const {
    name,
    image,
    des,
    crop,
    language,
    symptoms,
    treatment,
    prevents,
    recommend,
    causes,
  } = await req.json();
  try {
    await connectToDB();
    const newDisease = new Disease({
      name,
      image: image,
      des,
      crop,
      recommend,
      symptoms,
      treatment,
      prevents,
      causes,
      language,
    });

    await newDisease.save();
    return new Response(JSON.stringify(newDisease), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create new disease resource", {
      status: 500,
    });
  }
};
