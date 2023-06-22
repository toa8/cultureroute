import { supabase } from "../../../../lib/supabaseClient";

export default async function handler(req, res) {
  const { apiKey } = req.query;
  const { id } = req.query;
  const { data: blogs } = await supabase.from("blogs").select();

  const blog = blogs.find((item) => item.id.toString() === id);

  if (apiKey === process.env.NEXT_PUBLIC_API_KEY) {
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({
        message: "The Blog Not Found",
      });
    }
  } else {
    res.json({ apiKey: "Invalid ApiKey" });
  }
}
