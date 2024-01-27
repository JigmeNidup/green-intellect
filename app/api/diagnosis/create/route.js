export const POST = async (req, res) => {
  const { filebase64, type, name, uid } = await req.json();

  try {
    let res = await fetch("http://localhost:5000/image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filebase64, type, name }),
    });

    res = await res.json();
    // console.log(res.name);

    return new Response(JSON.stringify({ name: res.name }), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to create new upload", {
      status: 500,
    });
  }
};
