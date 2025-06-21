export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Ping reçu :', req.body);
    return res.status(200).json({ received: true });
  }
  res.status(405).end();
}
