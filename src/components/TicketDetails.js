export const TicketDetails = ({ data }) => {
  const statusDict = {
    'IB': 'ICE BOX',
    'EM': 'EMERGENCY',
    'IP': 'IN PROGRESS',
    'TS': 'TESTING',
    'CO': 'COMPLETE'
  }

  return (
    <>
    {
      data &&
        <div className="border border-gray-500 rounded p-4 shadow-lg w-1/4">
          <div className="font-bold text-lg text-gray-700">{data.title}</div>
          <div>Priority: <span className="font-bold">{data.priority}</span></div>
          <div>Status: <span className={`text-xs bg-indigo-300 p-1 rounded font-bold`}>{statusDict[data.status]}</span></div>
        </div>
    }
    </>
  );
}