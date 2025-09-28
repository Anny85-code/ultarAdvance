export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=civil%20engineering&apiKey=${process.env.NEWS_API_KEY}`,
      {
        headers: {
          "User-Agent": "MyReactApp/1.0",
        },
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
