class Form
{
    constructor()
    {
        this.input=createInput("name");
        this.button=createButton("play");
        this.greeting=createElement("h2");
        this.title=createElement("h1");
    }

    display()
    {
        this.title.html("CAR RACING GAME");
        this.title.position(130,0);
        this.input.position(130,160);
        this.button.position(250,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.greeting.html("WELCOME "+this.input.value());
            this.greeting.position(130,100);
        })
    }


}