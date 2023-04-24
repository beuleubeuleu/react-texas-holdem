const { abstractFactory } = require("../dependency/abstractFactory");
const createGroup         = require("express").Router();
createGroup.post('/', async(req, res) => {
  try {
    const triGroup = abstractFactory(process.env.TRIGROUP_REPOSITORY_INJECTION_TOKEN)
    const newUser = await triGroup.createGroup(req.body)
    res.status(201).json({ success: true })
  } catch (err) {
    return res.status(500).json({success: false, message: err.message})
  }

})

module.exports = createGroup;