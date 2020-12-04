import Controller from "@ember/controller";
import { match, not, gte, and } from "@ember/object/computed";

export default Controller.extend({
  emailAddress: "",
  message: "",
  responseMessage: "",
  headerMessage: "Coming soon",

  isEmailValid: match("emailAddress", /^.+@.+\..+$/),
  isMessageValid: gte("message.length", 5),

  isBothTrue: and("isEmailValid", "isMessageValid"),
  isDisabled: not("isBothTrue"),

  actions: {
    sendContactMessage() {
      alert(`Your email: ${this.emailAddress} - Message sent: ${this.message}`);
      this.set(
        "responseMessage",
        "We got your message and we’ll get in touch soon."
      );
      this.set("emailAddress", "");
      this.set("message", "");
    },
  },
});
