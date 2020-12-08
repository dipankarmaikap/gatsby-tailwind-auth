import axios from "axios";
import { backendUrl } from "../helpers/helper";
import { setAlert } from "../actions/AlertAction";
export default async function RequestSignup(data, dispatch) {
  try {
    const res = await axios.post(`${backendUrl}/signup`, data);
    setAlert(res.data, "green", dispatch);
  } catch (error) {
    setAlert(error.response.data, "red", dispatch);
  }
}
