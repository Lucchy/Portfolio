import '../styles/form.css'

const Form = () => {

    return(
        <div className="form-section" id="contacts"> 
            <h2>Contact Me</h2>
            <form action="">
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
                <input type='email' placeholder='yourmail@example.com'/>
                <input type="text" placeholder='Object'/>
                <input type="text" placeholder='Write your message here :)' />
                <p className='form-error'></p>
                <p>This form isn't really working, try my mail instead.</p>
            </form>
        </div>
    );
};

export default Form;
