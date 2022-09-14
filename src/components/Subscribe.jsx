import React from 'react';

const Subscribe = () => {
  return (
<div className="flex flex-col text-white">
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 id="Subscribe" className='mb-5 text-center text-red-800'>Subscribe</h2>

        <form 
					action="https://www.getrevue.co/profile/linkhaggman/add_subscriber" 
					method="post" 
					id="revue-form"
					name="revue-form"
					target="_blank">

					<div className="flex flex-col md:flex-row justify-center mb-3">
						<input
							placeholder="Your email address..."
							type="email"
							name="member[email]"
							id="member_email"
							className="text-1xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-20 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
						/>
						<input
							type="submit"
							value="Join"
							name="member[subscribe]"
							id="member_submit"
							className="bg-red-800 md:rounded-tl-none md:rounded-bl-none rounded-full text-1xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
						/>
					</div>

					<div className="opacity-75 text-white italic">
						By subscribing, you agree with Revue's <a target="_blank" href="https://www.getrevue.co/terms" className="hover:opacity-80 duration-150">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-80 duration-150">Privacy Policy</a>.
					</div>
				</form>
			</main>
					</div>

  );
};

export default Subscribe;
