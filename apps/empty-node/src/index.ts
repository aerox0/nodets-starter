export {} // remove after importing anything
const main = async () => {
	console.log('Hello, world!')
}

main()
	.then(process.exit(0))
	.catch((err) => {
		console.error(err)
		process.exit(1)
	})
