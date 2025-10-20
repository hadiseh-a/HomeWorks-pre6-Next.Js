import { data } from "../route";

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    const post = data.posts.find((post) => String(post.id) === id);
    return Response.json(post);
  } catch (err) {
    return Response.json({ msg: err.message });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    const postIndex = data.posts.findIndex((post) => String(post.id) === id);
    const postDeleted = data.posts[postIndex];
    data.posts.splice(postIndex, 1);
    return Response.json(postDeleted);
  } catch (err) {
    return Response.json({ msg: err.message });
  }
};

export const PATCH = async (req, { params }) => {
  try {
    const { id } = params;
    const body = await req.json();
    const postIndex = data.posts.findIndex((post) => String(post.id) === id);
    const post = data.posts[postIndex];
    data.posts[postIndex] = { ...body, id: post.id };
    return Response.json(data.posts[postIndex]);
  } catch (err) {
    return Response.json({ msg: err.message });
  }
};
