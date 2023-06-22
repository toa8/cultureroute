import { supabase } from "../../../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { data, error } = await supabase.from("contact").insert(req.body);
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Veri kaydedilemedi" });
    }

    return res.status(200).json({ message: "Veri başarıyla kaydedildi" });
  } else {
    res.status(200).json({ message: "PostRequest Atmalısınız!" });
  }
}
