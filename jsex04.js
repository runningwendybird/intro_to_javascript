var cat = {
        tiredness: 20,
        hunger: 20,
        loneliness: 3,
        happiness: 15,
        obedience: -5000,
        feed: function () {
            console.log("Om nom nom");
            this.hunger = this.hunger - 5;
        },sleep: function () {
            console.log("zzzzzzzzZZZ");
            this.tiredness = this.tiredness - 10;
        }, play: function() {
            console.log("Wooooo, ha ha!");
            this.happiness = this.happiness + 5;
            this.loneliness = this.loneliness -1;
        }, pet: function () {
            console.log("purrrrrrr");
            this.happiness = this.happiness + 10;
            this.loneliness = this.loneliness - 1;
        }, train: function () {
            console.log("Sit kitty sit!");
            this.obedience = this.obedience + 100;
        }, catStatus: function () {
            console.log("Your cat's hunger level is ", this.hunger);
            console.log("Your cat's tiredness level is ", this.tiredness);
            console.log("Your cat's loneliness level is ", this.loneliness);
            console.log("Your cat's happiness level is ", this.happiness);
            console.log("Your cat's obedience level is ", this.obedience);
        }
};

cat.feed();
cat.sleep();
cat.play();
cat.pet();
cat.catStatus();

