"use client";

import DefaultLayout from "@/components/Layout/DefaultLayout";
import HabitsTableContainer from "@/features/Admin/Habits";

export default function Habits() {
  return (
    <DefaultLayout>
      <section className="flex flex-col gap-4 pt-4">
        <div className="">
          <HabitsTableContainer />
        </div>
      </section>
    </DefaultLayout>
  );
}
