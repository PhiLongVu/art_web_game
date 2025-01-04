import { useState } from 'react';
import backgroundImage from '../assets/images/image.png';

const LandingPage = () => {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState(null);

    // Sample avatar options
    const avatars = [
        'https://via.placeholder.com/100/0000FF/808080?Text=Avatar+1',
        'https://via.placeholder.com/100/FF0000/808080?Text=Avatar+2',
        'https://via.placeholder.com/100/00FF00/808080?Text=Avatar+3',
        'https://via.placeholder.com/100/FFFF00/808080?Text=Avatar+4'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && avatar) {
            // Handle player join logic (e.g., emit socket event, navigate to game, etc.)
            console.log('Player Joined:', { name, avatar });
        } else {
            alert('Please enter your name and choose an avatar');
        }
    };

    return (
        <div className=' text-white w-screen h-screen'>
            <div
                id="background"
                className="absolute top-0 left-0 w-full h-full bg-repeat bg-orange-400"
                style={{
                    backgroundImage: `url(${backgroundImage})`, // Apply the background image here
                    zIndex: -1
                }}
            />
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-[20px] rounded-[12px] bg-orange-500 bg-opacity-90 flex flex-col items-center justify-center border-4 border-orange-700">
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center space-x-4 w-full">
                            {/* Input for Name */}
                            <label className="flex-grow">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    className="border-2 border-black border-opacity-15 p-2 rounded-md w-full"
                                />
                            </label>

                            {/* Select Box for Options */}
                            <label className="w-1/4">
                                <select
                                    value={avatar}
                                    onChange={(e) => setAvatar(e.target.value)}
                                    className="border-2 border-black border-opacity-15 p-2 rounded-md w-full"
                                >
                                    <option value="" disabled>
                                        English
                                    </option>
                                    {avatars.map((avatar, index) => (
                                        <option key={index} value={avatar}>
                                            Avatar {index + 1}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className='mt-4'>
                            <label>Select an Avatar:</label>
                            <div className='flex space-x-4'>
                                {avatars.map((avatar, index) => (
                                    <img
                                        key={index}
                                        src={avatar}
                                        alt={`Avatar ${index + 1}`}
                                        onClick={() => setAvatar(avatar)}
                                        className={`w-16 h-16 cursor-pointer ${avatar === avatar ? 'border-4 border-yellow-500' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <button type='submit' className='mt-4 p-2 bg-yellow-500 text-black'>
                            Join Game
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default LandingPage;
