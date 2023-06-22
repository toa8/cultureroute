import { supabase } from "../../../../lib/supabaseClient";

export default async function handler(req, res) {
  const { apiKey } = req.query;
  if (apiKey === process.env.NEXT_PUBLIC_API_KEY) {
    const { data } = await supabase.from("blogs").select("*");
    res.status(200).json(data);
  } else {
    res.json({ apiKey: "Invalid ApiKey" });
  }
}
