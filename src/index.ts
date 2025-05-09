export default {
	async fetch() {
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
				"Access-Control-Allow-Origin": "https://quotes-client.pages.dev"
			}
		})
	}
};