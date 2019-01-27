const USERS = {
  adminUser: {
    isValidated: false,
    username: 'admin',
    firstName: 'Captain',
    surname: 'Scarlet',
    email: 'capscarlet@supermarionation.com',
    roles: ['SystemAdministrator']
  },
  centralUser: {
    isValidated: false,
    username: 'admin',
    firstName: 'Aqua',
    surname: 'Maria',
    email: 'aquamaria@supermarionation.com',
    roles: ['CentralUser']
  },
  provincialUser: {
    isValidated: true,
    username: 'admin',
    firstName: 'Joe',
    surname: 'Ninety',
    email: 'joe90@supermarionation.com',
    roles: ['ProvincialUser']
  }
};

const login = (req, res) => {
  const body = req.body;

  let user = {};
  if (body.email === USERS.adminUser.email) {
    user = USERS.adminUser;
  } else if (body.email === USERS.centralUser.email) {
    user = USERS.centralUser;
  } else if (body.email === USERS.provincialUser.email) {
    user = USERS.provincialUser;
  } else {
    res.status(405);
    res.json({ message: 'Error: Unknown User' });
  }

  res.status(200);
  res.json(user);
};

const logout = (req, res) => {
  res.json({ type: 'success' });
};

const register = (req, res) => {
  console.log('STATUS: ', res.statusCode);

  res.status(200);
  res.json({ type: 'success' });
};

module.exports = {
  register,
  login,
  logout
};
