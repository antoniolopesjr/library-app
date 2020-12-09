import DS from "ember-data";
import { match, not, gte, and } from "@ember/object/computed";

export default DS.Model.extend({
  email: DS.attr("string"),
  message: DS.attr("string"),
});
