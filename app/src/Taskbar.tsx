export function Taskbar() {
  const startButton = (
    <button
      aria-label="Start"
    >
      <img
        src="/src/assets/start.ico"
        alt="Start"
        width={10}
        height={10}
        style={{ marginRight: 2 }}
      />
      Start
    </button>
  );

  const taskBar = (
    <div className="taskbar">
      {startButton}
    </div>
  )

  return (taskBar);
}
