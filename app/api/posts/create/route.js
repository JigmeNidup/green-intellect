import { connectToDB } from "@/utils/database/mongodb";
import Posts from "@/models/posts";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth/next";

export const POST = async (req, res) => {
  // protected api route
  let session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Not Authorized", {
      status: 401,
    });
  }
  const { userId, title, image, des, tag } = await req.json();
  try {
    await connectToDB();
    const newPost = new Posts({
      uid: userId,
      title,
      image,
      tag,
      des,
    });

    await newPost.save();
    return new Response(JSON.stringify(newPost), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create new post", {
      status: 500,
    });
  }
};
