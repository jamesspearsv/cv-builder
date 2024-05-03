export function ActionPanel({ handleEditing, section, index }) {
  return (
    <div className='action-panel no-print'>
      <button
        onClick={() => {
          handleEditing(section, index);
        }}
      >
        Edit
      </button>
      <button>Delete</button>
    </div>
  );
}
