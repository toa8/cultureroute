import { supabase } from "../../../../lib/supabaseClient";

export default async function handler(req, res) {
  const { apiKey } = req.query;
  const { id } = req.query;
  const { data: news } = await supabase.from("news").select();

  const item = news.find((item) => item.id.toString() === id);

  if (apiKey === process.env.NEXT_PUBLIC_API_KEY) {
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({
        message: "The News Not Found",
      });
    }
  } else {
    res.json({ apiKey: "Invalid ApiKey" });
  }
}
