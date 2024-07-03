const Asynchandler = (func, next) => {
  func().catch((err) => next(err));
};
