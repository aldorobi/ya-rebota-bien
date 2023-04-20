const motorbase = Matter.Engine
const mundo = Matter.World
const elementos = Matter.Bodies
const cuerpos = Matter.Body

let motorfisico
let mundolet

var suelo
var peloton

function setup(){
    createCanvas(700,400)
    motorfisico = motorbase.create()
    mundolet = motorfisico.world
    var atrSuelo = {restitution: 1, frictionAir: 0.012, isStatic: true}
    suelo = elementos.rectangle(0,350,699,50,atrSuelo)
    var atrPeloton = {restitution: 0.75, frictionAir: 0}
    peloton = elementos.circle(200,100,30,atrPeloton)
    mundo.add(mundolet, suelo)
    mundo.add(mundolet,peloton)

}

function draw(){
    background("darkviolet")
    motorbase.update(motorfisico)
    rect(suelo.position.x,suelo.position.y,699,50)
    ellipse(peloton.position.x,peloton.position.y,30)
    
    

}