import type { User } from "../types";

interface ModalProps {
  user: User;
  onClose: () => void;
}

export function UserModal({ user, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl">
        <h3 className="text-2xl font-bold mb-2">{user.name}</h3>
        <p className="text-gray-600 mb-2">📧 {user.email}</p>
        <p className="text-gray-600 mb-6">📞 {user.phone}</p>

        <button
          onClick={onClose}
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
