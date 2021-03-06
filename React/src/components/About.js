import image from "../aboutBackground.jpg"


const About = () => {
   

    return (
        <div className="bg-fixed bg-cover" style={{ backgroundImage: `url(${image})` }}>
             <section className="relative flex justify-center min-h-screen pt-12 lg:pt-36 px-8 bg-black bg-opacity-75">
                 <div className="container bg-black bg-opacity-50">
                      <h2 className="text-yellow-600 text-3xl py-2 px-3 font-bold">About Me</h2>
           
            <p className="text-gray-400 px-3 pt-10">
                Ever since I was a small boy I have had a fascination with machines and cars in specific. I
                got my very first car right after high school, a beautiful 1990 Mustang GT. That was the fastest
                car that I had ever been in. After I got a good taste of the performance that it had to offer I
                hungered for more. In order to achieve that higher performance I installed a turbo system
                with intercooler and 70mm turbo along with supporting modifications and got it professionally
                tuned. Once tuned, the car made 415 horsepower and 555 ft. lbs of torque to the rear
                wheels and would easily lose traction at 45+ mph with the press of the accelerator. I soon
                wanted better braking performance and stronger axles, so I swapped it from a four to a five
                lug wheel setup, converted it from rear drum brakes to rear disc brakes, and put larger brakes on it all around
                along with hardened axles and a stronger limited slip differential.
                This car was the start of my addiction. I have also owned a supercharged 2003 Mustang GT
                that I changed supercharger pulleys on and did supporting fuel and air system upgrades
                to make 373 rear wheel horsepower and 389 rear wheel torque. My current mustang is a 2006 Mustang that
                was originally a base V6 car with an automatic transmission that I swapped
                in the drivetrain from a wrecked 2012 Mustang GT that features the dual overhead cam 5.0L Coyote V8 engine
                and 6-speed manual transmission.
                <br />
                <br />
                I have a host of other interests, including playing video games, target shooting, playing the guitar, building things,
                working on personal coding projects, and a host of other things.



            </p>
                 </div>
           
           </section>

        </div>
    )
}
export default About;