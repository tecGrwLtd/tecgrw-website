import { useActionState, useState, useEffect } from "react";
import { emailSubscribe } from "@/actions/email.action";

const initialState = { success: null, message: "" };

export function useSubscriptionForm() {
  const [state, formAction, pending] = useActionState(emailSubscribe, initialState);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // // tracks the status of the subscription (null, true, false)

  useEffect(() => {
    if (state.success === null) return;

    if (state.success) {
      setStatus(true);
      setEmail("");
      const timer = setTimeout(() => {
        setStatus(null);
        document.querySelector("form")?.reset();
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setStatus(false);

      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return { email, setEmail, formAction, pending, status, setStatus };
}
