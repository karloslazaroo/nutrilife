import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div>
        <div id='contact' class="contact">
		<div class="contact-box">
			<div class="left"></div>
			<div class="right">
				<h2>Contact Us</h2>
				<input type="text" class="field" placeholder="Your Name"/>
				<input type="text" class="field" placeholder="Your Email"/>
				<input type="text" class="field" placeholder="Phone"/>
				<textarea placeholder="Message" class="field"></textarea>
				<button class="btn">Send</button>
			</div>
		</div>
	</div>
    </div>
   
  )
}

export default Contact