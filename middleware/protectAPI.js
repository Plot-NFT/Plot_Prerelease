const protectAPI = (handler) => {
  return async (req, res) => {
    if (req.headers.referer !== `${process.env.DOMAIN}/`) {
      return res.status(403).json({ success: false, message: `Forbidden` });
    }
    return handler(req, res);
  };
};

export default protectAPI;
