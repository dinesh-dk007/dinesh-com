export function GET() {
  return new Response("RSS content goes here", {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
