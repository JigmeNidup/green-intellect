import { connectToDB } from "@/utils/database/mongodb";
import Upload from "@/models/uploads";

//GET
export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const uploads = await Upload.find({ uid: params.id });
    if (uploads.length < 1) {
      return new Response("uploads not found", { status: 404 });
    }
    return new Response(JSON.stringify(uploads), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch the uploads", { status: 500 });
  }
};
