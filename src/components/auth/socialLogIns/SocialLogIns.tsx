import GithubLogIn from "./github/GithubLogIn";
import GoogleLogIn from "./google/GoogleLogIn";

const SocialLogIns = () => {



    return (
        <div className="flex items-center gap-2 justify-between">
            <GoogleLogIn></GoogleLogIn>
            <GithubLogIn></GithubLogIn>
        </div>
    );
};

export default SocialLogIns;