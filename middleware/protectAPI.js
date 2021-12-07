const protectAPI = (handler) => {
  return async (req, res) => {
    if (req.socket.remoteAddress.split(":")[3] !== `${process.env.LOCAL_IP}`) {
      return res.status(403).json({ success: false, message: `Forbidden` });
    }
    return handler(req, res);
  };
};

export default protectAPI;
