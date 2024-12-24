export default {
	async fetch(request): Promise<Response> {
		async function MethodNotAllowed(request: Request) {
			return new Response(`Method ${request.method} not allowed.`, {
				status: 405,
				headers: {
					Allow: "GET",
				},
			});
		}
		// Only GET requests work with this proxy.
		if (request.method !== "GET") return MethodNotAllowed(request);
		return fetch(`https://yodasdata.biz/Events?af=50`);
	},
} satisfies ExportedHandler;
