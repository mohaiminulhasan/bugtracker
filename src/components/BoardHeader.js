export const BoardHeader = (props) => {
  const dragOver = e => {
    e.stopPropagation();
  }

  return (
    <p onDragOver={dragOver} className="text-center bg-white border-2 border-gray-500 rounded-t-md">{props.heading}</p>
  );
}