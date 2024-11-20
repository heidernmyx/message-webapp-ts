import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const FriendList = () => {
  return (
    <div className="flex items-center w-full py-1 hover:bg-secondary">
      <div className="relative ml-[0.6vw]">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute h-[1.5vh] w-[1.5vh] bg-green-600 bottom-0 right-0 rounded-full border-2 border-white"></div>
      </div>
      <div className="p-2">
        <p className="text-red-500">Placeholder</p>
      </div>
    </div>
  );
};

export default FriendList;
