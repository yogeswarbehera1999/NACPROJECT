export default function FormModal({ visible, onClose, children }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">{children}
        <button
          className="mt-4 bg-gray-300 px-3 py-1 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
