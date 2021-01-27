const Count = require("../models/count")


exports.getCount = async (req, res) => {
  try {
    const getCount = await Count.find({}).exec()
    res.json(getCount)
  } catch (err) {
    console.log(err);
  }
}

exports.createCount = async (req, res) => {
  try {
    const createCount = await new Count(req.body).save()
    res.json(createCount)
  } catch (err) {
    console.log(err);
  }
}

exports.updateCount = async (req, res) => {
  try {
    const updateCount = await Count.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true })
        .exec()
      res.json(updateCount)
  } catch (err) {
    console.log(err);
  }
}
