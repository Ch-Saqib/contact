import AllContact from "./contact/page";

export default function Home() {
  return (
    <div className="flex justify-center px-4 md:px-6 lg:px-6">
    <div className="flex justify-start  overflow-y-auto bg-gray-300  w-[400px] h-[400px]">
      <AllContact />
      
    </div>
      
      </div>
  );
}
