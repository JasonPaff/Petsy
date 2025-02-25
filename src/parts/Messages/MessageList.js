﻿export default function MessageList(props) {
  return (
    <>
      {/* <div className="inline-block min-w-full align-middle"> */}
      {/* <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"> */}
      <div className="flex flex-col gap-2 ">
        {props.messages.map((message) => (
          <div
            className="flex flex-col bg-gray-50  border border-slate-300 rounded-md shadow-md p-3 hover:bg-white cursor-pointer hover:shadow-none"
            key={message.id}
            onClick={() => props.setSelectedMessage(message)}
          >
            <span className=" font-medium  ">{message.subject} </span>
            <span className="text-gray-500">From: {message.sender}</span>
            <span className="text-gray-500">To: {message.receiver}</span>
            <span className="text-sm text-right">{message.time}</span>
          </div>
        ))}
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
