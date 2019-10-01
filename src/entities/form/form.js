class form {
  constructor(definition) {
    if (
      !Array.isArray(definition) ||
      !definition.length ||
      !this.validForm(definition)
    ) {
      throw new Error("Form is not valid");
    }

    this._definition = definition; // test
  }
}
export default form;
