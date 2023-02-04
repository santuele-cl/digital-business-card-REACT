const Profile = () => (
    <section className=''>
        <h1 className='text-2xl font-bold tracking-wide'>Clyde San</h1>
        <p className='text-red-300 text-sm'>Frontend Developer</p>
        <p className='text-xs my-2'>clyde.san.com</p>
        <div className='flex gap-4 my-5'>
            <button className='flex justify-center items-center gap-1 py-2 flex-1 bg-white rounded-md text-gray-800 font-semibold'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
                Email
            </button>
            <button className='flex justify-center items-center gap-1 py-2 flex-1 bg-blue-500 rounded-md text-white font-semibold'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#fff" d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
            </button>
        </div>

    </section>
)

export default Profile;