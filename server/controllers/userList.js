const UserList = require("../models/userList");
const slugify = require('slugify')

exports.test = (req, res) => {
	res.json({
		testMessage: "担当は山本さんです。",
	});
};

exports.createUserList = async (req, res) => {
	try {
		const newUser = await new UserList(req.body).save();
		res.json(newUser);
	} catch (err) {
		console.error(err);
		res.status(400).send("Not Create UserList");
	}
};

exports.allGetUserList = async (req, res) => {
	const list = await UserList.find({}).exec();
	res.json(list);
};

exports.removeUserlist = async(req, res) => {
	//console.log(req.body);
	try { 
		const remove = await UserList.findByIdAndDelete(  req.params.id ).exec()
		res.json(remove)
	} catch (err) {
		console.log(err);
    res.status(400).json('Not Deleted')
  }
	
}

exports.decrementUser = async (req, res) => {
	try { 
		//const {name} = req.body
		const update = await UserList.findByIdAndUpdate(
			req.params.id ,
			{ $set: { eating: false } },
			{ new: true })
			.exec()
		res.json(update)
	} catch (err) {
		console.log(err);
    res.status(400).json('Not Updated')
  }
	
}

exports.incrementUser = async (req, res) => {
	try { 
		//const {name} = req.body
		const update = await UserList.findByIdAndUpdate(
			req.params.id ,
			{ $set: { eating: true } },
			{ new: true })
			.exec()
		res.json(update)
	} catch (err) {
		console.log(err);
    res.status(400).json('Not Updated')
  }
	
}


