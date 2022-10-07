const {
  EfficientNetLabelLanguage,
  EfficientNetLanguageProvider,
} = require("../index");

test("EfficientNetLanguageProvider - check english translation file", (done) => {
  const englishProvider = new EfficientNetLanguageProvider(
    EfficientNetLabelLanguage.ENGLISH
  );
  englishProvider
    .load()
    .then(() => {
      const result = englishProvider.get(0);
      expect(result).toBeDefined();
      expect(result).toEqual("tench, Tinca tinca");
      done();
    })
    .catch((error) => done(error));
});
test("EfficientNetLanguageProvider - check chinese translation file", (done) => {
  const chineseProvider = new EfficientNetLanguageProvider(
    EfficientNetLabelLanguage.CHINESE
  );
  chineseProvider
    .load()
    .then(() => {
      const result = chineseProvider.get(0);
      expect(result).toBeDefined();
      expect(result).toEqual("丁鲷");
      done();
    })
    .catch((error) => done(error));
});
test("EfficientNetLanguageProvider - check spanish translation file", (done) => {
  const spanishProvider = new EfficientNetLanguageProvider(
    EfficientNetLabelLanguage.SPANISH
  );
  spanishProvider
    .load()
    .then(() => {
      const result = spanishProvider.get(0);
      expect(result).toBeDefined();
      expect(result).toEqual("tenca, Tinca tinca");
      done();
    })
    .catch((error) => done(error));
});
test("EfficientNetLanguageProvider - check arabic translation file", (done) => {
  const arabicProvider = new EfficientNetLanguageProvider(
    EfficientNetLabelLanguage.ARABIC
  );
  
  arabicProvider
    .load()
    .then(() => {
      const result = arabicProvider.get(0);
      expect(result).toBeDefined();
      expect(result).toEqual("تنش ، تينكا تينكا");
      done();
    })
    .catch((error) => done(error));
});
