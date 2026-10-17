import GithubLogIn from "./github/GithubLogIn";
import GoogleLogin from "./google/GoogleLogin";

const SocialLogin = () => {



    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <GoogleLogin></GoogleLogin>
                <GithubLogIn></GithubLogIn>
            </div>

        </>
    );
};

export default SocialLogin;