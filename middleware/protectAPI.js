const protectAPI = (handler) => {
  return async (req, res) => {
    let ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    console.log(ipAddress);

    if (ipAddress.substr(0, 7) === "::ffff:") {
      ipAddress = ipAddress.substr(7);
    }

    console.log(ipAddress);

    if (ipAddress !== `${process.env.LOCAL_IP}`) {
      return res.status(403).json({ success: false, message: `Forbidden` });
    }
    return handler(req, res);
  };
};

export default protectAPI;
