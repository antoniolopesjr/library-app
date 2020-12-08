/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import FirestoreAdapter from "emberfire/adapters/firestore";

export default FirestoreAdapter.extend({
  enablePersistence: true,
  persistenceSettings: { synchronizeTabs: true },
});
