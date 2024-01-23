import { useDispatch, useSelector } from "react-redux";
import { AppStackC, AuthStackC } from "@app/constants/navigation";
import { useNavigation } from "@react-navigation/native";
import { toastr } from "@app/components/common/ToastComponent";
import { useRef, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "@react-native-firebase/auth";

export function useLoginModel() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const phoneInputRef = useRef(null);
  const [isEmailViewSelected, setIsEmailViewSelected] = useState(true);
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});

  console.log("ModelForm", formData);

  const onEmailViewPress = () => {
    setIsEmailViewSelected(true);
  };

  const onMobileViewPress = () => {
    setIsEmailViewSelected(false);
  };

  const onHeaderBtnPress = () => {
    toastr.showToast("success", "This is Toast");
  };

  const onForgotPasswordPress = () => {
    navigation.navigate(AuthStackC.FORGOT_PASSWORD_SCREEN);
  };

  const onSignupPress = () => {
    navigation.navigate(AuthStackC.SIGNUP_SCREEN);
  };

  const onSignInPress = () => {
    console.log("11", formData);
    // auth()
    //   .createUserWithEmailAndPassword(
    //     "deep@gmail.com",
    //     "Deep1999@"
    //   )
    //   .then(() => {
    //     console.log("User account created & signed in!");
    //     toastr.showToast('success','Login SuccessFully.')
    //     navigation.reset({
    //       index: 0,
    //       routes: [{ name: AuthStackC.HOME_SCREEN }],
    //     });
    //   })
    //   .catch((error) => {
    //     if (error.code === "auth/email-already-in-use") {
    //       console.log("That email address is already in use!");
    //     }

    //     if (error.code === "auth/invalid-email") {
    //       console.log("That email address is invalid!");
    //     }

    //     console.error(error);
    //   });
      navigation.reset({
        index: 0,
        routes: [{ name: AuthStackC.HOME_SCREEN }],
      });
  };

  return {
    onHeaderBtnPress,
    onEmailViewPress,
    onMobileViewPress,
    isEmailViewSelected,
    formData,
    setFormData,
    showPassword,
    setShowPassword,
    errorMsg,
    setErrorMsg,
    onForgotPasswordPress,
    onSignupPress,
    onSignInPress,
    phoneInputRef,
  };
}
