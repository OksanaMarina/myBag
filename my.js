"use strict";

let user = {
  name: "Джон",
  go: function () {
    alert(this.name);
  },
};

user.go(); // ошибка!
