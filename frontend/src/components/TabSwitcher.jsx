export default function TabSwitcher({ tabs, activeKey, onChange }) {
  return (
    <div className="flex space-x-2 border-b mb-4">
      {tabs.map((t) => (
        <button
          key={t.key}
          className={`px-4 py-2 ${
            activeKey === t.key ? "border-b-2 border-blue-600" : "text-gray-600"
          }`}
          onClick={() => onChange(t.key)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
