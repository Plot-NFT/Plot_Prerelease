const protectAPI = (handler) => {
  return async (req, res) => {
    const referer = req.headers.referer;
    const host = req.headers.host;

    const reqKey = `${referer}${host}`;

    if (reqKey !== `${process.env.REQ_VALIDATION}`) {
      return res.status(403).json({ success: false, message: `Forbidden` });
    }
    return handler(req, res);
  };
};

export default protectAPI;
