

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    currentPage: "login",
    isLoggedIn: false
  });
};

exports.postLogin = (req, res, next) => {
  console.log(req.body)
  req.session.isLoggedIn = true
  // res.cookie('isloggedIn', true)
  // req.isLoogedIn = true
  res.redirect("/")
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(()=>{
    res.redirect("/login")
  })
  // req.isLoogedIn = true
};

