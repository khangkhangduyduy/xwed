const users = [
  {
    email: "phamduykhang242003@gmail.com",
    password: "123456789"
  },
  {
    email: "duykhang242003@gmail.com",
    password: "123456"
  },
];

export function login(email, password) {
  const user = users.find(u => u.email === email);
  if (!user) {
    return false; 
  }
  return user.password === password;
}