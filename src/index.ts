export default {
	async fetch(request: Request) {

		const allowedOrigins = [
			"https://quotes-client.pages.dev",
			"http://localhost:5173/"
		];
		const origin = request.headers.get("Origin") || "";
		const isPreflight = request.method === "OPTIONS";

		if (isPreflight) {
			return new Response(null, {
				status: 204,
				headers: {
					"Access-Control-Allow-Origin": allowedOrigins.includes(origin) ? origin : "",
					"Access-Control-Allow-Methods": "GET, OPTIONS",
					"Access-Control-Allow-Headers": "Content-Type",
					"Vary": "Origin"
				}
			});
		}

		let quotesCurrencies = [
			{
				name: "freakyAhhOil",
				current: (Math.random() * 10).toFixed(2),
			},

			{
				name: "bugCoin",
				current: (Math.random() * 1000).toFixed(2),
			},

			{
				name: "adamantium",
				current: (Math.random() * 10000 + 50000).toFixed(2),
			},

			{
				name: "asteroidDust",
				current: (Math.random()).toFixed(2),
			},

			{
				name: "nicoNicotine",
				current: (Math.random() * 10).toFixed(2),
			},

			{
				name: "holyWater",
				current: (Math.random() * 100).toFixed(2),
			},

			{
				name: "abMinusBloodType",
				current: (Math.random() * 1000).toFixed(2),
			}, 

			{
				name: "fatGoslingOnlyFansSubscribePlan",
				current: (Math.random() * 10).toFixed(2),
			},

			{
				name: "sAndP10",
				current: (Math.random() * 10).toFixed(2),
			},

			{
				name: "jupitersCore",
				current: (Math.random() * 10000 + 78000).toFixed(2),
			},
		]
		return new Response(JSON.stringify(quotesCurrencies), {
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": allowedOrigins.includes(origin) ? origin : "",
				"Vary": "Origin"
			}
		})
	}
};