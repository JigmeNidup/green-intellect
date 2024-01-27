import { connectToDB } from "@/utils/database/mongodb";
import Disease from "@/models/diseases";

//GET
export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const disease = await Disease.findById(params.id);
    if (!disease) {
      return new Response("Disease not found", { status: 404 });
    }
    return new Response(JSON.stringify(disease), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch the Disease", { status: 500 });
  }
};

//PATCH (update)
export const PATCH = async (req, { params }) => {
  const { name,image,des } = await req.json();
  try {
    await connectToDB();
    const existingDisease = await Disease.findById(params.id);
    if (!existingDisease) {
      return new Response("Disease not found", { status: 404 });
    }
    existingDisease.name = name;
    existingDisease.image = image;
    existingDisease.des = des;
    
    await existingDisease.save();
    return new Response(JSON.stringify(existingDisease), { status: 200 });
  } catch (error) {
    return new Response("Failed to update the Disease", { status: 500 });
  }
};

//DELETE
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    await Disease.findByIdAndDelete(params.id);
    return new Response("Disease Deleted Successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete the Disease", { status: 500 });
  }
};
