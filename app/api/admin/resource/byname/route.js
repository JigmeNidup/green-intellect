import { connectToDB } from "@/utils/database/mongodb";
import Disease from "@/models/diseases";

export const POST = async (req) => {
  try {
    const { name, language } = await req.json();
    await connectToDB();
    let disease = await Disease.find({
      mname: name,
      language: language,
    });
    // console.log({ name, language });
    if (!disease) {
      return new Response("Disease not found", { status: 404 });
    }
    return new Response(JSON.stringify(disease), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch the Disease", { status: 500 });
  }
};
