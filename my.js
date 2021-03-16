let ladder = {
  step: 0,
  up() {
    this.step++;
    alert(this);
  },
};

ladder.up();
