import mutations from "@/store/mutations";

describe("mutations", () => {
  it("has unique emails", () => {
    let state = {
      fields: {
        cc: []
      }
    };
    mutations.updateCCField(state, "drew@geedew.com, drew@geedew.com");
    expect(state.fields.cc.length).toBe(1);
  });
});
