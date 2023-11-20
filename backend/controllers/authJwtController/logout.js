const User = require("@/models/Users/User");

async function logout (req, res, next) {
  try {
    // const { email } = req.body;
    const token = req.cookies.token;

    const user = await User.findOne({ email: req.user.email });
    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'No account with this email has been registered.',
        });
    }

    user.isLoggedIn = false;
    user.jwt.pull(token);
    await user.save();

    return res
      .clearCookie('token', {
        maxAge: null,
        sameSite: 'none',
        httpOnly: true,
        secure: true,
        domain: req.hostname,
        Path: '/',
      })
      .json({ isLoggedOut: true });
  } catch (error) {
    res.status(500).json({ success: false, result: null, message: error.message, error: error });
  }
};

module.exports = logout;
