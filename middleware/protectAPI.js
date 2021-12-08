const protectAPI = (handler) => {
  return async (req, res) => {
    let ipAddress = req.socket.remoteAddress;

    if (ipAddress.substr(0, 7)) {
      ipAddress = ipAddress.substr(7);
    }

    if (ipAddress !== `${process.env.LOCAL_IP}`) {
      return res.status(403).json({ success: false, message: `Forbidden` });
    }
    return handler(req, res);
  };
};

export default protectAPI;
