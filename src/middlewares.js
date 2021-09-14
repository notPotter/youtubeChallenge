export const urlLogger = (req, res, next) => {
  console.log(`path : ${req.originalUrl}`);
  next();
};

export const timeLogger = (req, res, next) => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  const month = currentTime.getMonth();
  const date = currentTime.getDate();

  console.log(`Time : ${year}.${month}.${date}`);
  next();
};

export const securityLogger = (req, res, next) => {
  if (req.secure === false) {
    console.log("Insecure ❌");
  } else {
    console.log("Insecure ✅");
  }
  next();
};

export const protectorMiddleware = (req, res, next) => {
  if (req.originalUrl === "/protected") {
    return res.end();
  }
  next();
};
