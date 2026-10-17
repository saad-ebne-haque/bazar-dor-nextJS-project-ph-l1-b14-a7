import ProfileInfo from "@/components/pages/profilePage/ProfileInfo";
import ProfileUpdateForm from "@/components/pages/profilePage/ProfileUpdateForm";

const ProfilePage = () => {



    return (
        <div className="max-w-3xl mx-auto py-6 px-4 space-y-6">

            <div>
                <h2 className="text-24-bold-32">আমার প্রোফাইল</h2>
                <p className="text-14-regular-20 text-base-content/70">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </div>


            <ProfileInfo></ProfileInfo>
            <ProfileUpdateForm></ProfileUpdateForm>
        </div>
    );
};

export default ProfilePage;