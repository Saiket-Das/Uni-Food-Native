module.exports = (...role) => {
  return (req, res, next) => {
    // ------> Got it from VerifyToken middleware
    const userRole = req.user.data.role;

    if (!role.includes(userRole)) {
      return res.status(403).json({
        status: "Fail",
        message: "You are not authorized to access this.",
      });
    }
    next();
  };
};
