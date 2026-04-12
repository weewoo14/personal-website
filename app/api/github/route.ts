export async function GET() {
  const result = await fetch("https://api.github.com/users/weewoo14/events?per_page=100", {
    headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`}
  });
  const data = await result.json();
  return Response.json(data);
}