type int = number;
type pk = int;

interface User {
  name: string;
  email: string;
  phone: string;
  avatar_url: string;
  roles: Role[];
  job: Job;
}

interface Job {
  id: pk;
  title: string;
  min_salary: int;
  max_salary: int;
}

interface Department {
  id: pk;
  code: string;
  name: string;
  manager: User;
}

interface Role {
  id: number;
  band: number;
  name: "admin" | "employee" | "hr";
  display_name: string;
}

// year cycle
interface Season {
  id: int;
  name: string; // season name like 'q1-2024'
}

interface Questions {
  id: number;
  title: string;
  group_id: number;
}

interface Feedback {
  id: int;
  comment: string;
  reviews: Review[];
  season: Season;
}

interface Review {
  id: pk;
  question: string;
  answer: string;
  rating: int;
}
