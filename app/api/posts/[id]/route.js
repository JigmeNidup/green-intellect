import { connectToDB } from "@/utils/database/mongodb";
import Posts from "@/models/posts";

//GET
export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const post = await Posts.findById(params.id).populate("uid");
    if (!post) {
      return new Response("Post not found", { status: 404 });
    }
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch the post", { status: 500 });
  }
};

//PATCH (update)
export const PATCH = async (req, { params }) => {
  const { title, des, tag } = await req.json();
  try {
    await connectToDB();
    const existingPost = await Posts.findById(params.id);
    if (!existingPost) {
      return new Response("Post not found", { status: 404 });
    }
    existingPost.title = title;
    existingPost.des = des;
    existingPost.tag = tag;
    await existingPost.save();
    return new Response(JSON.stringify(existingPost), { status: 200 });
  } catch (error) {
    return new Response("Failed to update the post", { status: 500 });
  }
};

//DELETE
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    await Posts.findByIdAndDelete(params.id);
    return new Response("Post Deleted Successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete the post", { status: 500 });
  }
};
