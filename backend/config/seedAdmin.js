const User = require('../models/User');
const bcrypt = require('bcrypt');

const seedAdmin = async () => {
  const existingAdmin = await User.findOne({ email: 'admin@123' });
  if (existingAdmin) return;

  const hashedPassword = await bcrypt.hash('admin', 10);
  await User.create({
    name: 'Admin',
    email: 'admin@123',
    password: hashedPassword,
    role: 'admin'
  });

  console.log('✅ Admin user created');
};

module.exports = seedAdmin;