export const onSubmit = async (data) => {
  const response = await fetch(
    "https://690116ddff8d792314bc84a8.mockapi.io/Description",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Error Detected : ${res.status}`);

      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
