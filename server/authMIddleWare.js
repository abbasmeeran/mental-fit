const sendStatus = (res, code) => {
  return res.status(code).send("You are not authorized to view this content");
};
const checkAuth = async (req, res, next) => {
  const { access_token } = req.headers || {};
  if (!access_token) {
    return sendStatus(res, 401);
  }
  try {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${access_token}`
    );
    if (!response) {
      return sendStatus(res, 401);
    }
    const { user_id: userId } = await response.json();
    if (!userId) {
      return sendStatus(res, 401);
    }
    req.userId = userId;
  } catch (err) {
    return sendStatus(res, 401);
  }

  next();
};

module.exports = checkAuth;
