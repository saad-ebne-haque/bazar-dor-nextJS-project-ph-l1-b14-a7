import GithubLogIn from "./github/GithubLogIn";
import GoogleLogin from "./google/GoogleLogin";

const SocialLogin = () => {



    return (
        <>
            <div className="flex items-center gap-2 justify-between ">
                <GoogleLogin></GoogleLogin>
                <GithubLogIn></GithubLogIn>
            </div>

        </>
    );
};

export default SocialLogin;