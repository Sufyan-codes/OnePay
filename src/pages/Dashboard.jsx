import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="p-8 pt-28">
      <h1 className="text-2xl font-bold">Hello, {user?.email}</h1>
      <p className="mt-2">Welcome to your dashboard</p>
    </div>
  );
};

export default Dashboard;
