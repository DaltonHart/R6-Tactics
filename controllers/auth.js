const bcrypt = require('bcryptjs');
const db = require('../models');
const uuidv4 = require('uuid/v4');

const validateBody = body => {
  const errors = [];
  if (!body.email) errors.push('Email required.');
  if (!body.password) errors.push('Password required.');
  return errors;
};

const register = async (req, res) => {
  try {
    // validate body data
    const errors = validateBody(req.body);
    if (errors.length) return res.status(400).json({ errors: errors });
    // validate user does not exist
    const foundUser = await db.User.findOne({ email: req.body.email });
    if (foundUser) return res.error();
    // salt and hash user info
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const userData = {
      email: req.body.email,
      password: hash,
      api_key: uuidv4()
    };
    // create user
    const createdUser = await db.User.create(userData);
    // create session
    req.session.currentUser = { id: createdUser._id };
    res.success(201, createdUser._id);
  } catch (error) {
    res.error(error.message);
  }
};

const login = async (req, res) => {
  try {
    // validate body data
    const errors = validateBody(req.body);
    if (errors.length) return res.json({ errors: errors });
    // validate user exists
    const foundUser = await db.User.findOne({ email: req.body.email }).select(
      '+password'
    );
    if (!foundUser) return res.error();
    // compare passwords
    const match = await bcrypt.compare(req.body.password, foundUser.password);
    if (!match) return res.error();
    // create session
    req.session.currentUser = { id: foundUser._id };
    return res.success(200, foundUser._id);
  } catch (error) {
    res.error(error.message);
  }
};

const show = async (req, res) => {
  try {
    const foundUser = await db.User.findById(req.session.currentUser.id);
    res.success(200, foundUser);
  } catch (error) {
    res.error(error.message);
  }
};

const requestNewKey = async (req, res) => {
  try {
    const foundUser = await db.User.findById(req.session.currentUser.id);
    foundUser.archive_keys.push(foundUser.api_key);
    foundUser.api_key = uuidv4();
    foundUser.save();
    res.success(201, foundUser);
  } catch (error) {
    res.error(error.message);
  }
};

const deleteSession = async (req, res) => {
  try {
    await req.session.destroy();
    res.success(200, 'Success');
  } catch (error) {
    res.error();
  }
};

module.exports = {
  register,
  login,
  show,
  requestNewKey,
  deleteSession
};
