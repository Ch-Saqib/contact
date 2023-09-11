import Contact from "@/utils/mock";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const AllContact = () => {
  return (
    <div>
      {Contact.map((contact) => (
        <Link key={contact.id} href={`/contact/${contact.id}`}>
          <div  className="">
            <div className="flex ">
              <div>
                <Image
                  src={contact.image}
                  alt={""}
                  className="w-[50px] h-[50px] rounded-full mb-2 "
                />
              </div>
              <div className="mt-4 ml-2 text-lg font-bold">{contact.name}</div>
             
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllContact;
