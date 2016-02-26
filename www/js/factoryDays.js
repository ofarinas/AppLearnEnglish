/**
 * Created by Osvaldo on 2/25/2016.
 */
mainAngular
  .factory("firstDay", function ($localstorage) {
    var list = {};
    return {
      getListDay: function () {
        if($localstorage.getObject("firstDay")!=null){
          list=$localstorage.getObject("firstDay");
        }
        return list;
      },
      addWord: function (word, translator) {
        list[word] = translator;
        $localstorage.setObject("firstDay",list)
      },
      removeWord: function (word) {
        delete list[word];
        $localstorage.setObject("firstDay",list)
      }
    }
  })
  .factory("secondDay", function ($localstorage) {
    var list = {}
    return {
      getListDay: function () {
        if($localstorage.getObject("secondDay")!=null){
          list=$localstorage.getObject("secondDay");
        }
        return list;
      },
      addWord: function (word, translator) {
        list[word] = translator;
        $localstorage.setObject("secondDay",list)
      },
      removeWord: function (word) {
        delete list[word];
        $localstorage.setObject("secondDay",list)
      }
    }
  })
  .factory("thirdDay", function ($localstorage) {
    var list = {}
    return {
      getListDay: function () {
        if($localstorage.getObject("thirdDay")!=null){
          list=$localstorage.getObject("thirdDay");
        }
        return list;
      },
      addWord: function (word, translator) {
        list[word] = translator;
        $localstorage.setObject("thirdDay",list);
      },
      removeWord: function (word) {
        delete list[word];
        $localstorage.setObject("thirdDay",list);
      }
    }
  })
.factory("forDay", function ($localstorage) {
  var list = {}
  return {
    getListDay: function () {
      if($localstorage.getObject("fordDay")!=null){
        list=$localstorage.getObject("fordDay");
      }
      return list;
    },
    addWord: function (word, translator) {
      list[word] = translator;
      $localstorage.setObject("fordDay",list);
    },
    removeWord: function (word) {
      delete list[word];
      $localstorage.setObject("fordDay",list);
    }
  }
})
.factory("fiveDay", function ($localstorage) {
  var list = {}
  return {
    getListDay: function () {
      if($localstorage.getObject("fiveDay")!=null){
        list=$localstorage.getObject("fiveDay");
      }
      return list;
    },
    addWord: function (word, translator) {
      list[word] = translator;
      $localstorage.setObject("fiveDay",list);
    },
    removeWord: function (word) {
      delete list[word];
      $localstorage.setObject("fiveDay",list);
    }
  }
})
  .factory('$localstorage', ['$window', function($window) {
    return {
      set: function(key, value) {
        $window.localStorage[key] = value;
      },
      get: function(key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      setObject: function(key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function(key) {
        console.log(key);
        var variable=$window.localStorage[key];
        if($window.localStorage[key]==null)return null;
        return JSON.parse($window.localStorage[key] || '{}');
      }
    }
  }]);


