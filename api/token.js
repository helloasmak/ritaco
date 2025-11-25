import fs from "fs";
import path from "path";

export const config = { api: { bodyParser: true } };

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "token.txt");
  
  if (req.method === "POST") {
    fs.writeFileSync(filePath, req.body);
    res.status(200).json({ success: true });
  } else {
    const token = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
    res.status(200).send(token);
  }
}
