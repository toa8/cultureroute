import { supabase } from "../../../../lib/supabaseClient";

export default async function handler(req, res) {
  const { apiKey } = req.query;
  const { id } = req.query;
  const { data: articles } = await supabase.from("blogs").select();

  const article = articles.find((item) => item.id.toString() === id);

  if (apiKey === process.env.NEXT_PUBLIC_API_KEY) {
    if (article) {
      res.status(200).json(article);
    } else {
      res.status(404).json({
        message: "The Article Not Found",
      });
    }
  } else {
    res.json({ apiKey: "Invalid ApiKey" });
  }
}
