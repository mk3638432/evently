import EventForm from "@/components/ui/shared/EventForm";
import { auth } from "@clerk/nextjs";
import React from "react";

const page = () => {
  const { sessionClaims } = auth();
  console.log(sessionClaims);

  const userId = sessionClaims?.userId?.userId as String;
  console.log(userId);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 ">
        <h3 className="wrapper h3-bold text-center sm:text-text    ">
          Create Event
        </h3>
      </section>
      <div className="wrapper my-8 ">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default page;
