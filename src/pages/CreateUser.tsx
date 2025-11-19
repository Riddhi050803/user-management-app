import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { createUser } from "../api/api";
import { User } from "../types/User";

const CreateUser = () => {
  const navigate = useNavigate();

  const handleCreate = async (user: User) => {
    try {
      await createUser(user);
      alert("User created successfully!");
      navigate("/");
    } catch {
      alert("Failed to create user.");
    }
  };

  return (
    <div className="pt-24 bg-gray-50 justify-center mx-4">
      <UserForm
        initialValues={{ name: "", email: "", phone: "" }}
        onSubmit={handleCreate}
      />
    </div>
  );
};

export default CreateUser;
