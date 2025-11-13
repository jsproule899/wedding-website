import FadeSection from '../components/FadeSection'

function GettingThere() {
    return (
        <FadeSection id='Travel' className="justify-center space-y-5">
            <h1 className="text-8xl/16 ">Getting There</h1>
            <div className="bg-white text-primary w-10/12 max-w-xl font-raleway p-2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.3767498445977!2d-6.094802722090676!3d54.70381877271402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4861a94735b98a3d%3A0x4fe559190b48872f!2sThe%20Rabbit%20Hotel%20%26%20Retreat!5e0!3m2!1sen!2suk!4v1762050726544!5m2!1sen!2suk" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='max-w-full w-full h-[60svh]' />
            </div>
            <div>
                <p className="text-md leading-4 mt-4">Rachael & Joshua</p>
                <p className="text-md leading-4">09.08.26</p>
            </div>
        </FadeSection>
    )
}

export default GettingThere