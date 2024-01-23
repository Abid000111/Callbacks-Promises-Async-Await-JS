// function getData(dataId, getNextData) {
// 	setTimeout(() => {
// 		console.log("data", dataId);
// 		if (getNextData) {
// 			getNextData();
// 		}
// 	}, 2000);
// }

// getData(1, () => {
// 	console.log("getting data 2");
// 	getData(2, () => {
// 		console.log("getting data 3");
// 		getData(3, () => {
// 			console.log("getting data 4");
// 			getData(4);
// 		});
// 	});
// });

// let promise = new Promise((resolve, reject) => {
// 	console.log("I am a promise");
// 	reject("some error occured");
// });

// let promise = new Promise((resolve, reject) => {
// 	console.log("I am a promise");
// 	resolve("Successfull");
// });

// function getData(dataId, getNextData) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log("data", dataId);
// 			resolve("success");
// 			if (getNextData) {
// 				getNextData();
// 			}
// 		}, 5000);
// 	});
// }

// let promise = getData(123);
// console.log(promise);

// function getData(dataId, getNextData) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log("data", dataId);
// 			reject("error");
// 			if (getNextData) {
// 				getNextData();
// 			}
// 		}, 5000);
// 	});
// }
// let promise = getData(123);
// console.log(promise);
