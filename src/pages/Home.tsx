import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUsers, deleteUser } from "../api/api";
import { User } from "../types/User";

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await fetchUsers();
        setUsers(res.data);
      } catch {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  const handleDelete = async (id?: number) => {
    if (!id) return;
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch {
      alert("Failed to delete user.");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-600 border-dashed rounded-full animate-spin"></div>
      </div>
    );

  if (error) return <p className="p-4 text-red-500 text-center">{error}</p>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Users List</h2>

      <div className="md:overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-md md:table">
          <thead className="hidden md:table-header-group bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`block md:table-row mb-4 md:mb-0 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } md:bg-none rounded-lg md:rounded-none shadow md:shadow-none p-4 md:p-0`}
              >
                <td className="block md:table-cell px-4 py-2 md:px-4 md:py-3">
                  <span className="font-medium md:hidden">Name: </span>
                  {user.name}
                </td>
                <td className="block md:table-cell px-4 py-2 md:px-4 md:py-3">
                  <span className="font-medium md:hidden">Email: </span>
                  {user.email}
                </td>
                <td className="block md:table-cell px-4 py-2 md:px-4 md:py-3">
                  <span className="font-medium md:hidden">Phone: </span>
                  {user.phone}
                </td>
                <td className="block md:table-cell px-4 py-2 md:px-4 md:py-3">
                  <div className="flex flex-wrap gap-2 justify-start">
                    <Link
                      to={`/edit/${user.id}`}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md min-w-[80px] text-center flex-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md min-w-[80px] text-center flex-1"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
