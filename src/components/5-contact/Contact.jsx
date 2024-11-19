import "./contact.css";

function Contact() {
    return ( <section className="contact ">
        <h1 className="main-title">Contact me</h1>
        <main className="flex">
        <sectoin className="left-section flex">
         
            <h1>Get in touch today</h1>
            <p>i love questions and feadback - and i always happy to help here are some way to contact me</p>
            <div className="card flex">
                <span className="icon-envelope icon"></span>
                <div className="">
                    <span>Email:</span>
                    <h2>mohamed@gmail.com</h2>
                </div>
            </div>
            <div className="card flex">
                <span className="icon-envelope icon"></span>
                <div className="">
                    <span>Phone:</span>
                    <h2>+222 3308505033</h2>
                </div>
            </div>
        </sectoin>
        <sectoin className="right-section flex ">
          <div className="flex">
          <form action="">
                <div className="flex">
                    <label htmlFor="email">Entre Your Email:</label>
                    <input type="email" placeholder="entre your email..." name="email" id="email" />
                </div>
                <div className="flex">
                    <label htmlFor="message">Entre Your message:</label>
                    <textarea type="text" placeholder="write your message here.." name="message" id="message" />
                </div>
                <button  className="submit" type="submit">Send message</button>
            </form> 
          </div>
        </sectoin>
        </main>
    </section> );
}

export default Contact;