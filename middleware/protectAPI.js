const protectAPI = (handler) => {
  return async (req, res) => {
    // const referer = req.headers.referer;

    // const reqKey = `${referer}`;

    // if (reqKey !== `${process.env.REQ_VALIDATION}`) {
    //   return res.status(403).json({ success: false, message: `Forbidden` });
    // }

    return handler(req, res);
  };
};

export default protectAPI;
