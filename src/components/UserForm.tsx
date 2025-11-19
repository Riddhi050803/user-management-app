import { useState, ChangeEvent, FormEvent } from "react";
import { User } from "../types/User";

interface Props {
  initialValues: User;
  onSubmit: (user: User) => void;
}

const UserForm = ({ initialValues, onSubmit }: Props) => {
  const [user, setUser] = useState<User>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-5 mt-8"
    >
      <h2 className="text-2xl font-bold text-center mb-4">User Details</h2>

      <div className="flex flex-col">
        <label className="mb-2 font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter full name"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-medium text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#4f42b5] hover:bg-[#6b63d1] text-white font-semibold px-4 py-3 rounded-lg transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
