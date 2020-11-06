'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('Logistics')
	const res = await collection.limit(1).get()
	return res
};
