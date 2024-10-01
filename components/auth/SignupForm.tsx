
import { useState } from "react";
import { useRouter } from "next/router";
const SignupForm = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      router.push("/auth/signin");
    } else {
      alert("Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      <input type="email" name="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" name="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;