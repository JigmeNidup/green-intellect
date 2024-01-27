import { connectToDB } from "@/utils/database/mongodb";
import Disease from "@/models/diseases";

export const POST = async (req) => {
  try {
    await connectToDB();
    let { type, language } = await req.json();
    let disease = await Disease.find({ crop: type, language });
    if (!disease) {
      return new Response("Disease not found", { status: 404 });
    }
    return new Response(JSON.stringify(disease), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch the Disease", { status: 500 });
  }
};
