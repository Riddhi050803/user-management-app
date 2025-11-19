import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { fetchUserById, updateUser } from "../api/api";
import { User } from "../types/User";

const EditUser = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      if (!id) return;
      try {
        const res = await fetchUserById(Number(id));
        setUser(res.data);
      } catch {
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [id]);

  const handleUpdate = async (updatedUser: User) => {
    if (!id) return;
    try {
      const res = await updateUser(Number(id), updatedUser);
      console.log("Simulated PUT response:", res.data);
      alert("User updated successfully!");
      navigate("/");
    } catch {
      alert("Failed to update user.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="w-16 h-16 border-4 border-blue-600 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <p className="p-4 text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="flex items-center justify-center  bg-gray-50 px-4 sm:px-6 pt-16 mx-4">
      <div className="w-full ">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Edit User
        </h2>
        {user && <UserForm initialValues={user} onSubmit={handleUpdate} />}
      </div>
    </div>
  );
};

export default EditUser;
