import { data } from "../route";

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    const user = data.users.find((user) => String(user.id) === id);
    return Response.json(user);
  } catch (err) {
    return Response.json({ msg: err.message });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    const userIndex = data.users.findIndex((user) => String(user.id) === id);
    const userDeleted = data.users[userIndex];
    data.users.splice(userIndex, 1);
    return Response.json(userDeleted);
  } catch (err) {
    return Response.json({ msg: err.message });
  }
};

export const PATCH = async (req, { params }) => {
  try {
    const { id } = params;
    const body = await req.json();
    const userIndex = data.users.findIndex((user) => String(user.id) === id);
    const user = data.users[userIndex];
    data.users[userIndex] = { ...body, id: user.id };
    return Response.json(data.users[userIndex]);
  } catch (err) {
    return Response.json({ msg: err.message });
  }
};
