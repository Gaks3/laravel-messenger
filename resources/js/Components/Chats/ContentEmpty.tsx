export default function ContentEmpty() {
  return (
    <div className="flex-col items-center justify-center flex-1 order-3 hidden w-full h-screen gap-4 border-l border-secondary sm:flex">
      <img
        src="/images/message-empty.png"
        alt="Message Empty Image"
        className="w-[250px]"
      />
      <h5 className="text-lg font-medium">No chats selected</h5>
    </div>
  );
}
