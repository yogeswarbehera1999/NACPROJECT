export default function Sidebar({ items, onSelect, active }) {
  return (
    <div className="w-64 bg-gray-100 h-full py-4 px-2 space-y-2">
      {items.map((tab) => (
        <button
          key={tab.key}
          className={`block w-full text-left px-4 py-2 rounded ${
            active === tab.key ? "bg-blue-200" : "hover:bg-gray-200"
          }`}
          onClick={() => onSelect(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
