import {
  singInWithGooglePopup,
  createUser,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopup();
    createUser(user);
  };
  return (
    <div>
      <h1>Sing in page</h1>
      <button onClick={logGoogleUser}>Sing in with google</button>
    </div>
  );
};

export default SignIn;
