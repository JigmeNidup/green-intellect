import { connectToDB } from "@/utils/database/mongodb";
import Comments from "@/models/comments";

export const POST = async (req, res) => {
  const { userId, pid, comment } = await req.json();
  try {
    await connectToDB();
    const newComment = new Comments({
      uid: userId,
      pid,
      comment,
      edited: false,
    });

    await newComment.save();
    return new Response(JSON.stringify(newComment), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create new comment", {
      status: 500,
    });
  }
};
