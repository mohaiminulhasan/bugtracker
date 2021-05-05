export const Board = (props) => {
  const drop = e => {
    e.preventDefault();
    const ticket_id = e.dataTransfer.getData('ticket_id');
    const ticket_parent_id = e.dataTransfer.getData('ticket_parent_id');

    const ticket = document.getElementById(ticket_id);
    ticket.style.display = 'block';

    e.target.appendChild(ticket);

    if (e.target.id !== ticket_parent_id) {
      console.log(`${ticket_id} goes to ${e.target.id} from ${ticket_parent_id}`);
    }
  }

  const dragOver = e => {
    e.preventDefault();
  }

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
    {props.children}
    </div>
  );
}