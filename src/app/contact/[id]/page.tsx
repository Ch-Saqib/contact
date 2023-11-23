import Contact from "@/utils/mock";
import Image from "next/image";

const ContactDetail = (id: number | string) => {
  return Contact.filter((contact) => contact.id == id);
};

export default function Page({ params }: { params: { id: string } }) {
  const results = ContactDetail(params.id);
  return (
    <div className="flex justify-center">
      {results.map((contact) => (
        <div key={contact.id}>
          <div className=" mt-1">
            <Image
              src={contact.image}
              alt={""}
              className="flex w-[400px] h-[100]"
            />
          </div>

          <div className="w-[400px] h-[250px] bg-gray-300">
            <div className="flex mt-6 text-2xl font-semibold ml-2 mb-10">
              <div className="flex-1 ">Name : {contact.name}</div>
            </div>
            <div className="flex mt-6 text-2xl font-semibold ml-2 mb-10">
              <div className="flex-1 ">Address : {contact.address}</div>
            </div>
            <div className="flex mt-6 text-2xl font-semibold ml-2 mb-10">
              <div className="flex-1 ">Contact : {contact.contact}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

