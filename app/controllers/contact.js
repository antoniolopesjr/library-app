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
      const email = this.get("emailAddress");
      const message = this.get("message");

      const newContact = this.store.createRecord("contact", {
        email: email,
        message: message,
      });

      newContact.save().then((response) => {
        this.set("responseMessage", response);
        this.set("emailAddress", "");
        this.set("message", "");
      });
    },
  },
});
