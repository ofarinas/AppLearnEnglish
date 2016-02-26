/**
 * Created by Osvaldo on 2/25/2016.
 */
mainAngular
  .factory("firstDay", function () {
    var list = {}
    return {
      getListDay: function () {
        return list;
      },
      addWord: function (word, translator) {
        list[word] = translator;
      },
      removeWord: function (word) {
        delete list[word];
      }
    }
  })
  .factory("secondDay", function () {
    var list = {}
    return {
      getListDay: function () {
        return list;
      },
      addWord: function (word, translator) {
        list[word] = translator;
      },
      removeWord: function (word) {
        delete list[word];
      }
    }
  })
  .factory("thirdDay", function () {
    var list = {}
    return {
      getListDay: function () {
        return list;
      },
      addWord: function (word, translator) {
        list[word] = translator;
      },
      removeWord: function (word) {
        delete list[word];
      }
    }
  })
.factory("forDay", function () {
  var list = {}
  return {
    getListDay: function () {
      return list;
    },
    addWord: function (word, translator) {
      list[word] = translator;
    },
    removeWord: function (word) {
      delete list[word];
    }
  }
})
.factory("fiveDay", function () {
  var list = {}
  return {
    getListDay: function () {
      return list;
    },
    addWord: function (word, translator) {
      list[word] = translator;
    },
    removeWord: function (word) {
      delete list[word];
    }
  }
});

