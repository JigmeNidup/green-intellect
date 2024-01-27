import { connectToDB } from "@/utils/database/mongodb";
import Comments from "@/models/comments";

//GET
export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const comment = await Comments.findById(params.id);
    if (!comment) {
      return new Response("Comment not found", { status: 404 });
    }
    return new Response(JSON.stringify(comment), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch the comment", { status: 500 });
  }
};

//PATCH (update)
export const PATCH = async (req, { params }) => {
  const { comment } = await req.json();
  try {
    await connectToDB();
    const existingComment = await Comments.findById(params.id);
    if (!existingComment) {
      return new Response("Comment not found", { status: 404 });
    }
    existingComment.comment = comment;
    existingComment.edited = true;
    await existingComment.save();
    return new Response(JSON.stringify(existingComment), { status: 200 });
  } catch (error) {
    return new Response("Failed to update the comment", { status: 500 });
  }
};

//DELETE
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    await Comments.findByIdAndDelete(params.id);
    return new Response("Comment Deleted Successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete the comment", { status: 500 });
  }
};
