echo 'Deno.serve(async (req) => {
  const url = new URL(req.url);
  if (url.pathname === "/query_logistics") {
    const targetUrl = "http://39.101.166.198:333/query_logistics";
    try {
      const res = await fetch(targetUrl, {
        method: req.method,
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Host": "39.101.166.198"
        },
        body: req.body
      });
      return new Response(res.body, { status: res.status });
    } catch {
      return new Response("Proxy error", { status: 500 });
    }
  }
  return new Response(JSON.stringify({ endpoint: "/query_logistics" }));
});' > main.ts
