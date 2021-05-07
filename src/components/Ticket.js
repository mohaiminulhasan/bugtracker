export const Ticket = (props) => {
  const dragStart = e => {
    e.dataTransfer.setData('ticket_id', e.target.id);
    e.dataTransfer.setData('ticket_parent_id', e.target.parentElement.id);
    
    setTimeout(() => {
      e.target.style.display = 'none';
    }, 0);
  }

  const dragEnd = e => {
    if (e.target.style.display === 'none') {
      e.target.style.display = 'block';
    }
  }

  const dragOver = e => {
    e.stopPropagation();
  }

  const style = { borderLeft: '3px solid red' };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onDragOver={dragOver}
      onClick={props.onClick}
      // style={props.selected ? style : null}
    >
      {props.children}
    </div>
  );
}