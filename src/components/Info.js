import image from "../images/photo-profile.png"

export default function Info(){
    return(
        <header className="info">
            <img src={image} className="info--image"/>
            <h1 className="info--title">Reza Aditya</h1>
            <h2 className="info--job_position">Web Developer</h2>
            <a href="http://rezzart-id.github.io" className="info--website_link">rezzart-id.github.io</a>
            <div className="info--button">
                <a href="mailto:rzaditya89@gmail.com" target="_blank" type="submit" className="info--button_email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M2.10241 4.70721L8.50001 7.90561L14.8976 4.70721C14.8739 4.29957 14.6953 3.9164 14.3983 3.63619C14.1012 3.35598 13.7083 3.19994 13.3 3.20001H3.70001C3.29167 3.19994 2.89876 3.35598 2.60175 3.63619C2.30473 3.9164 2.12609 4.29957 2.10241 4.70721Z" fill="#1E1F26"/>
                        <path d="M14.9 6.49441L8.50001 9.69441L2.10001 6.49441V11.2C2.10001 11.6244 2.26858 12.0313 2.56864 12.3314C2.86869 12.6314 3.27566 12.8 3.70001 12.8H13.3C13.7244 12.8 14.1313 12.6314 14.4314 12.3314C14.7314 12.0313 14.9 11.6244 14.9 11.2V6.49441Z" fill="#1E1F26"/>
                    </svg> Email</a>
                <a href="https://id.linkedin.com/in/rezzart" target="_blank" type="submit" className="info--button_linkedin"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#FFFFFF"/></svg> LinkedIn</a>
            </div>
        </header>
    )
}