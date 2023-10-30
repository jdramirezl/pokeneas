function castJSONtoModel(json: any, model: any): any {
  try {
    const modelInstance = new model();
    const modelKeys = Object.keys(modelInstance);
    const jsonKeys = Object.keys(json);
    const keys = modelKeys.filter((key) => jsonKeys.includes(key));
    keys.forEach((key) => {
      modelInstance[key] = json[key];
    });
    return modelInstance;
  } catch (e) {
    console.log(e);
    console.log("Error casting JSON to model:" + model.name);
    return null;
  }
}

export { castJSONtoModel };
