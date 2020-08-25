interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string | boolean;
  password: string;
  techs: Array<string | TechObject >; // tipo variável 
  // tech: string[];
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}