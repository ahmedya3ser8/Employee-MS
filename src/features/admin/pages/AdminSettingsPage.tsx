import ChangePasswordForm from "../components/ChangePasswordForm";
import ProfileForm from "../components/ProfileForm";

const AdminSettingsPage = () => {
  return (
    <section className="space-y-8">

      <div className="space-y-1">
        <h1 className="text-2xl font-medium text-[#0F172B]"> Settings </h1>
        <p className="text-sm text-[#62748E]"> Manage your account and preferences </p>
      </div>

      <ProfileForm />

      <ChangePasswordForm />

    </section>
  )
}

export default AdminSettingsPage;
