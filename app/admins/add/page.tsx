import AdminForm from "@/app/_components/AdminForm";

function page() {
  return (
    <div className="bg-white py-4 px-6 shadow-sm rounded-md">
      <div>
        <h3 className="text-2xl text-primary-600 font-bold">New Admin</h3>
      </div>
      <AdminForm />
    </div>

  );
}

export default page;
