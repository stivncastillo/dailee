"use client";

import HabitsTableContainer from "@/features/Admin/Habits";

export default function Habits() {
  return (
    <section className="flex flex-col gap-4 pt-4">
      <div className="">
        <HabitsTableContainer />
      </div>
    </section>
  );
}
