import ChangePassForm from "../components/ChangePassForm";
import ProfileForm from "../components/ProfileForm";
import ProfileHeader from "../components/ProfileHeader";

const Profile = () => {
  return (
    <section className="space-y-8">

      <ProfileHeader />

      <ProfileForm />

      <ChangePassForm />

    </section>
  )
}

export default Profile;
