const json = (payload, status = 200) =>
  new Response(JSON.stringify(payload, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-cache"
    }
  });

const routes = {
  "GET /api/hello": () =>
    json({
      message: "Hello from a native W7S backend.",
      runtime: "cloudflare-workers-for-platforms",
      deployedBy: "w7s-io-demo"
    }),
  "GET /api/time": () =>
    json({
      now: new Date().toISOString()
    }),
  "POST /api/echo": async (request) => {
    let body = null;
    try {
      body = await request.json();
    } catch {
      body = await request.text();
    }
    return json({
      echoed: body
    });
  }
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const route = routes[`${request.method} ${url.pathname}`];
    if (route) return route(request);

    return json(
      {
        error: "Not found",
        method: request.method,
        path: url.pathname
      },
      404
    );
  }
};

