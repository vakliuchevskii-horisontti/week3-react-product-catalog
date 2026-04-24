import { useState, useEffect } from "react";
import type { User } from "../types";
import { UserModal } from "./UserModal";

export function UserDirectory() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <div className="p-8 text-xl font-bold text-blue-500 animate-pulse">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Directory</h2>

      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className="p-4 bg-white shadow rounded-lg border-l-4 border-blue-500 cursor-pointer"
          >
            <h3 className="font-bold text-blue-800">{user.name}</h3>
          </div>
        ))}
      </div>

      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}
