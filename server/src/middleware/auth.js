const authenticate = (req, res, next) => {
  if (req.session.user) next();
  else res.status(401).json({ error: "not logged in" });
};

export default authenticate;
