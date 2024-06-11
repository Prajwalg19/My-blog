import * as Yup from "yup"

export const registerSchema = Yup.object().shape(
    {
        userName: Yup.string().required("User name required"),
        email: Yup.string().email().required(),
        password: Yup.string().required().min(8)
    }
)
